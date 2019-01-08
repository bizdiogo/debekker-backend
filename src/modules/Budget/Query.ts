import { forwardTo } from 'prisma-binding'

export default {
  budget: forwardTo('db'),
  budgets: forwardTo('db'),
  budgetsConnection: forwardTo('db'),
}
