import React, { useEffect, useState } from "react";
import { useCart, useTotalAmount } from "./States";

export default function CartItems(props) {
  const [shopping_items, setShopping_items] = useState([]);
  const [noItem, setNoItems] = useState(props.pdCount);
  const { addToCart, removeCart} = useCart();
  const {UpdateTotal} = useTotalAmount();
  const [itemTotal, setItemTotal] = useState(0);

  useEffect(() => {
    fetch(`http://localhost:5000/shopping_items?product_id=${props.pdID}`)
      .then((response) => response.json())
      .then((data) => setShopping_items(data));
  }, [props.pdID]);

  function increaseItem(price){

    setNoItems(noItem+1);
    setItemTotal((noItem+1)*price);
    UpdateTotal(price);
    addToCart(props.pdID);
    
  }
  function decreaseItem(price){
    if(noItem>0){
      setNoItems(noItem-1);
      setItemTotal(noItem*price);
    UpdateTotal(-1*price);
    removeCart(props.pdID);
  }
  }

  return (
    <div>
      {noItem>0 && shopping_items.map((items) => (
        <div className="card-body">
          <div className="row">
            <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
              <div
                className="bg-image hover-overlay hover-zoom ripple rounded"
                data-mdb-ripple-color="light"
              >
                <img
                  src={`${items.image_url}${items.name}`}
                  className="w-100"
                  alt={`${items.name}`}
                />
                <a href="\">
                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                  ></div>
                </a>
              </div>
            </div>

            <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
              <p>
                <strong>{items.name}</strong>
              </p>
              <p>Color: blue</p>
              <p>Size: M</p>

              <button
                type="button"
                className="btn btn-warning btn-sm me-1 mb-2"
                data-mdb-toggle="tooltip"
                title="Remove item"
              >
                <i className="fas fa-trash"></i>
              </button>
              <button
                type="button"
                className="btn btn-danger btn-sm mb-2"
                data-mdb-toggle="tooltip"
                title="Move to the wish list"
              >
                <i className="fas fa-heart"></i>
              </button>
            </div>

            <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
              <div className="d-flex mb-4" style={{ maxWidth: "300px" }}>
                <div className="form-outline">
                  <button className="btn btn-sm btn-warning" onClick={()=>{increaseItem(items.price)}}> + </button>
                  <input
                    id="form1"
                    min="0"
                    name="quantity"
                    type="number"
                    className="form-control"
                    value = {noItem}
                    readOnly
                  />
                  <button className="btn btn-sm btn-warning" onClick={()=>{decreaseItem(items.price);}}> - </button>
                  <label className="form-label" htmlFor="form1">
                    Quantity
                  </label>
                </div>
              </div>
              <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
               {noItem >0 ? <p>
                  <strong>{`Rs.${items.price}`}</strong>
                </p>: <></>}
              </div>
                {noItem>1? 
                <p>
                  <strong>{`Total: Rs.${(itemTotal).toFixed(2)}`}</strong>
                </p>:<></>}
            </div>
          </div>

          <hr className="my-4" />
        </div>
      ))}
    </div>
  );
}
