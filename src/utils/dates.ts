import * as moment from 'moment'
import { throwError } from './'

export const isBefore = (startTime, endTime) => {
  return moment(startTime).isBefore(moment(endTime))
}

export const validateTwoDate = (startTime, endTime) => {
  throwError(!!startTime && !moment(startTime).isValid(), new Error('StartTime is invalid date'))
  throwError(!!endTime && !moment(endTime).isValid(), new Error('EndTime is invalid date'))
  throwError(!isBefore(startTime, endTime), new Error('StartTime should be smaller EndTime'))
}