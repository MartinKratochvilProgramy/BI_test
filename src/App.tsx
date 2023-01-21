import React, { useState } from "react"
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar"
import { sampleData } from "./sampleData"
import { Product } from "./types/product";


function App() {

  const [cart, setCart] = useState<Product>(sampleData.products[4]);
  const [heroItem, setHeroItem] = useState(sampleData.products[4]);

  return (
    <div className="flex w-full justify-center">
      <div className="px-10 w-full max-w-[1200px]">
        <Navbar />
        <Hero heroItem={heroItem}/>
      </div>
    </div>
  )
}

export default App
