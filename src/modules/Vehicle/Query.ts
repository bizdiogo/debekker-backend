import { forwardTo } from 'prisma-binding'
import { Context } from '../../utils'
import allVechile from './Vehicle'

export default {
  vehicle: forwardTo('db'),
  vehicles: forwardTo('db'),
  vehiclesAvailable: (parent, { startTime, endTime, gmtOffset }, ctx: Context, info) => {
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
