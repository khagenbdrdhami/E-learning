import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { MdDeleteForever } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function Cart() {
  const navigate=useNavigate();
  const { state, dispatch } = useContext(CartContext);
  const totalPrice = state.cart.reduce(
    (acc, item) => acc + item.caloriesPerServing * 10 * item.qty,
    0
  );

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        {state.cart.length > 0 ? (
          <>
            <div className="mb-6 flex items-center justify-between  border-b pb-4">
              <div>
                <h1 className="text-3xl font-bold text-gray-800">Your Cart</h1>
                <p className="text-gray-600">
                  {state.cart.length} Courses in Cart
                </p>
              </div>
              <div>
                <button
                  onClick={() => {
                    dispatch({
                      type: "ClearCart",
                    });
                  }}
                  className="p-2 px-3 bg-red-600 text-white cursor-pointer hover:bg-red-700 rounded-2xl"
                >
                  ClearCart
                </button>
              </div>
            </div>

            {state.cart.map((cart) => (
              <div
                key={cart.id}
                className="flex items-center justify-between bg-gray-100 p-4 mb-4 rounded-lg shadow"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={cart.image}
                    alt={cart.name}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  <div>
                    <p className="font-semibold text-2xl">{cart.name}</p>
                    <p className="text-gray-600 text-lm">
                      Price: Rs.{cart.caloriesPerServing * 10}
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <button
                  onClick={() => {
                      navigate("/payment", {
                        state: { totalAmount: cart.caloriesPerServing * 10 },
                      });
                    }}
                   className="bg-teal-600 cursor-pointer text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition">
                    Proceed to Checkout
                  </button>
                  <button className="text-red-600 cursor-pointer text-2xl mx-4">
                    <MdDeleteForever
                      size={30}
                      onClick={() => {
                        dispatch({
                          type: "DeleteCart",
                          payload: cart.id,
                        });
                      }}
                    />
                  </button>
                </div>
              </div>
            ))}
            <div>
              {state.cart.length > 1 ? (
                <div className="flex justify-between items-center border-t pt-4 mt-6">
                  <div>
                    <h2 className="text-xl font-bold text-gray-800">
                      Subtotal
                    </h2>
                    <p className="text-gray-600">Rs.{totalPrice}</p>
                  </div>
                  <button
                    onClick={() => {
                      navigate("/payment", {
                        state: { totalAmount: totalPrice },
                      });
                    }}
                    className="bg-teal-600 cursor-pointer text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition"
                  >
                    Proceed to Checkout
                  </button>
                </div>
              ) : (
                <div></div>
              )}
            </div>
          </>
        ) : (
          <div className="text-center py-20 text-gray-600">
            <h2 className="text-2xl font-semibold mb-2">Your cart is empty</h2>
            <p>Add some courses to get started!</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
