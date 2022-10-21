import React from 'react'

export default function Product(props) {
  // console.log(props);
  // console.log(props.removeItem);

  return (
    <>
    
    <div className="row mt-3 text-warning">
      <div className="col-5">
        <h2>
          {props.product.name}{" "}
          <span class="badge bg-secondary"> ₹{props.product.price}</span>
        </h2>
      </div>
      <div className="col-3">
        <div
          class="btn-group"
          role="group"
          aria-label="Basic mixed styles example"
        >
          <button type="button" class="btn btn-danger" onClick = {() => {props.decrementQuantity(props.index)}}>
            -
          </button>
          <button type="button" class="btn btn-warning">
           {props.product.quantity}
          </button>
          <button type="button" class="btn btn-success" onClick = {() => {props.incrementQuantity(props.index)}}>+</button>
        </div>
      </div>
      <div class="col-2">
        {props.product.quantity*props.product.price}
      </div>
    {/* <button class = "col-2 btn btn-danger" onClick = {() => {props.removeItem}}>remove</button> */}
    <button  type = "button" class = "col-2 btn btn-danger btn-sm" onClick = {() => {props.removeItem(props.index)}}> <img src = '../../../delete-icon.png'/></button>

    </div>
    </>
  );
}