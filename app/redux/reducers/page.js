
const initialState = {
  fetching: false
}

export default function page(state = initialState, action) {
  const {year, photos} = action
  switch (action.type) {
    case 'START_FETCH':
      return {...state, fetching: true}
    case 'SET_YEAR':
      return {fetching: false, [year]: photos}
    case 'APPEND_YEAR':
      return {...state, [year]: photos, fetching: false}
    case 'SET_YEARS':
      return {...state}
    
    default:
      return state;
  }

}
