import { forwardTo } from 'prisma-binding'
import { Context, validateTwoDate } from '../../utils'
import allStuff from './Stuff'

export default {
  stuff: forwardTo('db'),
  stuffs: forwardTo('db'),
  stuffsConnection: forwardTo('db'),
  stuffsAvailable: async (parent, { startTime, endTime, ...args }, ctx: Context, info) => {
    validateTwoDate(startTime, endTime)
    return ctx.db.query.stuffs({
      where: {
        ...args,
        events_every: {
          OR: [
            {startTime_gt: endTime},
            {endTime_lt: startTime}
          ]
        }
      }
    }, allStuff)
  },
}
