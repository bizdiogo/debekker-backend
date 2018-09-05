import { forwardTo } from 'prisma-binding'

export default {
  budgetLine: forwardTo('db'),
  budgetLines: forwardTo('db'),
}
