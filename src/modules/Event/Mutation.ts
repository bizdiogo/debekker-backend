import { forwardTo } from 'prisma-binding'

export default {
  createEvent: forwardTo('db'),
  updateEvent: forwardTo('db'),
  deleteEvent: forwardTo('db')
}
