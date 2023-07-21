import * as ProductAction from '../action/ProductAction'


export default (state = [],action) => {
    switch (action.type) {
        case ProductAction.CREATE_NEW_PRODUCT:

            return [
                ...state,
                Object.assign({},action.todo)
            ];
        case ProductAction.CREATE_NEW_PRODUCT:
            return state.filter((data,i) => i !== action.id)
        default:
            return state
    }
}