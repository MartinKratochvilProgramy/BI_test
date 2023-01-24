import React, { useState } from 'react';
import shoppingCartIcon from '/assets/shopping-cart.png';
import { Product } from "../types/product";
import { getImageUrl } from '../utils/getImageUrl';

interface Props {
  cart: Product[];
  cartExpanded: boolean;
  setCartExpanded: (value: boolean) => void;
  clearCart: () => void;
  removeItemFromCart: (e: React.MouseEvent, item: Product) => void;
}

export const Navbar: React.FC<Props> = ({ 
  cart, 
  cartExpanded,
  setCartExpanded,
  clearCart, 
  removeItemFromCart
}) => {
  


  function handleClearClick() {
    
    setCartExpanded(false);
    clearCart();
  }
  
  function handleExpandClick(e: React.MouseEvent) {
    
    if (!cartExpanded) {
      document.addEventListener('click', () => setCartExpanded(false));
      e.stopPropagation();
    } else {
      document.removeEventListener('click', () => setCartExpanded(false));
      e.stopPropagation();
    }

    setCartExpanded(!cartExpanded);
  }

  return (
    <div className='flex justify-between items-center w-full py-4 border-b-2'>
      <div className='font-mono font-bold text-2xl'>Bajamas_</div>
      <div className='relative p-2'>
        <img
          className='w-8 cursor-pointer'
          src={shoppingCartIcon}
          alt="shopping cart"
          onClick={(e) => handleExpandClick(e)}
        />
        {cart.length > 0 && <div className='absolute right-0 bottom-0 bg-black font-bold text-white text-xs px-1'>{cart.length}</div>}
      
        {cartExpanded && 
          <div className='z-10 absolute flex flex-col right-0 border-2 bg-white w-80 px-6 py-2'>
            <div className='space-y-2 pb-4 border-b-2'>

              {cart.map((item) => {
                return (
                  <div className='flex flex-col' key={item.name}>
                    <div className='flex w-full justify-end mb-2'>
                      <button
                        className='font-bold'
                        onClick={(e) => removeItemFromCart(e, item)}>
                        X
                      </button>
                    </div>
                    <div className='flex w-full justify-end mb-2'>
                      <div className='flex flex-col w-full mr-3'>
                        <div className='text-sm font-bold'>{item.name}</div>
                        <div className='text-sm text-gray-500'>$ {item.price}</div>
                      </div>
                      <img
                        className='flex w-8/12 h-16 object-cover'
                        src={getImageUrl(item.image.src)}
                      >
                      </img>

                    </div>
                  </div>
                )
              })}
            </div>

            <div className='flex w-full mt-4'>
              <button
                className='flex justify-center font-bold py-1 border-solid border-black border-2 w-full hover:bg-black hover:text-white'
                onClick={handleClearClick}
              >
                CLEAR
              </button>
            </div>
          </div>
        
        }
        
      </div>
    </div>
  )
}
