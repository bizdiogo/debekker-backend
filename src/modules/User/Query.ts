import { forwardTo } from 'prisma-binding'
import { getAuthPayload, Context } from '../../utils'

export default {
  me(parent, args, ctx: Context, info) {
    const id = getAuthPayload(ctx)
    return ctx.db.query.user({ where: { id } }, info)
  },
  user: forwardTo('db'),
  users: forwardTo('db')
}
