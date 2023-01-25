import React from 'react'

interface Props {
  handleSetCategories: (newCategory: string) => void
  handleSetRanges: (newRange: string) => void
}

export const CategoryTicks: React.FC<Props> = ({ handleSetCategories, handleSetRanges }) => {
  const categories = ['People', 'Premium', 'Pets', 'Food', 'Landmarks', 'Cities', 'Nature']
  const ranges = ['Lower than $20', '$20 - $100', '$100 - $200', 'More than $200']

  return (
    <div className='w-80 pr-8'>
        <h1 className='font-bold mb-6'>Category</h1>
        <div className='space-y-3 border-b-2 pb-6'>
            {categories.map((category: string) => {
              return (
                    <div className='text-lg font-medium' key={category}>
                        <input
                            id="categories-checkbox"
                            type="checkbox"
                            value={category}
                            onClick={(e: React.FormEvent<HTMLInputElement>) => { handleSetCategories(e.currentTarget.value) }}
                            className="w-4 h-4 text-black bg-black border-2 rounded accent-white mr-2 cursor-pointer"
                        />
                        {category}
                    </div>
              )
            })}
        </div>

        <h1 className='font-bold mb-6 mt-4'>Price Range</h1>
        <div className='space-y-3 border-b-2 pb-6'>
            {ranges.map((range: string) => {
              return (
                    <div className='text-lg font-medium' key={range}>
                        <input
                            type="radio"
                            name='ranges'
                            value={range}
                            onClick={(e: React.FormEvent<HTMLInputElement>) => { handleSetRanges(e.currentTarget.value) }}
                            className="w-4 h-4 text-black bg-black border-2 rounded accent-black mr-2 cursor-pointer"
                        />
                        {range}
                    </div>
              )
            })}
        </div>
    </div>
  )
}
