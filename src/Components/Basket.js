import React, { Component } from 'react'

export default class Basket extends Component {
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
                                <b>{item.title}</b>
                                X{+ ' '} {item.count} = P={item.price * item.count}
                                <button className="btn btn-danger" 
                                onClick={(e) => this.props.handleRemoveFromCart(e, item)}>X</button>
                            </li>)}
                    </ul>
                    Total: {cartItems.reduce((a,c) => a + c.price * c.count, 0).toFixed(2)}
                </div>
                }<hr/>
                <div className="text-center">
                    <button className="btn btn-primary" onClick={()=> alert("Need to implement..")}>Checkout</button>
                </div>
            </div>
        )
    }
}
