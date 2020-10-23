import { combineReducers } from 'redux'
import types from './types'

const counter = (state = 0, action) => {
    switch (action.type) {
        case types.INCREMENT:
            return state + action.payload
        case types.DECREMENT:
            return state - 1
        case types.RESET:
            return 0
        default:
            return state
    }
}

const clicks = (state = 0, action) => {
    switch (action.type) {
        case types.ADD_CLICK:
            return state + 1
        case types.RESET:
            return 0
        default:
            return state
    }
}

export default combineReducers({counter, clicks})