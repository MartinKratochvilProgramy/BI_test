import React, { useState, useEffect } from 'react'
import { Product } from '../types/product'
import img2 from '/assets/img2.png';
import img3 from '/assets/img3.png';
import img4 from '/assets/img4.png';
import { getImageUrl } from '../utils/getImageUrl';

interface Props {
    heroItem: Product;
    addItemToCart: (item: Product) => void;
}

export const Hero: React.FC<Props> = ({
    heroItem,
    addItemToCart
}) => {

    function handleaddItemToCartClick() {
        addItemToCart(heroItem);
    }

  return (
      <div className='flex flex-col w-full pt-10 border-b-2'>
        <div className='flex justify-between w-full'>
            <div className='font-bold text-2xl'>{heroItem.name}</div> 
                <button
                    onClick={handleaddItemToCartClick}
                    className='rounded-none px-6 py-1 bg-black text-white text-sm'>
                    ADD TO CART
                </button>
        </div>

        <div className='flex mt-8 h-96 relative'>
            <img className='object-cover' src={getImageUrl(heroItem.image.src)} alt="hero image" />
            <div className='absolute left-0 bottom-0 bg-white px-10 py-3 font-bold'>
                Photo of the day
            </div>
        </div>

          <div className='flex w-full py-6'>
              <div className='flex flex-col w-full'>
                  <h1 className='font-bold text-xl mb-1'>
                      About the {heroItem.name}
                  </h1>
                  <div className='font-bold text-xl text-gray-500 mt-1 mb-2'>
                      Pets
                  </div>
                  <div className='text-gray-600'>
                      {heroItem.details?.description}
                      {heroItem.details?.description}
                      {heroItem.details?.description}
                      {heroItem.details?.description}
                  </div>
            </div>
              <div className='flex flex-col items-end w-10/12'>
                  <div className='font-bold text-xl my-1'>
                      People also buy
                  </div>
                  <div className='flex space-x-8 my-8'>
                      <img className='w-24 h-32 object-cover' src={img2} alt="" />
                      <img className='w-24 h-32 object-cover' src={img3} alt="" />
                      <img className='w-24 h-32 object-cover' src={img4} alt="" />
                  </div>
                  <div className='font-bold text-xl my-1'>
                      Details
                  </div>
                  <div className='text-gray-600 my-1'>
                      Size: {heroItem.details?.dimmentions.width} x {heroItem.details?.dimmentions.height}
                  </div>
                  <div className='text-gray-600 my-1'>
                      Size: {heroItem.details?.size && heroItem.details?.size / 1000} mb
                  </div>
            </div>
        </div>
        

      </div>
  )
}
