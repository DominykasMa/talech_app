import { initialState } from '../initialState'

function Reducer(state = initialState, action) {
    switch (action.type) {
        case 'GET_PRODUCTS': {
            return { ...state, data: action.data }
        }
        case 'DELETE_PRODUCT': {
            return { ...state, data: action.data, id: action.id }
        }
        case 'EDIT_PRODUCT': {
            return { ...state, data: action.data, product: action.product }
        }
        case 'ADD_PRODUCT': {
            return { ...state, data: action.data }
        }
        case 'ENABLE_DISABLE_PRODUCT': {
            return { ...state, data: action.data }
        }
        case 'EDIT_QUANTITY': {
            return { ...state, data: action.data, productQuantity: action.productQuantity, id: action.id }
        }
        case 'EDIT_PRICE': {
            return { ...state, data: action.data, productPrice: action.productPrice, id: action.id }
        }
        default:
            return state
    }
}

export default Reducer