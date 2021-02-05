import {
    LOGIN_USER,
    LOGOUT_USER
} from '../_actions/types';

export default function (state = {}, action) {
    switch (action.type) {
        case LOGIN_USER:
            return { ...state, userinfo: action.payload }
        case LOGOUT_USER:
            return { ...state, userinfo: {} }
        default:
            return state;
    }
}