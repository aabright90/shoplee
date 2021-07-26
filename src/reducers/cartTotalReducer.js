import { CART_TOTAL } from '../actions/types'

export default (state = 0, action) => {
    switch (action.type) {
        case CART_TOTAL:
            let newState = state + action.payload
            return newState
        default:
            return state
    }
}