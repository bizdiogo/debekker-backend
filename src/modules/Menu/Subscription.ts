import { forwardTo } from 'prisma-binding'

export default {
  menu:  {
    subscribe: forwardTo('db')
  }
}
