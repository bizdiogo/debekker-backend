import { forwardTo } from 'prisma-binding'

export default {
  section: forwardTo('db'),
  sections: forwardTo('db'),
  sectionsConnection: forwardTo('db'),
}
