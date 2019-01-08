import { forwardTo } from 'prisma-binding'
import { Context, validateTwoDate } from '../../utils'
import * as moment from 'moment'

export default {
  event: forwardTo('db'),
  events: forwardTo('db'),
  eventsConnection: forwardTo('db'),
  eventsCalendar: async (
    parent,
    { startTime, endTime, name },
    ctx: Context,
    info
  ) => {
    validateTwoDate(startTime, endTime)
    return ctx.db.query.events(
      {
        where: {
          AND: [
            { offer: { startTime_gte: startTime } },
            { offer: { endTime_lte: endTime } },
            {
              offer: {
                client: { name_contains: name }
              }
            }
          ]
        }
      },
      info
    )
  },
  eventsNotInvoiced: async (parent, { filter, orderBy, first, skip }, ctx: Context, info) => {
    return ctx.db.query.events(
      {
        orderBy,
        first,
        skip,
        where: {
          AND: [
            { offer: { endTime_lt: moment().toDate() } },
            { offer: { client: { name_contains: filter } } },
            { invoice: null },
            { canceled: false }
          ]
        }
      },
      info
    )
  },
  eventsNotInvoicedConnection: async (parent, { filter }, ctx: Context, info) => {
    return ctx.db.query.eventsConnection(
      {
        where: {
          AND: [
            { offer: { endTime_lt: moment().toDate() } },
            { offer: { client: { name_contains: filter } } },
            { invoice: null },
            { canceled: false }
          ]
        }
      },
      info
    )
  }
}
