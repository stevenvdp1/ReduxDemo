import types from './types'

const homeActions = {
    increment: (number = 1) => (dispatch) => {
        dispatch({ type: types.INCREMENT, payload: number })
        dispatch({ type: types.ADD_CLICK })
    },

    decrement: () => (dispatch) => {
        dispatch({ type: types.DECREMENT })
        dispatch({ type: types.ADD_CLICK })
    },

    reset: () => (dispatch) => {
        dispatch({ type: types.RESET })
    }
}

export default homeActions
