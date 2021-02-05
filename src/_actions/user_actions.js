import {
    LOGIN_USER,
    LOGOUT_USER
} from './types';

export function loginUser(dataToSubmit) {
    
    return {
        type: LOGIN_USER,
        payload: dataToSubmit
    }
}

export function logoutUser() {
    
    return {
        type: LOGOUT_USER,
        payload: ''
    }
}