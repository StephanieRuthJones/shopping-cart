import React, { Component } from 'react';
import ListItem from "./ListItem"

class CartItems extends Component {

    render() {
        let total = this.props.cartItemsList.reduce((acc, item) => {
            return acc + item.product.priceInCents * item.quantity
        }, 0)
        console.log('total', total)

        console.log(this.props.itemList)
        return (
            <div className="container">
                <h1>Cart Items</h1>
                <div className="list-group">
                    <div className="list-group-item">
                        <div className="row">
                            <div className="col-md-8">Product</div>
                            <div className="col-md-2">Price</div>
                            <div className="col-md-2">Quantity</div>
                        </div>
                    </div>
                    {this.props.cartItemsList.map((item, idx) => {
                        return <ListItem
                            key={idx}
                            product={item.product.name}
                            price={item.product.priceInCents}
                            quantity={item.quantity}
                        />
                    }
                    )}

                </div>
                <div className="list-group-item">
                    <div className="row">
                        <div className="col-md-8">Total Cost</div>
                        <div className="col-md-2">${(total / 100).toFixed(2)}</div>
                    </div>
                </div>


            </div>

        )
    }
}

export default CartItems;