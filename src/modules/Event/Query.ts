import { forwardTo } from 'prisma-binding'
import { Context, validateTwoDate } from '../../utils'

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
  }
}
