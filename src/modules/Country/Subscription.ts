import { forwardTo } from 'prisma-binding'

export default {
  country:  {
    subscribe: forwardTo('db')
  }
}
