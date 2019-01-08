import { forwardTo } from 'prisma-binding'

export default {
  invoice: forwardTo('db'),
  invoices: forwardTo('db'),
  invoicesConnection: forwardTo('db'),
}
