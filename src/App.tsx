import React, { useState } from "react"
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar"
import { sampleData } from "./sampleData"
import { Product } from "./types/product";

function App() {

  const [cart, setCart] = useState<Product[]>([]);
  const [heroItem, setHeroItem] = useState(sampleData.products[4]);

  function clearCart() {
    setCart([]);
  }

  function addToCart(item: Product) {
    setCart([...cart, item])
  }

  function removeItemFromCart(item: Product) {
    let newCart = [...cart];
    newCart = newCart.filter(function (cartItem: Product) {
      return cartItem !== item;
    });

    setCart(newCart);
  }

  return (
    <div className="flex w-full justify-center">
      <div className="px-10 w-full max-w-[1200px]">
        <Navbar cart={cart} clearCart={clearCart} removeItemFromCart={removeItemFromCart} />
        <Hero heroItem={heroItem} addToCart={addToCart} />
      </div>
    </div>
  )
}

export default App
