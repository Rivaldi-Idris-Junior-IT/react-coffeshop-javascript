import { LOGIN_FAIL, 
    LOGIN_REQUEST, 
    LOGIN_SUCCESS,     
    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAIL,
    CLEAR_ERRORS,
    LOAD_USER_REQUEST,
    LOAD_USER_SUCCESS,
    LOAD_USER_FAIL,
 } 
from "constants/userConstant"


export const authReducer = (state = { user : {} }, action) => {
    switch (action.type) {
        
        case LOGIN_REQUEST:        
        case LOAD_USER_REQUEST:
            return {
                loading: true,
                isAuthenticated: false
            }
        case LOGIN_SUCCESS:        
        case LOAD_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
                user: action.payload
            }
        case LOGIN_FAIL:         
        case LOAD_USER_FAIL:
            return {
                ...state,
                loading: false,
                isAuthenticated: false,
                user: null,
                error: action.payload
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }
        default:
            return state
    }
}

export const registerReducer = (state = { user : {} }, action) => {
    switch (action.type) {
                
        case REGISTER_USER_REQUEST:        
            return {
                loading: true,
                isRegistered: false
            }
        
        case REGISTER_USER_SUCCESS:        
            return {
                ...state,
                loading: false,
                isRegistered: true,
                user: action.payload
            }
        
        case REGISTER_USER_FAIL:        
            return {
                ...state,
                loading: false,
                isRegistered: false,
                user: null,
                error: action.payload
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }
        default:
            return state
    }
}