import React, { Component } from 'react'
import { connect } from 'react-redux'
import {fetchProducts} from '../Actions/productActions';

class Products extends Component {
    componentDidMount(){
        this.props.fetchProducts();
    }
    render() {
        const productItems = this.props.products.map(product => (

            <div className="col-md-4" key={product.id}>
                <div className="thumbnail text-center">
                    <a href={`#${product.id}`} onClick={(e)=> this.props.handleAddToCart(e, product)}>
                        <img src={`/products/${product.sku}_2.jpg`} alt={product.title}/>
                        <p>
                            {product.title}
                        </p>
                    </a>
                    <div>
                        <b>${product.price.toFixed(2)+' '}</b>
                        <button className="btn btn-primary"
                        onClick={(e)=> this.props.handleAddToCart(e, product)}>Add To Cart</button>
                    </div>
                </div>
            </div>
        ))
        return (
            <div>
                {productItems}
            </div>
        )
    }
}

const mapStateToProps = state => ({products: state.products.filteredItems})

export default connect(mapStateToProps, {fetchProducts})(Products)