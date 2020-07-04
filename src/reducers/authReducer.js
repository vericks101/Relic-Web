import { LOGIN_USER, LOGOUT_USER } from '../actions/types';

// Redux initial state of application.
const intialState = {
    isLoggedIn: false,
    authToken: ''
};

// Redux different states to choose from when an action is fired to change current state.
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