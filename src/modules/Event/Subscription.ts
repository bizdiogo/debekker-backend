import { forwardTo } from 'prisma-binding'
import { Context } from '../../utils'
import * as moment from 'moment'

export default {
  event:  {
    subscribe: forwardTo('db')
  },
  eventsNotInvoiced: {
    subscribe: async (parent, { filter }, ctx: Context, info) => 
      ctx.db.subscription.event(
        {
          where: {
            AND: [
              { mutation_in: ['CREATED', 'DELETED', 'UPDATED'] },
              { node: { offer: { endTime_lt: moment().toDate() } } },
              { node: { offer: { client: { name_contains: filter } } } },
              { node: { invoice: null } } ,
              { node: { canceled: false } }
            ]
          }
        },
        info
      )
  }
}
