import React from 'react'
import { createPortal } from 'react-dom'
import history from '../../../history'

class Modal extends React.Component {
    modalRoot = document.getElementById('modalRoot')

    renderStyles = () => {
        const body = document.getElementsByTagName("BODY")[0]
        body.style.backgroundColor = "#0000009c"
    }

    revertStyle = () => {
        const body = document.getElementsByTagName("BODY")[0]
        body.style.backgroundColor = "#ffff"
    }

    goHome = () => {
        history.push('/')
        window.location.reload()
    }

    componentDidMount(){
        this.renderStyles()
    }

    componentWillUnmount(){
        this.revertStyle()
    }

    render(){
        return createPortal(
        <div id="page-container">
            <div id="modal1" className="modal open">
                <div className="modal-content">
                    <h4>Order Conformation</h4>
                    <br/>
                    <p>Your order has been placed, thanks for shopping with us 🙂 </p>
                </div>
                <div className="modal-footer">
                    <a href="#!" onClick={this.goHome} className="modal-close waves-effect waves-green btn-flat">
                        Home
                    </a>
                </div>
            </div>
        </div>
        ,
        this.modalRoot
        )
    }
    
}

export default Modal