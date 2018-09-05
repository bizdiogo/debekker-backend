import * as jwt from 'jsonwebtoken'
import { UnauthorizedError, InvalidTokenError } from './errors'
import { Context } from './context'
import throwError from './throwError'

export default (ctx: Context) => {
  const authorization = ctx.request
    ? ctx.request.get('authorization')
    : ctx.connection.context.authorization

  throwError(!authorization, new UnauthorizedError())

  const token = authorization.replace('Bearer ', '')
  const { userId } = jwt.verify(token, process.env.APP_SECRET) as { userId: string }

  throwError(!userId, new InvalidTokenError())

  return userId
}
