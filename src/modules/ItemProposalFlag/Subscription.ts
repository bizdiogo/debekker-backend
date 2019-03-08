import { forwardTo } from 'prisma-binding'

export default {
  itemProposalFlag:  {
    subscribe: forwardTo('db')
  }
}
