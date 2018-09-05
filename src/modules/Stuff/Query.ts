import { forwardTo } from 'prisma-binding'
import { Context } from '../../utils'
import allStuff from './Stuff'

export default {
  stuff: forwardTo('db'),
  stuffs: forwardTo('db'),
  stuffsAvailable: (parent, { startTime, endTime, ...args }, ctx: Context, info) => {
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
