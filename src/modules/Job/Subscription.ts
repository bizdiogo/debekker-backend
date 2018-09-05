import { forwardTo } from 'prisma-binding'

export default {
  job:  {
    subscribe: forwardTo('db')
  }
}
