import {GET_PHOTOS_REQUEST, GET_PHOTOS_SUCCESS, SET_DATA, DELETE_IMAGE} from './../constans/page'

export function setData(data) {
  return (dispatch) => {
    dispatch({
      type: SET_DATA,
      payload: data
    })
  }
}

export function deleteImage(action) {
  return (dispatch) => {
    dispatch({
      type: DELETE_IMAGE,
      ...action
    })
  }
}



