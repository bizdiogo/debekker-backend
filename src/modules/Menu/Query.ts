import { forwardTo } from 'prisma-binding'

export default {
  menu: forwardTo('db'),
  menus: forwardTo('db'),
  menusConnection: forwardTo('db'),
}
