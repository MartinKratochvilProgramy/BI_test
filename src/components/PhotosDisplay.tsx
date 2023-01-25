import React, { useState, useEffect } from 'react'
import { Item } from '../types/item';
import { ItemCard } from './ItemCard';
import { Paginator } from './Paginator';
import { ITEMS_PER_PAGE } from '../globals';

interface Props {
    items: Item[];
    addItemToCart: (item: Item) => void;
}

export const PhotosDisplay: React.FC<Props> = ({ 
    items,
    addItemToCart
}) => {

    const [activePage, setActivePage] = useState(1);
    const [itemsToDisplay, setItemsToDisplay] = useState(items.slice(0, 6));

    useEffect(() => {
        setItemsToDisplay(items.slice(activePage - 1, activePage - 1 + ITEMS_PER_PAGE));   
    }, [items, activePage])
    

    return (
        <div>
            <div className='w-full grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-10'>
                {itemsToDisplay.map((item: Item, index) => {
                        return (
                            <div key={index}>
                                <ItemCard 
                                    item={item} 
                                    addItemToCart={addItemToCart}
                                />
                            </div>
                        )
                    })}
            </div>  
            <div className='flex w-full justify-center'>
                <Paginator
                    numOfItems={items.length}
                    activePage={activePage}
                    setActivePage={setActivePage}
                />
            </div>
        </div>
  )
}
