import axios from "axios";

import {
    ALL_PRODUCTS_REQUEST,
    ALL_PRODUCTS_SUCCESS,
    ALL_PRODUCTS_FAIL
} from '../constants/productContant'

export const getProducts = (category, allCategory) => async (dispatch) => {
    try {
        dispatch({ type: ALL_PRODUCTS_REQUEST })

        let link = process.env.REACT_APP_BASE_URL
        

        if (category) {
            link = `${process.env.REACT_APP_BASE_URL}?category=${category}`
        }

        if (allCategory) {
            link = process.env.REACT_APP_BASE_URL
        }

        const { data } = await axios.get(link)

        dispatch({
            type: ALL_PRODUCTS_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: ALL_PRODUCTS_FAIL,
            payload: error.response.data.message
        })
    }
}