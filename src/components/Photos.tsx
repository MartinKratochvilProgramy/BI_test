import React, { useState, useEffect } from 'react';
import { Product } from '../types/product';
import { sampleData } from "../sampleData";
import upDownIcon from '/assets/up-down.png';
import { SortDropdown } from './SortDropdown';
import { CategoryTicks } from './CategoryTicks';
import { PhotosDisplay } from './PhotosDisplay';
import { SortOptions } from '../types/sortOptions';

interface Props {
    addItemToCart: (item: Product) => void;
}

export const Photos: React.FC<Props> = ({ addItemToCart }) => {

    const [items, setItems] = useState<Product[]>([...sampleData.products]);
    const [sortBy, setSortBy] = useState<SortOptions>("Price");
    const [sortAscending, setSortAscending] = useState(true);
    const [categories, setCategories] = useState<string[]>([]);     // TODO: add types for categories

    useEffect(() => {
      const newItems = [...items];
      
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

    useEffect(() => {
        if (categories.length > 0) {
            const newItems: Product[] = [];
            for (const item of sampleData.products) {
                if (categories.includes(item.category)) {
                    newItems.push(item);
                }
            }
            setItems(newItems);
        } else {
            setItems([...sampleData.products])
        }
    
    }, [categories])
    

    function handleSetCategories(newCategory: string) {
        newCategory = newCategory.toLocaleLowerCase();

        if (!categories.includes(newCategory)) {
            // add to categories
            setCategories([...categories, newCategory])
        } else {
            // remove from categories
            const newCategories = [...categories];
            var index = newCategories.indexOf(newCategory);
            if (index !== -1) {
                newCategories.splice(index, 1);
            }
            setCategories(newCategories);   
        }
        
    }

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
                <CategoryTicks
                    handleSetCategories={handleSetCategories}
                />
                <PhotosDisplay 
                    items={items}
                    addItemToCart={addItemToCart}
                />
            </div>
        </div>
    )
}
