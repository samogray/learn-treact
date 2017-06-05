import {GET_PHOTOS_REQUEST, GET_PHOTOS_SUCCESS} from './../constans/page'

export function getPhotos(year) {
  return (dispatch) => {
    dispatch({
      type: GET_PHOTOS_REQUEST,
      payload: year,
    })

    setTimeout(() => dispatch({
      type: GET_PHOTOS_SUCCESS,
      payload: year
    }), 1000)
  }
}
