import React, { useState, useEffect } from 'react';
import { Product } from '../types/product';
import { sampleData } from "../sampleData";
import upDownIcon from '/assets/up-down.png';
import { SortDropdown } from './SortDropdown';
import { CategoryTicks } from './CategoryTicks';
import { PhotosDisplay } from './PhotosDisplay';
import { SortOptions } from '../types/sortOptions';

export const Photos = () => {

    const [items, setItems] = useState<Product[]>([...sampleData.products]);
    const [sortBy, setSortBy] = useState<SortOptions>("Price");
    const [sortAscending, setSortAscending] = useState(true);

    useEffect(() => {
      const newItems = [...sampleData.products];
      
      if (sortBy === "Price") {
        newItems.sort(function (a, b) {
            if (sortAscending) {
                return b.price - a.price;
            } else {
                return a.price - b.price;
            }
        })
      }
      if (sortBy === "Alphabetically") {
        newItems.sort(function (a, b) {
            if (sortAscending) {
                return b.name.localeCompare(a.name);
            } else {
                return a.name.localeCompare(b.name);
            }
        })
      }

      setItems([...newItems]);
    
    }, [sortBy, sortAscending])
    

    return (
        <div className='mt-10'>
            <div className='flex justify-between'>
                <h1 className='text-gray-400 text-xl'>
                    <span className='font-bold text-black'>Photography /</span> Premium Photos
                </h1>
                <div className='flex justify-center items-center space-x-4'>
                    <button 
                        className='text-gray-400 flex justify-center items-center'
                        onClick={() => setSortAscending(!sortAscending)}
                    >
                        <img 
                            src={upDownIcon} 
                            alt="up-down arrow" 
                            className='w-3 mr-1'    
                        /> 
                        Sort By
                    </button>
                    <SortDropdown
                        setSortBy={setSortBy}
                    />
                </div>
            </div>
            <div className='flex mt-10'>
                <CategoryTicks />
                <PhotosDisplay 
                    items={items}
                />
            </div>
        </div>
    )
}
