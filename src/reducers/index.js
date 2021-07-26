import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import cartTotalReducer from './cartTotalReducer'
import inventoryReducer from './inventoryReducer'
import cartReducer from './cartReducer'
import authReducer from './authReducer'
import quantityReducer from './quantityReducer'

export default combineReducers({
    quantity: quantityReducer,
    cartTotal: cartTotalReducer,
    inventory: inventoryReducer,
    cart: cartReducer,
    auth: authReducer,
    form:  formReducer
})