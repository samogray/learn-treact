import { GET_PHOTOS_REQUEST, GET_PHOTOS_SUCCESS, SET_DATA, DELETE_IMAGE } from './../constans/page'
import _ from 'lodash'

export default function page(state = {}, action) {
  switch (action.type) {
    case GET_PHOTOS_REQUEST:
      return { ...state, year: action.payload, fetching: true }
    case GET_PHOTOS_SUCCESS:
      return { ...state, year: action.payload, fetching: false }
    case SET_DATA:
      return action.payload
    case DELETE_IMAGE: {
        const getNewImage = photos => photos.filter((photo, index) => index !== action.index)
        return _.map(state, page => {
          if (page.year === action.year) {
            return {
              ...page,
              photos: getNewImage(page.photos)
            }
          }

          return page
        })
      }
    default: return state
  }
}
