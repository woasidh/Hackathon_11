import {
    LOGIN_USER,
} from './types';

export function loginUser(dataToSubmit) {
    
    return {
        type: LOGIN_USER,
        payload: dataToSubmit
    }
}