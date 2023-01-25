import React, { useState, useEffect } from 'react'
import { Item } from '../types/item';
import { ItemCard } from './ItemCard';
import { Paginator } from './Paginator';

interface Props {
    items: Item[];
    addItemToCart: (item: Item) => void;
}

export const PhotosDisplay: React.FC<Props> = ({ 
    items,
    addItemToCart
}) => {

    const itemsPerPage = 6;

    const [activePage, setActivePage] = useState(1);
    const [itemsToDisplay, setItemsToDisplay] = useState(items.slice(0, itemsPerPage));

    useEffect(() => {
        setItemsToDisplay(items.slice((activePage - 1) * itemsPerPage, (activePage - 1) * itemsPerPage + itemsPerPage));   
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
                    itemsPerPage={itemsPerPage}
                    activePage={activePage}
                    setActivePage={setActivePage}
                />
            </div>
        </div>
  )
}
