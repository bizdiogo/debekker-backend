import { forwardTo } from 'prisma-binding'
import { Context, validateTwoDate, clearEmpties } from '../../utils'

export default {
  createEvent: async (parent, { data }, ctx: Context, info) => {
    !!data.startTime &&
      !!data.endTime &&
      validateTwoDate(data.startTime, data.endTime)
    return ctx.db.mutation.createEvent({ data }, info)
  },
  updateEvent: async (parent, { where: { id }, data }, ctx: Context, info) => {
    !!data.startTime &&
      !!data.endTime &&
      validateTwoDate(data.startTime, data.endTime)
    return ctx.db.mutation.updateEvent(
      { where: { id }, data: clearEmpties(data) },
      info
    )
  },
  deleteEvent: forwardTo('db')
}
