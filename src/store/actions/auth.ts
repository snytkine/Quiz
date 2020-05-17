import { Action } from "../actions"

const signIn = (profile: any) => {
    return {
        type: Action.SIGNED_IN,
        payload: profile
    }
}

const signOut = () => {
    return {
        type: Action.SIGNED_OUT
    }
}

const initialized = () => {
    return {
        type: Action.GAPI_INITIALIZED
    }
}

export { signIn, signOut, initialized }