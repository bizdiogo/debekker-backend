import { forwardTo } from 'prisma-binding'

export default {
  itemProposal:  {
    subscribe: forwardTo('db')
  }
}
