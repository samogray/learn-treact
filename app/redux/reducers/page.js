import {SET_YEAR} from './../constans/page'

const initialState = {
  year: 2017,
  photos: ['img1.jpeg', 'img1.jpeg', 'img2.jpeg']
}

export default function page(state = initialState, action) {
  switch  (action.type) {
    case SET_YEAR: return {...state, year: action.payload}
    default: return state
  }
}
