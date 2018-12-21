import React, { Component } from 'react';
import NavBar from "./NavBar"
import CartFooter from "./CartFooter"
import CartItems from "./CartItems"
import AddItem from "./AddItem"

import './App.css';

class App extends Component {

  constructor() {
    super()
    this.state = {
      products: [
        { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 },
        { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 },
        { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 },
        { id: 43, name: 'Small Aluminum Keyboard', priceInCents: 2500 },
        { id: 44, name: 'Practical Copper Plate', priceInCents: 1000 },
        { id: 45, name: 'Awesome Bronze Pants', priceInCents: 399 },
        { id: 46, name: 'Intelligent Leather Clock', priceInCents: 2999 },
        { id: 47, name: 'Ergonomic Bronze Lamp', priceInCents: 40000 },
        { id: 48, name: 'Awesome Leather Shoes', priceInCents: 3990 },
      ],
      cartItemsList: [
        { id: 1, product: { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 }, quantity: 1 },
        { id: 2, product: { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 }, quantity: 2 },
        { id: 3, product: { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 }, quantity: 1 },
      ],
      newOrder: {
        product: {
          name: '',
          priceInCents: null
        },

      },
      quantity: null,
      total: null
    }

  }
 
  updateQuantity = (event) => {
    // console.log(event.target.value)
    this.setState({
      quantity: event.target.value,

    })
  }

  updateOrder = (event) => {
    console.log(event.target.value)
    this.setState({
      newItem: event.target.value,

    })
  }

  addMenuItem = () => {
    var newOrder = {
      id: this.state.cartItemsList.length + 1,
      product: {
        name: this.state.newItem,
        priceInCents: this.state.newItem.split('$')[1],
      },
      quantity: this.state.quantity,
    }

    this.setState(
      {
        cartItemsList: [...this.state.cartItemsList, newOrder],
        total: this.state.total + (newOrder.priceInCents * newOrder.quantity)
      }
    )

  }

  render() {


    return (
      <div>
        <NavBar />
        <CartItems
          cartItemsList={this.state.cartItemsList} />
        <AddItem
          products={this.state.products}
          updateQuantity={this.updateQuantity}
          updateOrder={this.updateOrder}
          addMenuItem={this.addMenuItem}
        />
        <CartFooter
          copyright="&copy; 2016"
        />
      </div>

    );
  }
}

export default App;
