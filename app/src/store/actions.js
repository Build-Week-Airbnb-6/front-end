import { axiosWithAuth } from '../utils/axiosWithAuth';

export const LOGIN_START = 'LOGIN_START';
export const FETCH_LOGIN_SUCCESS = 'FETCH-LOGIN-SUCCESS';

export const FETCH_PROPERTIES_START = 'FETCH_PROPERTIES_START';
export const FETCH_PROPERTIES_SUCCESS = 'FETCH_PROPERTIES_SUCCESS';
export const SET_USER_ID = 'SET_USER_ID';

export const FETCH_SPECIFIC_PROPERTY = 'FETCH_SPECIFIC_PROPERTY';

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
            .catch((err) => err);
    }
}

export const xyz = (id) => {
    axiosWithAuth()
    .get(`/api/properties/` + id )
    .then(res => {
        console.log(res)
        dispatch({ type: FETCH_SPECIFIC_PROPERTY, payload:res.data.property})
    })
    .catch((err) => console.log(err))
}

export const DELETE_PROPERTY = 'DELETE_PROPERTY';
export const DELETE_PROPERTY_SUCCESS = 'DELETE_PROPERTY_SUCCESS';
export const DELETE_PROPERTY_FAILURE = 'DELETE_PROPERTY_FAILURE';

export const deleteProperty = (id) => (dispatch) => {
    dispatch({ type: DELETE_PROPERTY});
    axiosWithAuth()
        .delete(`/api/properties/${id}`)
        .then(res => {
            dispatch({ type: DELETE_PROPERTY_SUCCESS, payload:id})
        })
        .catch(err => {
            dispatch({ type: DELETE_PROPERTY_FAILURE, payload: err.message})
        })
}

export const setUserId = (props) => (dispatch) => {
    dispatch({
        type: SET_USER_ID, payload:props.id
    })
}