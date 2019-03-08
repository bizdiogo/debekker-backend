import { forwardTo } from 'prisma-binding'

export default {
  itemProposal: forwardTo('db'),
  itemProposals: forwardTo('db'),
  itemProposalsConnection: forwardTo('db'),
}
