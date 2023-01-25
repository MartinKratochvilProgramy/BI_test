import React, { useState, useEffect } from 'react'
import downCaret from '/assets/down-arrow.png';
import { getNumOfPages } from '../utils/getNumOfPages';
import { ITEMS_PER_PAGE } from '../globals';

interface Props {
    numOfItems: number;
    activePage: number;
    setActivePage: (page: number) => void;
}

export const Paginator: React.FC<Props> = ({ 
    numOfItems,
    activePage, 
    setActivePage
}) => {

    const numOfPages = getNumOfPages(numOfItems, ITEMS_PER_PAGE);

    const [pages, setPages] = useState([...Array(numOfPages).keys()]);

    useEffect(() => {
      setPages([...Array(numOfPages).keys()])
    }, [numOfItems])
    
    return (
        <div className="flex justify-center">
            <nav aria-label="Page navigation example">
                <ul className="flex justify-center items-center space-x-2">
                    {
                        activePage > 1 && 
                        <li 
                            onClick={() => setActivePage(activePage - 1)}
                            className="cursor-pointer"
                            >
                            <img src={downCaret} className="rotate-90 w-3" alt="left arrow" />
                        </li>
                    }
                    {
                        pages.map(pageIndex => {
                            return (
                                <li 
                                    className={pageIndex + 1 === activePage ? "text-black font-semibold cursor-pointer" : "text-gray-400 cursor-pointer"} 
                                    key={pageIndex}
                                    onClick={() => setActivePage(pageIndex+1)}
                                >
                                    {pageIndex + 1}
                                </li>
                            )
                        })
                    }
                    {
                        activePage < numOfPages && 
                        <li
                            onClick={() => setActivePage(activePage + 1)}
                            className="cursor-pointer"
                        >
                            <img src={downCaret} className="rotate-[-90deg] w-3" alt="left arrow" />
                        </li>
                    
                    }
                </ul>
            </nav>
        </div>
    )
}
