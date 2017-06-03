import {SET_YEAR} from './../constans/page'

export function setYear(year) {
  return {
    type: SET_YEAR,
    payload: year
  }
}
