import * as moment from 'moment'
import { Context } from '../../utils'

export default {
  eventsLast30Days: async (parent, {}, ctx: Context, info) => {
    return ctx.db.query.events({
      where: {
        AND: [
          {startTime_gte: moment().subtract(31, 'day').utc().startOf('day').toISOString()},
          {endTime_lte: moment().subtract(1, 'day').utc().endOf('day').toISOString()}
        ]
      }
    }, info)
  },
  eventsNext30Days: async (parent, {}, ctx: Context, info) => {
    return ctx.db.query.events({
      where: {
        AND: [
          {startTime_gte: moment().add(1, 'day').utc().startOf('day').toISOString()},
          {endTime_lte: moment().add(31, 'day').utc().endOf('day').toISOString()}
        ]
      }
    }, info)
  },
  eventsToday: async (parent, {}, ctx: Context, info) => {
    return ctx.db.query.events({
      where: {
        AND: [
          {startTime_gte: moment().utc().startOf('day').toISOString()},
          {endTime_lte: moment().utc().endOf('day').toISOString()}
        ]
      }
    }, info)
  },
}
