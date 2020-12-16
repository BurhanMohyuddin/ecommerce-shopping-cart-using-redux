import React, { Component } from 'react'
import { connect } from 'react-redux';
import {removeFromCart} from '../Actions/cartActions';

class Basket extends Component {
    render() {
        const {cartItems} = this.props;
        return (
            <div className="alert alert-info">
                {cartItems.length === 0? 'Cart Is Empty': <div>You have {cartItems.length} products in the cart</div>}
                {cartItems.length > 0 &&
                <div>
                    <ul>
                        {cartItems.map(item => 
                            <li key={item.id}>
                                <b>{item.title + ' '}</b>
                                 x {item.count} = ${(item.price * item.count).toFixed(2)}
                                <br/>
                                <button className="btn btn-danger btn-sm" style={{borderRadius:"5px"}} 
                                onClick={(e) => this.props.removeFromCart(this.props.cartItems, item)}>X</button>
                            </li>)}
                    </ul>
                    Total:{" "} ${cartItems.reduce((a,c) => a + c.price * c.count, 0).toFixed(2)}
                </div>
                }<hr/>
                <div className="text-center">
                    <button className="btn btn-primary" onClick={()=> alert("Thanks For Shopping...")}>Checkout</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps= state => ({
    cartItems: state.cart.items
})

export default connect(mapStateToProps, {removeFromCart})(Basket);