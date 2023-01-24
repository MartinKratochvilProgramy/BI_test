import React from 'react'
import { Product } from '../types/product';
import { ItemCard } from './ItemCard';

interface Props {
    items: Product[];
    addItemToCart: (item: Product) => void;
}

export const PhotosDisplay: React.FC<Props> = ({ 
    items,
    addItemToCart
}) => {
  return (
    <div className='w-full grid grid-cols-3 gap-10'>
        {items.map((item: Product) => {
            return (
                <div key={item.name}>
                    <ItemCard 
                        item={item} 
                        addItemToCart={addItemToCart}
                    />
                </div>
            )
        })}
    </div>
  )
}
