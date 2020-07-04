import { LOGIN_USER, LOGOUT_USER } from './types';

// Fetch user attempting to login and dispatch data returned.
export const loginUser = (postData) => dispatch => {
    fetch('https://ekodex-server.herokuapp.com/api/user/login', {
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

// Dispatch logout action if user attempts to do so.
export const logoutUser = () => dispatch => {
    dispatch({
        type: LOGOUT_USER
    });
};