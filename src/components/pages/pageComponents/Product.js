import React from 'react'
import { connect } from 'react-redux'
import { 
    addToCart, 
    changeInventory, 
    adjustCart, 
    cartTotal,
    cartAddQuantity 
} from '../../../actions'

class Product extends React.Component {

    handleClick = () => {
        if(this.props.inventory !== 0){
            this.props.changeInventory(this.props.product.id)
            this.props.addToCart(this.props.product)
            this.props.adjustCart(this.props.product.id)
            this.props.cartTotal(this.props.product.price)
            this.props.cartAddQuantity()
        }
    }

    render (){
        return(
                <div id={`${this.props.inventory === 0 ? 'disabled' : null }`} className={`card`}>
                    <div className="card-image">
                            <img src={this.props.image} alt={this.props.title}/>
                            <span onClick={this.handleClick} to="/" id={`${this.props.inventory === 0 ? 'disabled-pointer' : null }`} className="btn-floating halfway-fab waves-effect waves-light red"><i class="fas fa-plus"></i></span>
                        </div>
                        <div className="card-content">
                            <p>{this.props.title}</p>            
                            <p><b>Price: ${this.props.price}</b></p>
                        </div>
                </div>
            
        )
    }

}



export default connect(null, { 
    addToCart, 
    changeInventory, 
    adjustCart, 
    cartTotal,
    cartAddQuantity
})(Product)