import React, { useContext } from "react";
import { CartContext } from "../../Context/Context";
import { Link } from "react-router-dom";

const Cart = () => {

  const {
  cart,
  increaseQty,
  decreaseQty,
  cartTotal
} = useContext(CartContext);


  return (

    <div className="max-w-5xl mx-auto p-6">

      <h1 className="text-3xl font-bold mb-6">
        🛒 Your Cart
      </h1>


      {cart.length === 0 ? (

        <p className="text-gray-500 text-lg">
          Your cart is empty.
        </p>

      ) : (

        <>

        <div className="space-y-4">


        {
          cart.map((item)=>(
            
            <div
            key={item._id}
            className="
            flex 
            items-center 
            justify-between 
            bg-white 
            p-4 
            rounded-lg 
            shadow
            "
            >


              {/* Image and Name */}

              <div className="flex items-center gap-4">


                <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 object-cover rounded-lg"
                />


                <div>

                  <h2 className="font-bold text-lg">
                    {item.name}
                  </h2>


                  <p className="text-gray-600">
                    ₹{item.price}
                  </p>


                </div>


              </div>



              {/* Quantity */}

              <div className="flex items-center gap-3">


                <button
    onClick={() => decreaseQty(item._id)}
    className="px-3 bg-gray-200 rounded"
  >
    -
  </button>


           <span className="font-bold">
 {item.quantity}
</span>


              <button
    onClick={() => increaseQty(item._id)}
    className="px-3 bg-orange-500 rounded"
  >
    +
  </button>


              </div>


            </div>


          ))
        }


        </div>



        {/* Total */}

        <div className="mt-6 bg-green-100 p-4 rounded-lg">


          <h2 className="text-xl font-bold">
            Total: ₹{cartTotal}
          </h2>



        <Link to="/payment">
  <button className="bg-green-600 text-white px-6 py-3 rounded-lg">
    Proceed to Payment
  </button>
</Link>

        </div>


        </>

      )}


    </div>

  );
};


export default Cart;