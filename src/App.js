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
      newItem: {
        product: {
          name: '',
          priceInCents: 0
        },

      },
      quantity: 0,
      total: 0
    }

  }

  updateQuantity = (event) => {

    this.setState({
      quantity: +event.target.value,

    })
  }

  updateOrder = (event) => {
    console.log('updateOrderCOn', event.target.value)
    const name = event.target.value.split('$')[0]
    const price = +event.target.value.split('$')[1]
    console.log('price', price)
    this.setState({
      newItem: {
        product: {
          name: name,
          priceInCents: Number(price)
        }
      }

    })
  }

  addMenuItem = () => {
    var newOrder = {
      id: this.state.cartItemsList.length + 1,
      product: {
        name: this.state.newItem.product.name,
        priceInCents: +this.state.newItem.product.priceInCents,
      },
    }

    this.setState(
      {
        cartItemsList: [...this.state.cartItemsList, newOrder],
        total: this.state.total + (newOrder.product.priceInCents * this.state.quantity)
      }
    )

  }

  render() {


    return (
      <div>
        <NavBar />
        <CartItems
          total={this.state.total}
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
