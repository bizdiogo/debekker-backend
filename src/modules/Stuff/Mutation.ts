import { forwardTo } from 'prisma-binding'

export default {
  createStuff: forwardTo('db'),
  updateStuff: forwardTo('db'),
  deleteStuff: forwardTo('db')
}
