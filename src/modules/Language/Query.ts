import { forwardTo } from 'prisma-binding'

export default {
  language: forwardTo('db'),
  languages: forwardTo('db'),
}
