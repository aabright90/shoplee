import { CHANGE_INVENTORY, ADJUST_INVENTORY, RENDER_STORE } from '../actions/types'
import { inventory } from '../data'

export default (state = inventory, action) => {
    switch (action.type) {
        case CHANGE_INVENTORY:
               const filteredState = state.filter(item => item.id !== action.payload)
               let newObject = state.find(item => item.id === action.payload)
               let index = state.findIndex(item => item.id === action.payload)
               newObject = {
                    id:  newObject.id,
                    productTitle:  newObject.productTitle,
                    productDescription:  newObject.productDescription,
                    productImage:  newObject.productImage,
                    price:  newObject.price,
                    inventory:  newObject.inventory - 1,
                    quantity: newObject.quantity
               }
               let newState = [...filteredState]
                newState.splice(index, 0, newObject)
                return newState
        case ADJUST_INVENTORY:
            const filterInventory = state.filter(item => item.id !== action.payload)
            let addInventory = state.find(item => item.id === action.payload)  
            addInventory = {
                id:  addInventory.id,
                productTitle:  addInventory.productTitle,
                productDescription:  addInventory.productDescription,
                productImage:  addInventory.productImage,
                price:  addInventory.price,
                inventory:  addInventory.inventory + 1,
                quantity: addInventory.quantity
           }     
           return [...filterInventory, addInventory]     
        case RENDER_STORE:
            default: 
            return state
    }
}