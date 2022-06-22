import * as actionTypes from "../actions/actionTypes"
import * as auth from './auth'

const initialState = {
    user: null,
    loading: false,
    error: null,
    type: actionTypes.AUTH_FAIL
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_START:
            return auth.authStart(state, action)
        case actionTypes.AUTH_SUCCESS:
            return auth.authSuccess(state, action)
        case actionTypes.AUTH_FAIL:
            return auth.authFail(state, action)
        case actionTypes.AUTH_LOGOUT:
            return auth.authLogout(state, action)
        default:
            return state
    }
}

export default reducer