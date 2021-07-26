import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import GoogleAuth from './GoogleAuth'

const NavBar = ({ quantity }) => {

    const renderItems = () => {
        if (quantity === 0) {
            return ''
        } else {
            return quantity
        }
    }

    return (
        <nav className="nav-wrapper">
            <div className="container">
            <Link to="/" className="brand-logo">Shoplee</Link>
            <ul className="right">
                <li><Link to="/">Shop</Link></li>
                <li><GoogleAuth/></li>
                <li><Link to="/pages/cart"><i class="fas fa-shopping-cart">{renderItems()}</i></Link></li>
            </ul>
            </div>
        </nav>
    )
}

const mapStateToProps = (state) => {
    return {
        quantity: state.quantity
    }
}

export default connect(mapStateToProps)(NavBar)