import * as ProductAction from './ProductAction';

export const createProduct =  (product) => {
     return{
         type:ProductAction.CREATE_NEW_PRODUCT,
         product:product
     }
}

export const byProduct = (id) => {
    return{
         type:ProductAction.BY_PRODUCT,
        id:id
    }
}