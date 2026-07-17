import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();


export const CartProvider = ({children}) => {

  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );


  useEffect(()=>{
    localStorage.setItem("cart", JSON.stringify(cart));
  },[cart]);



  const addToCart = (food)=>{

    const existing = cart.find(
      item => item._id === food._id
    );


    if(existing){

      setCart(
        cart.map(item =>
          item._id === food._id
          ?
          {
            ...item,
            quantity: item.quantity + 1
          }
          :
          item
        )
      );

    }
    else{

      setCart([
        ...cart,
        {
          ...food,
          quantity: 1
        }
      ]);

    }

  };



  const increaseQty = (id)=>{

    setCart(
      cart.map(item =>
        item._id === id
        ?
        {
          ...item,
          quantity: (item.quantity || 1) + 1
        }
        :
        item
      )
    );

  };


const decreaseQty = (id) => {

  setCart(
    cart
      .map(item =>
        item._id === id
          ? {
              ...item,
              quantity: item.quantity - 1
            }
          : item
      )
      .filter(item => item.quantity > 0)
  );

};


  const cartTotal = cart.reduce(
    (total,item)=>
      total + Number(item.price || 0) * (item.quantity || 1),
    0
  );



  return(
    <CartContext.Provider
      value={{
        cart,
        setCart,
        addToCart,
        increaseQty,
        decreaseQty,
        cartTotal
      }}
    >

      {children}

    </CartContext.Provider>
  );

};