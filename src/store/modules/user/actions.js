import types from './types'

class userActions {
    login = (email, password) => (dispatch) => {
        //API CALL TO LOGIN USER
        //GETS USERDATA
        const userData = '???'
        dispatch({ type: types.LOGIN, payload: userData })
    }

    logout = () => (dispatch) => {
        dispatch({ type: types.LOGOUT })
    }
}

export default userActions