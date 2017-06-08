import {GET_PHOTOS_REQUEST, GET_PHOTOS_SUCCESS} from './../constans/page'

export function setPhotos(year, photos) {
  return (dispatch) => {
    dispatch({type: 'SET_YEAR', year, photos})
  }
}

export function appendPhotos(year, photos) {
  return (dispatch) => {
    dispatch({type: 'APPEND_YEAR', year, photos})
  }
}

export function startFetch() {
  return (dispatch) => {
    dispatch({type: 'START_FETCH'})
  }
}


