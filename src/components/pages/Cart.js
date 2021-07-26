import React from 'react'
import ProductList from './pageComponents/ProductList'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Cart extends React.Component {


    renderCart = () => {
        return this.props.cart.map(item => {
            return <ProductList
                product={item}
                key={item.id}
                title={item.productTitle}
                price={item.price}
                description={item.productDescription}
                image={item.productImage}
                quantity={item.quantity}
                id={item.id}
                />
        })
    }

    isEmpty = () => {
        if(this.props.cart.length === 0){
            return true
        } else {
            return false
        }
    }

    isSignedIn = () => {
        if (this.props.signedIn && !this.isEmpty()) {
            return (
                <Link to="/pages/checkout" className="waves-effect waves-light btn">
                    Continue to check out
                </Link>
            )
        } else if (this.isEmpty()){
            return ''
        } else {
            return <h4 style={{color: "red"}}>Please sign in to continue</h4>
        }
    }

    render(){
        return (
            <div id="page-container">
                <h3 class="center">Your Cart</h3>
               <ul class="collection">
                    { this.isEmpty() ? 'Your cart is empty' : this.renderCart() }
                </ul>
                <div className="center">
                    {this.isSignedIn()}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart,
        signedIn: state.auth.isSignedIn
    }
}

export default connect(mapStateToProps)(Cart)