// import React, { useEffect, useState } from 'react';
import Items from './Items';
import { useSearch } from './States';

export default function Display() {
    const shopping_items = [
        {
          "product_id": 1,  
          "sale": true,
          "price": 19.99,
          "name": "Wireless Bluetooth Earbuds",
          "category": "Electronics",
          "image_url": "https://source.unsplash.com/random/?",
          "manufacturer": "TechZone"
        },
        {
            "product_id": 2,
          "sale": false,
          "price": 49.99,
          "name": "Men's Leather Wallet",
          "category": "Fashion",
          "image_url": "https://source.unsplash.com/random/?",
          "manufacturer": "LeatherCraft"
        },
        {
            "product_id": 3,
          "sale": true,
          "price": 29.95,
          "name": "Stainless Steel Water Bottle",
          "category": "Home & Kitchen",
          "image_url": "https://source.unsplash.com/random/?",
          "manufacturer": "EcoWare"
        },
        {
            "product_id": 4,
          "sale": false,
          "price": 79.99,
          "name": "Smart Watch",
          "category": "Electronics",
          "image_url": "https://source.unsplash.com/random/?",
          "manufacturer": "SmartTech"
        },
        {
            "product_id": 5,
          "sale": true,
          "price": 39.99,
          "name": "Women's Running Shoes",
          "category": "Sports & Outdoors",
          "image_url": "https://source.unsplash.com/random/?",
          "manufacturer": "RunnersChoice"
        },
        {
            "product_id": 6,
          "sale": false,
          "price": 149.99,
          "name": "4K Ultra HD TV",
          "category": "Electronics",
          "image_url": "https://source.unsplash.com/random/?",
          "manufacturer": "ElectroVision"
        },
        {
            "product_id": 7,
          "sale": true,
          "price": 9.99,
          "name": "Scented Candles Set",
          "category": "Home & Kitchen",
          "image_url": "https://source.unsplash.com/random/?",
          "manufacturer": "AromaBliss"
        },
        {
            "product_id": 8,
          "sale": false,
          "price": 39.95,
          "name": "French Press Coffee Maker",
          "category": "Home & Kitchen",
          "image_url": "https://source.unsplash.com/random/?",
          "manufacturer": "CafeMaster"
        },
        {
            "product_id": 9,
          "sale": true,
          "price": 24.99,
          "name": "Wireless Charging Pad",
          "category": "Electronics",
          "image_url": "https://source.unsplash.com/random/?",
          "manufacturer": "PowerUpTech"
        },
        {
            "product_id": 10,
          "sale": false,
          "price": 64.99,
          "name": "Leather Laptop Bag",
          "category": "Fashion",
          "image_url": "https://source.unsplash.com/random/?",
          "manufacturer": "BagMasters"
        },
        {
            "product_id": 11,
          "sale": true,
          "price": 14.99,
          "name": "Portable Bluetooth Speaker",
          "category": "Electronics",
          "image_url": "https://source.unsplash.com/random/?",
          "manufacturer": "SoundWave"
        },
        {
            "product_id": 12,
          "sale": false,
          "price": 29.99,
          "name": "Stainless Steel Mixing Bowls Set",
          "category": "Home & Kitchen",
          "image_url": "https://source.unsplash.com/random/?",
          "manufacturer": "Chef'sChoice"
        },
        {
            "product_id": 13,
          "sale": true,
          "price": 34.99,
          "name": "Men's Casual Shirt",
          "category": "Fashion",
          "image_url": "https://source.unsplash.com/random/?",
          "manufacturer": "CasualWear"
        },
        {
            "product_id": 14,
          "sale": false,
          "price": 149.95,
          "name": "Robotic Vacuum Cleaner",
          "category": "Home & Kitchen",
          "image_url": "https://source.unsplash.com/random/?",
          "manufacturer": "CleanTech"
        },
        {
            "product_id": 15,
          "sale": true,
          "price": 79.99,
          "name": "Wireless Gaming Mouse",
          "category": "Electronics",
          "image_url": "https://source.unsplash.com/random/?",
          "manufacturer": "GameTech"
        },
        {
            "product_id": 16,
          "sale": false,
          "price": 54.99,
          "name": "Women's Leather Jacket",
          "category": "Fashion",
          "image_url": "https://source.unsplash.com/random/?",
          "manufacturer": "LeatherTrends"
        },
        {
            "product_id": 17,
          "sale": true,
          "price": 44.95,
          "name": "Electric Kettle",
          "category": "Home & Kitchen",
          "image_url": "https://source.unsplash.com/random/?",
          "manufacturer": "KettlePro"
        },
        {
            "product_id": 18,
          "sale": false,
          "price": 99.99,
          "name": "Wireless Noise Cancelling Headphones",
          "category": "Electronics",
          "image_url": "https://source.unsplash.com/random/?",
          "manufacturer": "SoundBliss"
        },
        {
            "product_id": 19,
          "sale": true,
          "price": 29.99,
          "name": "Women's Yoga Pants",
          "category": "Sports & Outdoors",
          "image_url": "https://source.unsplash.com/random/?",
          "manufacturer": "YogaLife"
        },
        {
            "product_id": 20,
          "sale": false,
          "price": 69.99,
          "name": "Chef's Knife Set",
          "category": "Home & Kitchen",
          "image_url": "https://source.unsplash.com/random/?",
          "manufacturer": "ChefMaster"
        },
        {
            "product_id": 21,
          "sale": true,
          "price": 19.99,
          "name": "Men's Dress Socks Set",
          "category": "Fashion",
          "image_url": "https://source.unsplash.com/random/?",
          "manufacturer": "SockStyle"
        }
      ];
    
      const {searchTermState} = useSearch();
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
