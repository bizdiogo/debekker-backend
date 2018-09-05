import { forwardTo } from 'prisma-binding'

export default {
  place:  {
    subscribe: forwardTo('db')
  }
}
