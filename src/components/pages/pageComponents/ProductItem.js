import React from 'react'


const ProductItem = ({ price, quantity, title }) => {
    return (
        <li class="collection-order-item">
            <div className="item-name">
                {title}
                <br/>
                Quantity: {quantity}
            </div>
            <div className="item-price">
               ${(price * quantity).toFixed(2)}                 
            </div>
        </li>
    )
}

export default ProductItem