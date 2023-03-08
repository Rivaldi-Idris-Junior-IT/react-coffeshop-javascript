import axios from 'axios'
// import store from '../store'
import { 
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    CLEAR_ERRORS,
    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAIL,
    LOAD_USER_REQUEST,
    LOAD_USER_SUCCESS,
    LOAD_USER_FAIL
} from '../constants/userConstant'

// login
export const login = (email ,password) => async (dispatch) => {
    try {
        dispatch({  type: LOGIN_REQUEST })
        
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.post('http://localhost:5000/login', {email, password}, config)

        dispatch({
            type: LOGIN_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: LOGIN_FAIL,
            payload: error.response
        })
    }   
}

// Register User
export const register = (userData) => async (dispatch) => {
    try {
        dispatch({  type: REGISTER_USER_REQUEST })
        
        const config = {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }

        const { data } = await axios.post('http://localhost:5000/register', userData, config)

        dispatch({
            type: REGISTER_USER_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: REGISTER_USER_FAIL,
            payload: error.response
        })
    }   
}

// Load User
export const loadUser = () => async (dispatch) => {
    try {
        dispatch({  type: LOAD_USER_REQUEST })        
                        
        const { data } = await axios.get('http://localhost:5000/me')

        dispatch({
            type: LOAD_USER_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: LOAD_USER_FAIL,
            payload: error.response
        })
    }   
}

// clear errors
export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS
    })
}