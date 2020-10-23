import { combineReducers } from 'redux'
import types from './types'

const userName = (state = null, action) => {
    switch (action.type) {
        case types.LOGIN:
            return action.payload.userName
        case types.LOGOUT:
            return null
        default:
            return state
    }
}

const email = (state = null, action) => {
    switch (action.type) {
        case types.LOGIN:
            return action.payload.email
        case types.LOGOUT:
            return null
        default:
            return state
    }
}

export default combineReducers({ userName, email })
