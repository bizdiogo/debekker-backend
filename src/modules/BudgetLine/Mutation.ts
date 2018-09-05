import { forwardTo } from 'prisma-binding'

export default {
  createBudgetLine: forwardTo('db'),
  updateBudgetLine: forwardTo('db'),
  deleteBudgetLine: forwardTo('db')
}
