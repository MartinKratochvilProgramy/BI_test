import React from 'react'
import { Item } from '../types/item'
import { getImageUrl } from '../utils/getImageUrl'

interface Props {
  item: Item
  addItemToCart: (item: Item) => void
}

export const ItemCard: React.FC<Props> = ({ item, addItemToCart }) => {
  return (
    <div className='w-full flex flex-col justify-start'>
        <div
            className='relative w-full h-80 group'
            >
            <img
                src={getImageUrl(item.image.src)}
                alt={item.image.alt}
                className='w-full h-full object-cover'
            />
            {item.featured &&
                <div className='bg-white absolute left-0 top-0 px-2 font-semibold'>
                    Best Seller
                </div>
            }
            <button
                className='hidden group-hover:flex absolute left-0 right-0 bottom-0 h-8 bg-black text-white justify-center items-center font-semibold'
                onClick={() => { addItemToCart(item) }}
            >
                ADD TO CART
            </button>
        </div>
        <div className='font-bold text-gray-500 text-lg mt-2'>
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
