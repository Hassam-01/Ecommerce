import React, { createContext, useContext, useState } from 'react';

  const CartContext = createContext();
  const SearchTerm = createContext();
    const productCount = createContext();
    const TotalAmount = createContext();

    let IDS = {};
  export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(0);
    const [searchTermState, setSearchTermState] = useState("");
    const [producID, setProductID] = useState(0);
    const [totalAmount, setTotalAmount] = useState(0);
    // const [IDS, setIDS] = useState({}); // Initialize IDS state as an empty object
    function updateCart(productID, option) {
        if (IDS[productID] && option === 1) {
            IDS[productID]++;
        } else if(IDS[productID] && option === 2){
            IDS[productID]--;
        }
        else if (!IDS[productID] && option===1){
          IDS[producID] = 1 ;
        }
    }
    const UpdateTotal = (Amount) =>{
      if (Amount<0){
        setTotalAmount(totalAmount+Amount);
        console.log("TOTAL FROM STATES (-): "+ totalAmount)
        
      }
      else {setTotalAmount(totalAmount+Amount);
      console.log(Amount+"Received")
      console.log("TOTAL FROM STATES: "+ totalAmount)
      }
    console.log("States END: "+totalAmount) ;
    }
  const addToCart = (ID)=>{
    setCart(cart+1);
    console.log("Product with ID: "+ ID+ " Added to cart")
    setProductID(ID);
    updateCart(ID, 1);
  }
  const removeCart = (ID)=>{
    if(cart!== 0)
    setCart(cart-1)
    updateCart(ID, 2);
  
    }
    console.log(IDS);

    return (
        <CartContext.Provider value={{ cart, addToCart, removeCart }}>
        <SearchTerm.Provider value = {{searchTermState, setSearchTermState}}>
        <productCount.Provider value = {{IDS}}>
        <TotalAmount.Provider value = {{totalAmount, setTotalAmount, UpdateTotal}}>
        
        {children}
        
        </TotalAmount.Provider>
        </productCount.Provider>
        </SearchTerm.Provider>
      </CartContext.Provider>
  )
}
export const useCart = () => {
    return useContext(CartContext);
  };

export const useSearch  = () => {
  return useContext(SearchTerm);
}
export const useProductCount = () => {
    return useContext(productCount).IDS;
}
export const useTotalAmount = () => {
  return useContext(TotalAmount);
}