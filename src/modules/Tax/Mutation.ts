import { forwardTo } from 'prisma-binding'

export default {
  createTax: forwardTo('db'),
  updateTax: forwardTo('db'),
  deleteTax: forwardTo('db')
}
