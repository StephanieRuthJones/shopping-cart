import React, { Component } from 'react';
import CartItems from "./CartItems"
import ListItem from "./ListItem"


class AddItem extends Component {
    constructor(props) {
        super(props)
    }


    render() {
        console.log("this", this)
       
        return (
            <form className="needs-validation">
                <div className="form-group">
                    Quantity:
                    <input type="number" name="quantity" min="1" max="200" />
                </div>
                
            <button 
                type="submit"
                className="btn-primary"
                onClick={this.props.addTodo}>
                Add Item
            </button>
            <select 
                className="form-control">
                {this.props.itemsToAdd.map((add) => {
                    return <option>{add.name} ${add.priceInCents/100}</option>
                })}
                </select>
            />
            </form>
        )
    }
}
export default AddItem