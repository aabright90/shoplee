import React from 'react'
import { 
    removeItem, 
    checkQuantity, 
    adjustInventory, 
    cartReduceQuantity 
} from '../../../actions'
import { connect } from 'react-redux'

const ProductList = ({ 
    quantity, 
    title, 
    price, 
    description, 
    image, 
    removeItem, 
    id, 
    checkQuantity, 
    adjustInventory, 
    cartReduceQuantity 
}) => {

    const handleClick = () => {
        removeItem(id)
        checkQuantity()
        adjustInventory(id)
        cartReduceQuantity()
    }

    return(
        <li className="collection-item avatar">
            <img src={image} alt={title} />
            <div id="infoBox" className="info-box">
                <p className="title">{title}</p>
                <p>{description}</p>
                <br/>
                <span>Quantity: {quantity}</span>
                <i id="remove-icon" onClick={handleClick} className="fas fa-minus-square"></i>
            </div>
                <div className="secondary-content">
                ${(price * quantity).toFixed(2)}
            </div>
        </li>
    )
}

export default connect(null, { 
    removeItem, 
    checkQuantity, 
    adjustInventory, 
    cartReduceQuantity 
})(ProductList)