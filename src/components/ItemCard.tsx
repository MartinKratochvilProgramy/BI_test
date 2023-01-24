import React from 'react';
import { Product } from '../types/product';

interface Props {
    item: Product;
}

export const ItemCard: React.FC<Props> = ({ item }) => {
  return (
    <div className='bg-slate-200 w-full h-[300px]'>

    </div>
  )
}
