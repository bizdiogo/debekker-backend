import { forwardTo } from 'prisma-binding'

export default {
  createCategory: forwardTo('db'),
  updateCategory: forwardTo('db'),
  deleteCategory: forwardTo('db')
}
