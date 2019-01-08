import { forwardTo } from 'prisma-binding'

export default {
  invoice:  {
    subscribe: forwardTo('db')
  }
}
