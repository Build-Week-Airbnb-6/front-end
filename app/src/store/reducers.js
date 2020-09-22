import {
    LOGIN_START,
    FETCH_LOGIN_SUCCESS,
    FETCH_PROPERTIES_START,
    FETCH_PROPERTIES_SUCCESS,
    SET_USER_ID,
    FETCH_SPECIFIC_PROPERTY
} from './actions';

const initialState = {
    properties: [],
    isLoading: false, 
    data: '',
    user_id:'',
};

export const reducer = (state = initialState, action) => {
    console.log('message', action)
    switch (action.type) {
        case LOGIN_START:
            return {
                ...state,
                isLoading: true,
            };
        case FETCH_LOGIN_SUCCESS:
            return {
                ...state,
                isLoading:false,
                data: action.payload,
            };
        case FETCH_PROPERTIES_START:
            return {
                ...state,
                isLoading:true,
                error: ''
            };
        case FETCH_PROPERTIES_SUCCESS:
            console.log(action.payload);
            return {
                ...state, 
                properties: action.payload,
                isLoading:false,
            }
        case SET_USER_ID:
            return{
                ...state,
                user_id:action.payload,
            }
        case FETCH_SPECIFIC_PROPERTY:
            return {
                ...state,
                howTo:action.payload,
            }
    
        default:
        return state
    }
}