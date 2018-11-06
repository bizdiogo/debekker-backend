import { forwardTo } from 'prisma-binding'

export default {
  itemTranslation: forwardTo('db'),
  itemTranslations: forwardTo('db'),
  itemTranslationsConnection: forwardTo('db')
}
