import { forwardTo } from 'prisma-binding'

export default {
  stuff:  {
    subscribe: forwardTo('db')
  }
}
