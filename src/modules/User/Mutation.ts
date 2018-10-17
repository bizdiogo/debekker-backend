import * as bcrypt from 'bcryptjs'
import * as jwt from 'jsonwebtoken'
import { forwardTo } from 'prisma-binding'
import { Context, throwError, getAuthPayload } from '../../utils'
import { Roles } from '../../enums/roles'

export default {
  login: async (parent, { email, password }, ctx: Context, info) => {
    const user = await ctx.db.query.user({ where: { email } })
    throwError(!user, new Error(`No such user found for email: ${email}`))

    const valid = await bcrypt.compare(password, user.password)
    throwError(!valid, new Error('Invalid password'))

    return {
      token: jwt.sign({ userId: user.id }, process.env.APP_SECRET),
      user
    }
  },

  createUser: async (parent, { data }, ctx, info) => {
    const password = await bcrypt.hash(data.password, 10)
    const id = getAuthPayload(ctx)
    const user = await ctx.db.query.user({ where: { id } })

    throwError(
      user.role !== Roles.Admin && data.role === Roles.Admin,
      new Error(`Users not Admin cannot create other users admins`)
    )

    return ctx.db.mutation.createUser({ data: { ...data, password } })
  },

  updateUser: async (parent, { where: { id }, data }, ctx, info) => {
    const user = await ctx.db.query.user({ where: { id } })
    throwError(
      user.role !== Roles.Admin && user.id !== getAuthPayload(ctx),
      new Error(`You not Admin user`)
    )

    let password = null
    if (!!data.password) {
      password = await bcrypt.hash(data.password, 10)
      return ctx.db.mutation.updateUser(
        { where: { id }, data: { ...data, password } },
        info
      )
    }

    return ctx.db.mutation.updateUser({ where: { id }, data }, info)
  },
  deleteUser: forwardTo('db')
}
