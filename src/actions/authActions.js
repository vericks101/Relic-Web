import { LOGIN_USER, LOGOUT_USER } from './types';

export const loginUser = (postData) => dispatch => {
    fetch('http://localhost:3001/api/user/login', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(postData)
    })
    .then(res => res.json())
    .then(authToken => dispatch({
        type: LOGIN_USER,
        payload: authToken.token
    }));
};

export const logoutUser = () => dispatch => {
    dispatch({
        type: LOGOUT_USER
    });
};