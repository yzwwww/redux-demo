import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from 'redux'
import thunk from 'redux-thunk'

import courseTablistReducer from './reducers/courseTabList'
import courseTabListState from './states/courseTabList'

const allReducers = combineReducers({
  courseTablist: courseTablistReducer,
})

const allStates = { courseTablist: courseTabListState }

const store = createStore(allReducers, allStates, applyMiddleware(thunk))

export default store
