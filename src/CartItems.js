import React, { Component } from 'react';
import ListItem from "./ListItem"

class CartItems extends Component {
    
    render(){
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
                    {this.props.cartItemsList.map((item,idx) => {
                    return <ListItem
                        key={idx}
                        product={item.product.name}
                        price={item.product.priceInCents}
                        quantity={item.quantity}
                    />}
                    )}
                </div>
            </div>
        
    )}
}
  
  export default CartItems;