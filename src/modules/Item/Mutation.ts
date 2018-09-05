import { forwardTo } from 'prisma-binding'

export default {
  createItem: forwardTo('db'),
  updateItem: forwardTo('db'),
  deleteItem: forwardTo('db')
}
