import { GET_PRODUCT_FAIl, GET_PRODUCT_REQ, GET_PRODUCT_SUCC } from "./actionType"
import axios from "axios"
export const productReqAction = () => {
    return {type:GET_PRODUCT_REQ}
}

export const productSuccAction = (payload) => {
    return {type: GET_PRODUCT_SUCC,payload}
}

export const productFailAction = () => {
    return {type: GET_PRODUCT_FAIl}
}

export const getProduct = (dispatch) => {
    dispatch(productReqAction());

        return axios.get('https://cute-gold-agouti-coat.cyclic.app/proteins')
        .then((res) => {
            console.log(res.data)
            dispatch(productSuccAction(res.data))
        })
        .catch((err) => {
            console.log(err)
            dispatch(productFailAction())
        })
}