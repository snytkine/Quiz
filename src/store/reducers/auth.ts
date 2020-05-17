import { Action } from "../actions";

const INITIAL_STATE = {
    initialized: false
}

const authReducer = (state = INITIAL_STATE, action: any) => {
    switch (action.type) {
        case Action.SIGNED_IN:
            return { ...state, initialized: true, profile: action.payload }
        case Action.SIGNED_OUT:
            return { ...state, initialized: true, profile: null }
        case Action.GAPI_INITIALIZED:
            return { ...state, initialized: true }
        default:
            return state;
    }
}

export default authReducer