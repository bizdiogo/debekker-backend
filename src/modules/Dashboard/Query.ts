import * as moment from 'moment'
import gql from 'graphql-tag'
import { StatusOffer } from '../../enums/status'
import { Context } from '../../utils'

const count = gql`
  query {
    aggregate {
      count
    }
  }
`

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
  currentOffers: async (parent, {}, ctx: Context, info) => {
    return ctx.db.query.offersConnection({
      where: {
        status: StatusOffer.Pending
      }
    }, count)
  },
  countClients: async (parent, {}, ctx: Context, info) => {
    return ctx.db.query.clientsConnection({}, count)
  },
}
