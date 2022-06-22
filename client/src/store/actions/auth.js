import { getUser } from "../../requests/auth"
import * as actionTypes from "./actionTypes"

const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
}

const authSuccess = (user) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        user: user,
    }
}

const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    }
}

const authLogout = () => {
    return {
        type: actionTypes.AUTH_LOGOUT,
    }
}

export const login = (username, password) => {
    return async (dispatch) => {
        // Update state saying the authentication process started
        await dispatch(authStart())

        try {
            // Try to access the user with the provided credentials
            const res = await getUser({username, password})

            // If res object has error field then throw an error
            if (res.error) throw new Error(res.error)
            if (res.length === 0) throw new Error("User not found")

            // Update state with user object
            await dispatch(authSuccess(res))
        } catch(e) {
            // Check if it was a server error or incorrect access
            const error = e.response ? e.response.data.error : e

            // Update state with error
            dispatch(authFail(error))
        }
    }
}

export const logout = () => {
    return async (dispatch) => {
        dispatch(authLogout())
    }
}