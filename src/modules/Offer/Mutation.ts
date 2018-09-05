import { forwardTo } from 'prisma-binding'
import { Context, cloneOffer, throwError } from '../../utils'
import { StatusOffer } from '../../enums/status'
import allOffer from './Offer'

export default {
  createOffer: forwardTo('db'),
  deleteOffer: forwardTo('db'),
  updateOffer: async (_, { where: { id }, data: { ...args } }, ctx: Context, info) => {
    const offer = await ctx.db.query.offer({ where: { id } }, allOffer)

    if (!!args.status && args.status === StatusOffer.Accepted) {
      const event = {
        client: {
          connect: {
            id: offer.client.id
          }
        },
        offer: {
          connect: { id }
        },
        startTime: offer.startTime,
        endTime: offer.endTime,
        gmtOffset: offer.gmtOffset
      }

      try {
        await ctx.db.mutation.createEvent({ data: event })
      } catch (e) {
        throwError(true, new Error(`Fail to create Event: ${e}`))
      }
    }

    if (!!args.version && args.version > offer.version &&
        !!args.status && args.status === StatusOffer.Rejected) {
      try {
        const clone = cloneOffer(offer)
        clone.version++ 
        await ctx.db.mutation.createOffer({ data: clone })
      } catch (e) {
        throwError(true, new Error(`Fail to create create new version: ${e}`))
      }
    }

    return ctx.db.mutation.updateOffer({ where: { id }, data: args })
  },
}
