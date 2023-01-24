import React, { useState } from 'react';
import { Product } from '../types/product';
import { sampleData } from "../sampleData";
import upDownIcon from '/assets/up-down.png';
import { SortDropdown } from './SortDropdown';
import { CategoryTicks } from './CategoryTicks';
import { PhotosDisplay } from './PhotosDisplay';

export const Photos = () => {

    const [items, setItems] = useState([...sampleData.products]);
    const [sortBy, setSortBy] = useState<"Price" | "Alphabetically">("Price");
    const [sortAscending, setSortAscending] = useState(true);

    return (
        <div className='mt-10'>
            <div className='flex justify-between'>
                <h1 className='text-gray-400 text-xl'>
                    <span className='font-bold text-black'>Photography /</span> Premium Photos
                </h1>
                <div className='flex justify-center items-center space-x-4'>
                    <button className='text-gray-400 flex justify-center items-center'>
                        <img 
                            src={upDownIcon} 
                            alt="up-down arrow" 
                            className='w-3 mr-1'    
                        /> 
                        Sort By
                    </button>
                    <SortDropdown />
                </div>
            </div>
            <div className='flex mt-10'>
                <CategoryTicks />
                <PhotosDisplay />
            </div>
        </div>
    )
}
