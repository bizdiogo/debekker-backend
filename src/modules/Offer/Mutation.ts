import { forwardTo } from 'prisma-binding'
import {
  Context,
  throwError,
  validateTwoDate,
  clearEmpties,
  cloneOffer
} from '../../utils'
import { StatusOffer } from '../../enums/status'
import OfferSchema from './Offer'

export default {
  createOffer: async (parent, { data }, ctx: Context, info) => {
    !!data.startTime &&
      !!data.endTime &&
      validateTwoDate(data.startTime, data.endTime)
    return ctx.db.mutation.createOffer({ data: clearEmpties(data) }, info)
  },
  deleteOffer: forwardTo('db'),
  updateOffer: async (
    parent,
    { where: { id }, data: { ...args } },
    ctx: Context,
    info
  ) => {
    !!args.startTime &&
      !!args.endTime &&
      validateTwoDate(args.startTime, args.endTime)

    return ctx.db.mutation.updateOffer(
      { where: { id }, data: clearEmpties(args) },
      info
    )
  },
  acceptAndCreate: async (parent, { id }, ctx: Context, info) => {
    try {
      await ctx.db.mutation.updateOffer({
        where: { id },
        data: { status: StatusOffer.Accepted }
      })
    } catch (e) {
      throwError(true, new Error(`Fail to accept offer: ${e}`))
    }

    const event = {
      offer: {
        connect: { id }
      }
    }

    return ctx.db.mutation.createEvent({ data: event }, info)
  },
  rejectAndCreate: async (parent, { id }, ctx: Context, info) => {
    const offer = await ctx.db.query.offer({ where: { id } }, OfferSchema)
    const clone = cloneOffer(offer)

    try {
      await ctx.db.mutation.updateOffer({
        where: { id },
        data: { status: StatusOffer.Rejected }
      })
    } catch (e) {
      throwError(true, new Error(`Fail to reject offer: ${e}`))
    }

    return ctx.db.mutation.createOffer({ data: clearEmpties(clone) }, info)
  }
}
