import { updateObject } from "../utility"

export const authStart = (state, action) => {
    return updateObject(state, {
        loading: true,
        type: action.type
    })
}

export const authSuccess = (state, action) => {
    return updateObject(state, {
        loading: false,
        type: action.type,
        user: action.user,
        error: null
    })
}

export const authFail = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false,
        type: action.type,
    })
}

export const authLogout = (state, action) => {
    return updateObject(state, {
        type: action.type,
        user: null,
        loading: false
    })
}