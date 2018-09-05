import { forwardTo } from 'prisma-binding'

export default {
  employee:  {
    subscribe: forwardTo('db')
  }
}
