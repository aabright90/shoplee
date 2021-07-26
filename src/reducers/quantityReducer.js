import { CART_ADD_QUANTITY, CART_REDUCE_QUANTITY } from '../actions/types'

export default (state = 0, action) => {
    switch (action.type) {
        case CART_ADD_QUANTITY:
            let newState = state + 1
            return newState
        case CART_REDUCE_QUANTITY:
            let reduceState = state - 1
            return reduceState
        default:
            return state
    }
}