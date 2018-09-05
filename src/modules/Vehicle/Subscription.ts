import { forwardTo } from 'prisma-binding'

export default {
  vehicle:  {
    subscribe: forwardTo('db')
  }
}
