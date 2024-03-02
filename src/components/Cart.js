import React from 'react';
import CartItems from './CartItems';
import { useProductCount } from './States';

export default function Cart() {
  // const {totalAmount} = useTotalAmount();
  // const [totalAmountDisplay, setTotalAmountDisplay] = useState(0);

  
  // useEffect(() => {
  //   setTotalAmountDisplay(prevAmount => prevAmount + totalAmount);
  // }, [totalAmount]);


// console.log("CART DISPLAY "+ totalAmount);

const IDS = useProductCount();

return (
<div>
<section className="h-100 gradient-custom" style={{backgroundColor: "#dbdbdb"}}>
        <div className="container py-5">
          <div className="row d-flex justify-content-center my-4">
            <div className="col-md-8">
              <div className="card mb-4">
                <div className="card-header py-3">
                  <h5 className="mb-0">Cart</h5>
                </div>

                {Object.entries(IDS).map(([id, count])=> (

                <CartItems pdID ={id} pdCount = {count}/>
                ))}
              </div>
              <div className="card mb-4">
                <div className="card-body">
                  <p><strong>Expected delivery</strong></p>
                  <p className="mb-0">Date</p>
                </div>
              </div>
              <div className="card mb-4 mb-lg-0">
                <div className="card-body">
                  <p><strong>We accept</strong></p>
                  <img className="me-2" width="45px"
                    src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
                    alt="Visa" />
                  <img className="me-2" width="45px"
                    src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
                    alt="Mastercard" />
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4">
                <div className="card-header py-3">
                  <h5 className="mb-0">Summary</h5>
                </div>
                <div className="card-body">
                  <ul className="list-group list-group-flush">
                    <li
                      className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                      Products
                      <span>$53.98</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                      Shipping
                      <span>--</span>
                    </li>
                    <li
                      className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                      <div>
                        <strong>Total amount</strong>
                        <strong>
                          <p className="mb-0">(including VAT)</p>
                        </strong>
                      </div>
                      <span><strong>$53.98</strong></span>
                    </li>
                  </ul>
      
                  <button type="button" className="btn btn-warning btn-m btn-block">
                    Go to checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
