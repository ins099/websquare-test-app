import { LOGIN_USER, REGISTER_USER } from '../actionTypes/index';



export function registerUserAction(payload) {
    return {
        type: REGISTER_USER,
        payload: payload
    }
}