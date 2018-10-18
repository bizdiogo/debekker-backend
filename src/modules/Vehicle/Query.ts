import { forwardTo } from 'prisma-binding'
import { Context } from '../../utils'
import * as moment from 'moment'

export default {
  vehicle: forwardTo('db'),
  vehicles: forwardTo('db'),
  vehiclesConnection: forwardTo('db'),
  vehiclesAvailable: async (
    parent,
    { startTime, endTime, filter },
    ctx: Context,
    info
  ) => {
    startTime = !startTime || !moment(startTime).isValid() ? null : startTime
    endTime = !endTime || !moment(endTime).isValid() ? null : endTime

    return ctx.db.query.vehicles(
      {
        where: {
          AND: [
            {
              events_every: {
                OR: [
                  { offer: { startTime_gt: endTime } },
                  { offer: { endTime_lt: startTime } }
                ]
              }
            },
            {
              OR: [
                { name_contains: filter || '' },
                { plate_contains: filter || '' }
              ]
            }
          ]
        }
      },
      info
    )
  }
}
