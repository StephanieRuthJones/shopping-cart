import React, { Component } from 'react';

class ListItem extends Component {
    
    render(){
        console.log(this.props)
    return (
        
            <div className="list-group-item">
                <div className="row">
                    <div className="col-md-8">{this.props.product}</div>
                    <div className="col-md-2">${this.props.price/100}</div>
                    <div className="col-md-2">{this.props.quantity}</div>
                </div>
            </div>
       
    )}
}
  
  export default ListItem

 


