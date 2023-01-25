import React, { useState } from 'react'
import downCaret from '../../public/assets/down-arrow.png'
import { SortOptions } from '../types/sortOptions'

interface Props {
  sortBy: string
  setSortBy: (sortOption: SortOptions) => void
}

export const SortDropdown: React.FC<Props> = ({ sortBy, setSortBy }) => {
  const [display, setDisplay] = useState(false)

  const displayStyle = display ? { display: 'block' } : { display: 'none' }

  function handleDropdownClick (e: React.MouseEvent): void {
    if (!display) {
      document.addEventListener('click', () => { setDisplay(false) })
      e.stopPropagation()
    } else {
      document.removeEventListener('click', () => { setDisplay(false) })
      e.stopPropagation()
    }
    setDisplay(!display)
  }

  return (
    <div className='relative'>
        <button
            className='font-semibold flex justify-center items-center'
            onClick={(e) => { handleDropdownClick(e) }}
        >
            {sortBy}
            <img
                src={downCaret}
                alt="down arrow"
                className='w-3 ml-1'
            />
        </button>
        <ul
            className='z-10 absolute overflow-visible mt-2 top-[100%] left-0 bg-gray-100 rounded-[3px] divide-y divide-gray-100 shadow-2xl'
            style={displayStyle}
        >
            <li
                className="border-b block py-2 px-1 hover:bg-gray-100 cursor-pointer"
                onClick={() => { setSortBy('Price') }}
                >
                Price
            </li>
            <li
                className="border-b block py-2 px-1 hover:bg-gray-100 cursor-pointer"
                onClick={() => { setSortBy('Alphabetically') }}
            >
                Alphabetically
            </li>
        </ul>
    </div>
  )
}
