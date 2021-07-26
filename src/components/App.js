import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import NavBar from './NavBar'
import history from '../history'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import CreateAccount from './pages/CreateAccount'
import Modal from './pages/pageComponents/Modal'


const App = () => {
    return(
        <div>
            <Router history={history}>                
                <NavBar/>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/pages/cart" exact component={Cart} />
                    <Route path="/pages/checkout" exact component={Checkout} />
                    <Route path="/pages/create-account" exact component={CreateAccount} />
                    <Route path="/pages/order-confirm" exact component={Modal} />
                </Switch>
            </Router>
        </div>
    )
}

export default App