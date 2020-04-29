import { REGISTER_USER, LOGIN_USER } from './types';

export const registerUser = () => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(posts => dispatch({
        type: REGISTER_USER,
        payload: posts
    }));
};

export const loginUser = (postData) => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(postData)
    })
    .then(res => res.json())
    .then(post => dispatch({
        type: LOGIN_USER,
        payload: post
    }));
};