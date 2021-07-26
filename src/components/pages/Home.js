import React from 'react'
import { connect } from 'react-redux'
import { renderStore } from '../../actions'
import Product from './pageComponents/Product'

class Home extends React.Component {

    componentDidMount(){
        this.props.renderStore()
    }

    

    renderProducts = () => {
        return this.props.inventory.map(item => {
            return <Product
            product={item}
            key={item.id}
            title={item.productTitle}
            price={item.price}
            description={item.productDescription}
            image={item.productImage}
            inventory={item.inventory}
            />
        })
    }

    render(){
        return(
            <div id="page-container" className="container">
                <h3 class="center">Our Inventory</h3>
                <div className="box">
                    {this.renderProducts()}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    
    return {
        inventory: state.inventory
    }
}

export default connect(mapStateToProps, { renderStore })(Home)