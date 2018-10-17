import * as moment from 'moment'
import { throwError } from './'

export const isBefore = (startTime, endTime) => {
  return moment(startTime).isBefore(moment(endTime))
}

export const validateTwoDate = (startTime, endTime) => {
  throwError(!isBefore(startTime, endTime), new Error('StartTime should be smaller EndTime'))
}