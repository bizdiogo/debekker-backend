import { forwardTo } from 'prisma-binding'

export default {
  createItemProposalFlag: forwardTo('db'),
  updateItemProposalFlag: forwardTo('db'),
  deleteItemProposalFlag: forwardTo('db')
}
