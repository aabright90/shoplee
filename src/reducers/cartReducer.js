import { ADJUST_CART, REMOVE_ITEM, CHECK_QUANTITY, ADD_TO_CART, ADD_QUANTITY } from '../actions/types'

export default ( state = [], action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return [...state, action.payload] 
        case ADJUST_CART:
            const filteredCart = state.filter(item => item.id !== action.payload)
            let adjustedItem = state.find(item => item.id === action.payload)
            let index = state.findIndex(item => item.id === action.payload)
               adjustedItem = {
                    id:  adjustedItem.id,
                    productTitle:  adjustedItem.productTitle,
                    productDescription:  adjustedItem.productDescription,
                    productImage:  adjustedItem.productImage,
                    price:  adjustedItem.price,
                    inventory:  adjustedItem.inventory,
                    quantity: adjustedItem.quantity + 1
               }
               let newState = [...filteredCart]
               newState.splice(index, 0, adjustedItem)
               
               return newState   
        case REMOVE_ITEM:
            let filteredCartQuantity = state.filter(item => item.id !== action.payload)
            let adjustedQuantity = state.find(item => item.id === action.payload)
            adjustedQuantity = {
                id:  adjustedQuantity.id,
                productTitle:  adjustedQuantity.productTitle,
                productDescription:  adjustedQuantity.productDescription,
                productImage:  adjustedQuantity.productImage,
                price:  adjustedQuantity.price,
                inventory:  adjustedQuantity.inventory,
                quantity: adjustedQuantity.quantity - 1
            }
            return [...filteredCartQuantity, adjustedQuantity]
        case CHECK_QUANTITY:
            let checkQuantity = state.filter(item => item.quantity !== 0)
            return [...checkQuantity]
        default:
            return state
    }
}