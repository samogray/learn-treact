 
export const ping = store => next => action => {
  console.log(`Type action: ${action.type},  data action: ${action.payload}`)
  return next(action)
} 
