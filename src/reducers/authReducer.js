import { LOGIN_USER, LOGOUT_USER } from '../actions/types';

const intialState = {
    isLoggedIn: false,
    authToken: ''
};

export default function(state = intialState, action) {
    switch(action.type) {
        case LOGIN_USER:
            return {
                ...state,
                authToken: action.payload,
                isLoggedIn: true
            };
        case LOGOUT_USER:
            return {
                ...state,
                authToken: '',
                isLoggedIn: false
            }
        default:
            return state;
    };
};