import {GET_PHOTOS_REQUEST, GET_PHOTOS_SUCCESS, SET_DATA} from './../constans/page'

export default function page(state = {}, action) {
  switch  (action.type) {
    case GET_PHOTOS_REQUEST:
      return { ...state, year: action.payload, fetching: true }
    case GET_PHOTOS_SUCCESS:
      return { ...state, year: action.payload, fetching: false }
      case SET_DATA:
      return { ...state, data: action, fetching: false }
    default: return state
  }
}
