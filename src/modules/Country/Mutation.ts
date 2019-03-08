import { forwardTo } from 'prisma-binding'

export default {
  createCountry: forwardTo('db'),
  updateCountry: forwardTo('db'),
  deleteCountry: forwardTo('db')
}
