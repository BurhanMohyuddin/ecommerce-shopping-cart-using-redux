import React, { Component } from 'react';
import { connect } from 'react-redux';
import {filterProducts, sortProducts} from '../Actions/productActions';

class Filters extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-4">
                    {this.props.count} products found.
                </div>
                <div className="col-md-4">
                    <label>
                        Order by:
                        <select className="form-control" value={this.props.sort} 
                        onChange={(e) => this.props.sortProducts(this.props.filteredProducts, e.target.value)}>
                            <option value="">Select</option>
                            <option value="lowest">Lowest To Highest</option>
                            <option value="highest">Highest To Lowest</option>
                        </select> 
                    </label>
                </div>
                <div className="col-md-4">
                <label>
                        Filter size:
                        <select className="form-control" value={this.props.size} 
                        onChange={(e) => this.props.filterProducts(this.props.products, e.target.value)}>
                            <option value="">All</option>
                            <option value="x">XS</option>
                            <option value="s">S</option>
                            <option value="m">M</option>
                            <option value="l">L</option>
                            <option value="xl">XL</option>
                            <option value="xxl">XXL</option>
                        </select> 
                    </label>
                </div>
                
            </div>
        )
    }
}
const mapStateToProps = state => ({

    products: state.products.items,
    filteredProducts: state.products.filteredItems,
    size: state.products.size,
    sort: state.products.sort
})
export default connect(mapStateToProps, {filterProducts, sortProducts})(Filters)