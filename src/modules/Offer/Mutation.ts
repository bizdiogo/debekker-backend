import { forwardTo } from 'prisma-binding'
import { Context, cloneOffer, throwError, isBefore } from '../../utils'
import { StatusOffer } from '../../enums/status'
import allOffer from './Offer'

const validDate = (startTime, endTime) => throwError(!isBefore(startTime, endTime), new Error('StartTime should be smaller EndTime'))

export default {
  createOffer: async (parent, { data }, ctx: Context, info) => {
    validDate(data.startTime, data.endTime)
    return ctx.db.mutation.createOffer({ data }, info)
  },
  deleteOffer: forwardTo('db'),
  updateOffer: async (parent, { where: { id }, data: { ...args } }, ctx: Context, info) => {
    const offer = await ctx.db.query.offer({ where: { id } }, allOffer)

    validDate(args.startTime, args.endTime)

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

    return ctx.db.mutation.updateOffer({ where: { id }, data: args }, info)
  },
}
