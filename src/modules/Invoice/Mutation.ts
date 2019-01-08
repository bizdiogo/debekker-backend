import { forwardTo } from 'prisma-binding'
import { Context, clearEmpties } from '../../utils'
import * as R from 'ramda'

export default {
  createInvoice: async (parent, { data }, ctx: Context, info) => {
    const lastInvoice = await ctx.db.query.invoices({ orderBy: 'number_DESC' })

    return ctx.db.mutation.createInvoice({ data: { ...R.omit(['number'], clearEmpties(data)), number: !!lastInvoice ? ++lastInvoice[0].number : 1 } }, info)
  },
  updateInvoice: forwardTo('db'),
  deleteInvoice: forwardTo('db')
}
