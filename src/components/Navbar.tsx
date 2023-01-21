import React from 'react';
import shoppingCartIcon from '../assets/shopping-cart.png';

export const Navbar = () => {
  return (
    <div className='flex justify-between items-center w-full py-4 border-b-2'>
        <div className='font-mono font-bold text-2xl'>Bajamas_</div>
        <img className='w-8' src={shoppingCartIcon} alt="shopping cart" />
    </div>
  )
}
