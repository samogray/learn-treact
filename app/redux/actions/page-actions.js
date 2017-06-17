import {GET_PHOTOS_REQUEST, GET_PHOTOS_SUCCESS, SET_DATA} from './../constans/page'

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

export function setData(data) {
  return (dispatch) => {
    dispatch({
      type: SET_DATA,
      payload: data
    })
  }
}
