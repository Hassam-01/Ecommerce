// import React, { useEffect, useState } from 'react';
import { useEffect, useState } from 'react';
import Items from './Items';
import { useSearch } from './States';

export default function Display() {
    
    const {searchTermState} = useSearch();
    const [shopping_items, setShopping_items] = useState([]);

    useEffect(()=> {
        fetch('http://localhost:5000/shopping_items')
        .then(response => response.json())
        .then(data => setShopping_items(data));
    }, []);

    const filteredItems = shopping_items.filter(item => item.category.toLowerCase() === searchTermState.toLowerCase());
    return (

        <div className='container '> 
        <div className='row'> 

            {searchTermState ? 
              filteredItems.length === 0 ? <div><p>NO MATCH FOUND</p></div>
              :  
            filteredItems.map(item => (
                <div className='col-md-4'>
                <Items key={item.product_id} prodID= {item.product_id} name={item.name} price={item.price} manufacturer = {item.manufacturer} image_url= {`https://source.unsplash.com/random/?${item.name}`} sale = {item.sale} />
                 </div>
            )) : 

            shopping_items.map(item => (<div className='col-md-4'>
              <Items key={item.product_id} prodID= {item.product_id} name={item.name} price={item.price} manufacturer = {item.manufacturer} image_url= {`https://source.unsplash.com/random/?${item.name}`} sale = {item.sale} />
                </div>
          )) }

        </div>
        </div>
    );
}
