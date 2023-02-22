import { GET_PRODUCT_FAIl, GET_PRODUCT_REQ, GET_PRODUCT_SUCC } from "./actionType"

const initialData = {
    isLoading: false,
    isError: false,
    product: []
}


export const reducer = (state=initialData,action) => {
    switch(action.type) {
        case GET_PRODUCT_REQ :
            return {...state,isLoading:true};

        case GET_PRODUCT_SUCC:
            return {...state,isLoading:false,product:action.payload}
            
        case GET_PRODUCT_FAIl:
            return {...state,isLoading:false,isError: true}
            
         default:
            return state;   
    }
}