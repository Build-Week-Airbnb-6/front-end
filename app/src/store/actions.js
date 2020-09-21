import { axiosWithAuth } from '../utils/axiosWithAuth';

export const LOGIN_START = 'LOGIN_START';
export const FETCH_LOGIN_SUCCESS = 'FETCH-LOGIN-SUCCESS';

export const FETCH_PROPERTIES_START = 'FETCH_PROPERTIES_START';
export const FETCH_PROPERTIES_SUCCESS = 'FETCH_PROPERTIES_SUCCESS':
export const SET_USER_ID = 'SET_USER_ID'

export const fetchProperties = (id) => {
    return (dispatch) => {
        dispatch({ type: LOGIN_START});
        axiosWithAuth()
            .get(`/api/properties`)
            .then((res) => {
                console.log(res);
                dispatch({ type: FETCH_LOGIN_SUCCESS, payload: res.data});
                localStorage.setItem('token', res.data.token);
            })
            .catch((err) => console.log(err, 'oops teeheehuehue teehee'));
    }
}

export const signUp = (client) => {
    return(dispatch) => {
        dispatch({type: LOGIN_START});
        axiosWithAuth()
            .post('/api/auth/register', client)
            .then((res) => {
                console.log(res);
                dispatch({ type: FETCH_LOGIN_SUCCESS, payload: res.data});
                localStorage.setItem('token', res.token);
            })
    }
}