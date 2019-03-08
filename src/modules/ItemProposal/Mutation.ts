import { forwardTo } from 'prisma-binding'

export default {
  createItemProposal: forwardTo('db'),
  updateItemProposal: forwardTo('db'),
  deleteItemProposal: forwardTo('db')
}
