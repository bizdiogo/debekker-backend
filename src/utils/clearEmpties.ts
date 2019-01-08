import * as R from 'ramda'

const clearEmpties = o => {
  for (let k in o) {
    if (!o[k] || typeof o[k] !== 'object') {
      continue
    }

    clearEmpties(o[k])
    if (Object.keys(o[k]).length === 0) {
      delete o[k]
    }
  }

  return R.pickBy((val, key) => val !== undefined && val !== null, o)
}

export default clearEmpties
