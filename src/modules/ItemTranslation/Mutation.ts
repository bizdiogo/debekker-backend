import { forwardTo } from 'prisma-binding'

export default {
  createItemTranslation: forwardTo('db'),
  updateItemTranslation: forwardTo('db'),
  deleteItemTranslation: forwardTo('db')
}
