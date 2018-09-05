import { forwardTo } from 'prisma-binding'

export default {
  job: forwardTo('db'),
  jobs: forwardTo('db'),
}
