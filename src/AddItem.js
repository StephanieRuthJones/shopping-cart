import React from 'react';



const AddItem = (props) => {
    let newItem = props.products.map((item, idx) => {
        return (
            <option key={idx}>{item.name} ${item.priceInCents}</option>
        )
    })

    return (
        <>
            <div className="container">
                <div className="form-group">
                    Quantity:
                    <input
                        placeholder="Please Enter # of Items"
                        className="form-control"
                        type="number"
                        name="quantity"
                        min="1"
                        max="20000"
                        onChange={props.updateQuantity}
                    />
                </div>
                <select
                    defaultValue="Please Select an Item"
                    className="form-control"
                    onChange={props.updateOrder}
                >
                    <option disabled>Please Select an Item</option>
                    {newItem}
                </select>
                <button
                    type="submit"
                    className="btn-primary"
                    onClick={props.addMenuItem}>
                    Add Item
                </button>
            </div >
        </>
    )
}



// {



//     render() {

//         let newStuff= this.props.itemsToAdd.map((item, idx) =>{
//             return(
//                 <option key={idx}>{item.name} ${item.priceInCents/100}</option>
//             )
//         })

//         return (
//             <div>
//             <form>
//                 <div className="form-group">
//                     Quantity:
//                     <input 
//                         className="form-control" 
//                         type="number" 
//                         name="quantity" 
//                         min="1" 
//                         max="20000"
//                         onChange={this.props.updateQuantity} 
//                     />
//                 </div>


//             <select 
//                 className="form-control"
//                 onChange={this.props.updateOrder}  
//                 >
//                 {newStuff}
//             </select>

//             <button 
//                 type="submit"
//                 className="btn-primary">
//                 Add Item
//             </button>

//             </form>
//             </div>

//         )
//     }
// }
export default AddItem