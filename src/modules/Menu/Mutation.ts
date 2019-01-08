import { forwardTo } from 'prisma-binding'

export default {
  createMenu: forwardTo('db'),
  updateMenu: forwardTo('db'),
  deleteMenu: forwardTo('db')
}
