import { LOGIN_USER } from '../actions/types';

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
        default:
            return state;
    };
};