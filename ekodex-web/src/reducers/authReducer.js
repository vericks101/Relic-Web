import { REGISTER_USER, LOGIN_USER } from '../actions/types';

const intialState = {
    items: [],
    item: {}
};

export default function(state = intialState, action) {
    switch(action.type) {
        case REGISTER_USER:
            return {
                ...state,
                items: action.payload
            };
        case LOGIN_USER:
            return {
                ...state,
                item: action.payload
            };
        default:
            return state;
    };
};