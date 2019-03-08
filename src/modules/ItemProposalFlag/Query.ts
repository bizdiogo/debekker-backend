import { forwardTo } from 'prisma-binding'

export default {
  itemProposalFlag: forwardTo('db'),
  itemProposalFlags: forwardTo('db'),
  itemProposalFlagsConnection: forwardTo('db'),
}
