import React from 'react'
import ProductItem from './pageComponents/ProductItem'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import Modal from './pageComponents/Modal'
import { Link } from 'react-router-dom'

class CheckOut extends React.Component {

    renderCart = () => {
        return this.props.cart.map(item => {
            return <ProductItem
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

    renderNameInput = ({ input, className, label, name, disabled }) => {
        return (
            <div className="input-field col s4">
                <label for={name}>{label}</label>
                <br/>
                <input className={className}  {...input} disabled={disabled}/>
            </div>
        )
    }

    renderCardNameInput = ({ input, className, label, name, disabled }) => {
        return (
            <div className="input-field col s8">
                <label for={name}>{label}</label>
                <br/>
                <input className={className}  {...input} disabled={disabled}/>
            </div>
        )
    }

    renderCardInput = ({ input, className, label, name, disabled }) => {
        return (
            <div className="input-field col s8">
                <label for={name}>{label}</label>
                <br/>
                <input className={className}  {...input} disabled={disabled}/>
            </div>
        )
    }

    renderAddressInput = ({ input, className, label, name }) => {
        return (
            <div className="input-field col s8">
                <label for={name}>{label}</label>
                <br/>
                <input className={className}  {...input}/>
            </div>
        )
    }

        render(){
            return (
                <div id="page-container-form" class="row">
                    <div id="form-container" className="col s6">
                    <form>
                        <div className="row">   
                            <Field 
                            name="first name" 
                            className="validate" 
                            label="First Name" 
                            component={this.renderNameInput} 
                            />
                            <Field 
                            name="last name" 
                            className="validate" 
                            label="Last Name" 
                            component={this.renderNameInput} 
                            />
                        </div>
                        <div className="row">
                            <Field 
                            name="country" 
                            className="validate" 
                            label="Country" 
                            component={this.renderAddressInput} 
                            />
                        </div>
                        <div className="row">   
                            <Field 
                            name="city" 
                            className="validate" 
                            label="City" 
                            component={this.renderNameInput} 
                            />
                            <Field 
                            name="state" 
                            className="validate" 
                            label="State" 
                            component={this.renderNameInput} 
                            />
                        </div>
                        <div className="row">
                            <Field 
                            name="address" 
                            className="validate" 
                            label="Address" 
                            component={this.renderAddressInput} 
                            />
                        </div>
                        <div className="row">
                            <Field 
                            name="zip" 
                            className="validate" 
                            label="Zip" 
                            component={this.renderNameInput} 
                            />
                        </div>
                        <h5>Payment information</h5>
                        <div className="row">
                            <Field 
                            name="name" 
                            className="validate" 
                            label="Name as appears on card" 
                            component={this.renderCardNameInput}
                            disabled={true}
                            />
                        </div>
                        <div className="row">
                            <Field 
                            name="card number" 
                            className="validate" 
                            label="Card Number" 
                            component={this.renderCardInput}
                            disabled={true} 
                            />
                        </div>
                        <div className="row">   
                            <Field 
                            name="expiration date" 
                            className="validate" 
                            label="Expiration Date" 
                            component={this.renderNameInput}
                            disabled={true} 
                            />
                            <Field 
                            name="security code" 
                            className="validate" 
                            label="Security Code" 
                            component={this.renderNameInput}
                            disabled={true} 
                            />
                        </div>
                    </form>
                    </div>
                    
                    <ul class="collection with-header">
                        <li class="collection-header">
                            <h5>Your order</h5>
                        </li>
                        {this.renderCart()}
                        <hr/>
                        <li class="collection-order-item">
                            <div>
                             <strong>Total:</strong>
                            </div>
                            <div>
                            <strong>${this.props.cartTotal.toFixed(2)}</strong>
                            </div>
                        </li>
                    </ul>
                     <Link to="/pages/order-confirm" className="waves-effect waves-light btn modal-trigger">
                        Place Order
                     </Link>
                </div>    
            )
        }
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart,
        cartTotal: state.cartTotal
    }
}

const checkout = reduxForm({
    form: 'orderCreate'
})(CheckOut)

export default connect(mapStateToProps)(checkout)