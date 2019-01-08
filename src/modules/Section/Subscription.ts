import { forwardTo } from 'prisma-binding'

export default {
  section:  {
    subscribe: forwardTo('db')
  }
}
