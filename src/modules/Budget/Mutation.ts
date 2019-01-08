import { forwardTo } from 'prisma-binding'

export default {
  createBudget: forwardTo('db'),
  updateBudget: forwardTo('db'),
  deleteBudget: forwardTo('db')
}
