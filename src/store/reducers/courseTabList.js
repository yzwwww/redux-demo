import initState from '../states/courseTabList'

const reducer = (state = initState, action) => {
  switch (action.type) {
    case 'CHANGE_COURSE_FIELD':
      return {
        ...state,
        curField: action.field,
      }
    default:
      return state
  }
}

export default reducer
