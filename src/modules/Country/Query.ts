import { forwardTo } from 'prisma-binding'

export default {
  country: forwardTo('db'),
  countries: forwardTo('db'),
  countriesConnection: forwardTo('db'),
}
