import React from 'react'
import { useCart } from './States';
export default function Items(props) {

const { addToCart} = useCart();
return (
    <div>
      <div className="card my-5 position-relative"  style={{width: "18rem"}}>
   

  <img src={props.image_url} className="card-img-top" alt="item" style={{height: "18rem"}}/>
  <div className="card-body">
    <p className="card-text">{props.name}</p>
    
    {!props.sale && <h6 className="card-title">Rs. {props.price}</h6>}
    {props.sale && <small className='text-body-secondary'><del><h6 className="card-title">Rs. {props.price}</h6></del> </small>}
    {props.sale && <h5 className="card-title">Rs. {props.price-2}</h5>}
    <p className="card-text"><small className="text-body-secondary">{props.manufacturer}</small></p>
    <button className="btn btn-warning" onClick={()=>addToCart(props.prodID)}>Add to Cart</button>

  </div>
</div>
    </div>
  )
}
