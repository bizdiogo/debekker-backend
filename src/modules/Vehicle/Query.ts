import { forwardTo } from 'prisma-binding'
import { Context, validateTwoDate } from '../../utils'
import allVechile from './Vehicle'

export default {
  vehicle: forwardTo('db'),
  vehicles: forwardTo('db'),
  vehiclesConnection: forwardTo('db'),
  vehiclesAvailable: async (parent, { startTime, endTime, }, ctx: Context, info) => {
    validateTwoDate(startTime, endTime)
    return ctx.db.query.vehicles({
      where: {
        events_every: {
          OR: [
            {startTime_gt: endTime},
            {endTime_lt: startTime}
          ]
        }
      }
    }, allVechile)
  },
}
