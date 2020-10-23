import { combineReducers } from 'redux'
import homeReducer from './home'
import userReducer from './user'

export default combineReducers({homeReducer, userReducer})