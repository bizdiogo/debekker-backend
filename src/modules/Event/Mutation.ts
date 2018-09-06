import { forwardTo } from 'prisma-binding'
import { Context, validateTwoDate } from '../../utils'

export default {
  createEvent: async (parent, { data }, ctx: Context, info) => {
    validateTwoDate(data.startTime, data.endTime)
    return ctx.db.mutation.createEvent({ data }, info)
  },
  updateEvent: async (parent, { where: { id }, data }, ctx: Context, info) => {
    validateTwoDate(data.startTime, data.endTime)
    return ctx.db.mutation.updateEvent({ where: { id }, data }, info)
  },
  deleteEvent: forwardTo('db')
}
