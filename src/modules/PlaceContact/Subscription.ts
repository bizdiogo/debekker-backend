import { forwardTo } from 'prisma-binding'

export default {
  placeContact:  {
    subscribe: forwardTo('db')
  }
}
