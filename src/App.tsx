import React, { useState } from "react"
import { FeaturedItem } from "./components/FeaturedItem";
import { Navbar } from "./components/Navbar"
import { Photos } from "./components/Photos";
import { sampleData } from "./sampleData"
import { Item } from "./types/item";

function App() {

  const [cart, setCart] = useState<Item[]>([]);
  const [cartExpanded, setCartExpanded] = useState(false);
  
  // TODO: this is hardcoded, but could be put into useState so
  // featured item could be set
  const featuredItem = sampleData.products.filter(item => {
    return item.featured;
  })[0];    


  function clearCart() {
    setCart([]);
    setCartExpanded(false);
  }

  function addItemToCart(item: Item) {
    setCart([...cart, item]);
    setCartExpanded(true);
  }

  function removeItemFromCart(e: React.MouseEvent, item: Item) {
    e.stopPropagation();
    let newCart = [...cart];
    newCart = newCart.filter(function (cartItem: Item) {
      return cartItem !== item;
    });

    setCart(newCart);
  }

  return (
    <div className="flex w-full justify-center">
      <div className="px-10 w-full md:max-w-[1200px]">
        <Navbar 
          cart={cart} 
          cartExpanded={cartExpanded}
          setCartExpanded={setCartExpanded}
          clearCart={clearCart} 
          removeItemFromCart={removeItemFromCart} 
        />
        <FeaturedItem 
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
