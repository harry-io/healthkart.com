import { GET_PRODUCT_FAIl, GET_PRODUCT_REQ, GET_PRODUCT_SUCC } from "./actionType"

export const productReqAction = () => {
    return {type:GET_PRODUCT_REQ}
}

export const productSuccAction = (payload) => {
    return {type: GET_PRODUCT_SUCC,payload}
}

export const productFailAction = () => {
    return {type: GET_PRODUCT_FAIl}
}

export const getProduct = () => {
    
}