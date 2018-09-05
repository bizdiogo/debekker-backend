import { forwardTo } from 'prisma-binding'

export default {
  client:  {
    subscribe: forwardTo('db')
  }
}
