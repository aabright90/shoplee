import React from 'react'
import { connect } from 'react-redux'
import { signIn, signOut } from '../actions'

class GoogleAuth extends React.Component {

    componentDidMount(){
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '872289800635-m4ffdb9vulgmmgdre7rttgjti2sqlvrv.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance()
                this.onAuthChange(this.auth.isSignedIn.get())
                this.auth.isSignedIn.listen(this.onAuthChange)
            })
        })
    }

    onAuthChange = (isSignedIn) => {
        if (isSignedIn) {
            this.props.signIn(this.auth.currentUser.get().getId())
        } else {
            this.props.signOut()
        }
    }

    onSignInClick = () => {
        this.auth.signIn()
    }

    onSignOutClick = () => {
        this.auth.signOut()
    }

    renderAuthButton = () => {
        if(this.props.isSignedIn === null) {
            return null
        } else if (this.props.isSignedIn){
            return (
                <button id="sign-in" onClick={this.onSignOutClick} className="waves-effect waves-light btn">
                    <i id="google-logo" className="fab fa-google"></i>
                    Sign Out
                </button>
            )
        } else {
            return (
                <button id="sign-in" onClick={this.onSignInClick} className="waves-effect waves-light btn">
                    <i id="google-logo" className="fab fa-google"></i>   
                    Sign In 
                </button>
            )
        }
    }

    render(){
        return(
            <div>
                {this.renderAuthButton()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isSignedIn: state.auth.isSignedIn
    }
}

export default connect(mapStateToProps, { signOut, signIn })(GoogleAuth)