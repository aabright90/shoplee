import {
    RENDER_STORE,
    ADD_TO_CART,
    CHANGE_INVENTORY,
    ADJUST_CART,
    REMOVE_ITEM,
    CHECK_QUANTITY,
    ADJUST_INVENTORY,
    IS_SIGNED_IN,
    SIGN_IN,
    SIGN_OUT,
    CART_TOTAL,
    CART_ADD_QUANTITY,
    CART_REDUCE_QUANTITY,
} from './types'

export const renderStore = () => {
    return {
        type: RENDER_STORE
    }
}

export const addToCart = (product) => {
    return {
        type: ADD_TO_CART,
        payload: product
    }
}

export const changeInventory = (id) => {
    return {
        type: CHANGE_INVENTORY,
        payload: id
    }
}

export const adjustCart = (id) => {
    return {
        type: ADJUST_CART,
        payload: id
    }
}

export const removeItem = (id) => {
    return {
        type: REMOVE_ITEM,
        payload: id
    }
}

export const checkQuantity = () => {
    return {
        type: CHECK_QUANTITY
    }
}

export const adjustInventory = (id) => {
    return {
        type: ADJUST_INVENTORY,
        payload: id
    }
}

export const isSignedIn = (isSignedIn) => {
    return {
        type: IS_SIGNED_IN,
        payload: isSignedIn
    }
}

export const signIn = (userId) => {
    return {
        type: SIGN_IN,
        payload: userId
    }
}

export const signOut = () => {
    return {
        type: SIGN_OUT
    }
}

export const cartTotal = (amount) => {
    return {
        type: CART_TOTAL,
        payload: amount
    }
}

export const cartAddQuantity = () => {
    return {
        type: CART_ADD_QUANTITY
    }
}

export const cartReduceQuantity = () => {
    return {
        type: CART_REDUCE_QUANTITY
    }
}