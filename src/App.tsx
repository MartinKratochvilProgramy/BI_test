import React, { useState } from "react"
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar"
import { Photos } from "./components/Photos";
import { sampleData } from "./sampleData"
import { Product } from "./types/product";

function App() {

  const [cart, setCart] = useState<Product[]>([]);
  const [cartExpanded, setCartExpanded] = useState(false);
  
  const featuredItem = sampleData.products.filter(item => {
    return item.featured;
  })[0];

  function clearCart() {
    setCart([]);
    setCartExpanded(false);
  }

  function addItemToCart(item: Product) {
    setCart([...cart, item]);
    setCartExpanded(true);
  }

  function removeItemFromCart(e: React.MouseEvent, item: Product) {
    e.stopPropagation();
    let newCart = [...cart];
    newCart = newCart.filter(function (cartItem: Product) {
      return cartItem !== item;
    });

    setCart(newCart);
  }

  return (
    <div className="flex w-full justify-center">
      <div className="px-10 w-full max-w-[1200px]">
        <Navbar 
          cart={cart} 
          cartExpanded={cartExpanded}
          setCartExpanded={setCartExpanded}
          clearCart={clearCart} 
          removeItemFromCart={removeItemFromCart} 
        />
        <Hero 
          featuredItem={featuredItem} 
          addItemToCart={addItemToCart} 
        />
        <Photos 
          addItemToCart={addItemToCart} 
        />
      </div>
    </div>
  )
}

export default App
