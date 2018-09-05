import { forwardTo } from 'prisma-binding'

export default {
  clientContact:  {
    subscribe: forwardTo('db')
  }
}
