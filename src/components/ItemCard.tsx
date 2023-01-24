import React from 'react';
import { Product } from '../types/product';
import { getImageUrl } from '../utils/getImageUrl';
import styles from "ItemCard.css";

interface Props {
    item: Product;
}

export const ItemCard: React.FC<Props> = ({ item }) => {
  return (
    <div className='w-full h-96 flex flex-col justify-start'>
        <div 
            className='relative w-full h-64 group'
            >
            <img 
                src={getImageUrl(item.image.src)} 
                alt={item.image.alt} 
                className='w-full h-full object-cover'
            />
            <button className='hidden group-hover:flex absolute left-0 right-0 bottom-0 h-8 bg-black text-white justify-center items-center font-semibold'>
                ADD TO CART
            </button>
        </div>
        <div className='font-bold text-gray-600 text-lg mt-2'>
            {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
        </div>
        <div className='font-bold text-2xl mt-1'>
            {item.name}
        </div>
        <div className='text-gray-400 text-2xl mt-1'>
            ${item.price}
        </div>
    </div>
  )
}
