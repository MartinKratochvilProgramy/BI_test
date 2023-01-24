import React from 'react';

interface Props {
    handleSetCategories: (newCategory: string) => void;
    handleSetRanges: (newRange: string) => void;
}

export const CategoryTicks: React.FC<Props> = ({ handleSetCategories, handleSetRanges }) => {

  return (
    <div className='w-80 pr-8 hidden md:block'>
        <h1 className='font-bold mb-6'>Category</h1>
        <div className='space-y-3 border-b-2 pb-6'>
            <div className='text-lg font-medium'>
                <input 
                    id="categories-checkbox" 
                    type="checkbox" 
                    value="People" 
                    onClick={(e: React.FormEvent<HTMLInputElement>) => handleSetCategories(e.currentTarget.value)}
                    className="w-4 h-4 text-black bg-black border-2 rounded accent-white mr-2 cursor-pointer" 
                />
                People
            </div>
            <div className='text-lg font-medium'>
                <input 
                    id="categories-checkbox" 
                    type="checkbox" 
                    value="Premium" 
                    onClick={(e: React.FormEvent<HTMLInputElement>) => handleSetCategories(e.currentTarget.value)}
                    className="w-4 h-4 text-black bg-black border-2 rounded accent-white mr-2 cursor-pointer" 
                />
                Premium
            </div>
            <div className='text-lg font-medium'>
                <input 
                    id="categories-checkbox" 
                    type="checkbox" 
                    value="Pets" 
                    onClick={(e: React.FormEvent<HTMLInputElement>) => handleSetCategories(e.currentTarget.value)}
                    className="w-4 h-4 text-black bg-black border-2 rounded accent-white mr-2 cursor-pointer" 
                />
                Pets
            </div>
            <div className='text-lg font-medium'>
                <input 
                    id="categories-checkbox" 
                    type="checkbox" 
                    value="Food" 
                    onClick={(e: React.FormEvent<HTMLInputElement>) => handleSetCategories(e.currentTarget.value)}
                    className="w-4 h-4 text-black bg-black border-2 rounded accent-white mr-2 cursor-pointer" 
                />
                Food
            </div>
            <div className='text-lg font-medium'>
                <input 
                    id="categories-checkbox" 
                    type="checkbox" 
                    value="Landmarks" 
                    onClick={(e: React.FormEvent<HTMLInputElement>) => handleSetCategories(e.currentTarget.value)}
                    className="w-4 h-4 text-black bg-black border-2 rounded accent-white mr-2 cursor-pointer" 
                />
                Landmarks
            </div>
            <div className='text-lg font-medium'>
                <input 
                    id="categories-checkbox" 
                    type="checkbox" 
                    value="Cities" 
                    onClick={(e: React.FormEvent<HTMLInputElement>) => handleSetCategories(e.currentTarget.value)}
                    className="w-4 h-4 text-black bg-black border-2 rounded accent-white mr-2 cursor-pointer" 
                />
                Cities
            </div>
            <div className='text-lg font-medium'>
                <input 
                    id="categories-checkbox" 
                    type="checkbox" 
                    value="Nature" 
                    onClick={(e: React.FormEvent<HTMLInputElement>) => handleSetCategories(e.currentTarget.value)}
                    className="w-4 h-4 text-black bg-black border-2 rounded accent-white mr-2 cursor-pointer" 
                />
                Nature
            </div>
        </div>

        <h1 className='font-bold mb-6 mt-4'>Price Range</h1>
        <div className='space-y-3 border-b-2 pb-6'>
            <div className='text-lg font-medium'>
                <input 
                    type="radio"
                    name='ranges' 
                    value="Lower than $20" 
                    onClick={(e: React.FormEvent<HTMLInputElement>) => handleSetRanges(e.currentTarget.value)}
                    className="w-4 h-4 text-black bg-black border-2 rounded accent-black mr-2 cursor-pointer" 
                />
                Lower than $20
            </div>
            <div className='text-lg font-medium'>
                <input 
                    type="radio"
                    name='ranges' 
                    value="$20 - $100" 
                    onClick={(e: React.FormEvent<HTMLInputElement>) => handleSetRanges(e.currentTarget.value)}
                    className="w-4 h-4 text-black bg-black border-2 rounded accent-black mr-2 cursor-pointer" 
                />
                $20 - $100
            </div>
            <div className='text-lg font-medium'>
                <input 
                    type="radio"
                    name='ranges' 
                    value="$100 - $200" 
                    onClick={(e: React.FormEvent<HTMLInputElement>) => handleSetRanges(e.currentTarget.value)}
                    className="w-4 h-4 text-black bg-black border-2 rounded accent-black mr-2 cursor-pointer" 
                />
                $100 - $200
            </div>
            <div className='text-lg font-medium'>
                <input 
                    type="radio"
                    name='ranges' 
                    value="More than $200" 
                    onClick={(e: React.FormEvent<HTMLInputElement>) => handleSetRanges(e.currentTarget.value)}
                    className="w-4 h-4 text-black bg-black border-2 rounded accent-black mr-2 cursor-pointer" 
                />
                More than $200
            </div>
        </div>
    </div>
  )
}
