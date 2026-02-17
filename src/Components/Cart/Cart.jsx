import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RemoveFromCart, clearCart, increaseQuantity,decreaseQuantity } from '../../Features/CartSlice'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { data = [] } = useSelector(state => state.cart)

  const GotoPayment = (itemId) => {
    navigate(`/payment/${itemId}`)
  }

  const handleRemove = (itemId) => {
    dispatch(RemoveFromCart(itemId))
  }

  const handleClearAll = () => {
    dispatch(clearCart())
  }
  const totalPrice = data.reduce(
  (acc, item) => acc + item.price * item.quantity,
  0
)

  if (data.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-600">
          🛒 Your Cart is Empty
        </h2>
        <p className="text-gray-400 mt-2 text-sm sm:text-base">
          Please add items to your cart
        </p>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">

      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
          Your Cart
        </h1>
        <button
          onClick={handleClearAll}
          className="text-red-600 font-semibold hover:underline text-sm sm:text-base"
        >
          Remove All Items
        </button>
      </div>

      {/* Cart Items Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl 
                       transition duration-300 p-4 flex flex-col"
          >
            <img
              src={Array.isArray(item.images) ? item.images[0] : item.images}
              alt={item.title}
              className="h-40 sm:h-48 object-contain mb-4"
            />

            <h3 className="font-semibold text-gray-700 text-sm sm:text-base line-clamp-2">
              {item.title}
            </h3>

            <p className="text-amber-600 font-bold mt-2 text-lg">
              ${item.price}
            </p>

            <p
              className={`text-sm mt-1 font-medium ${
                item.availabilityStatus === 'In Stock'
                  ? 'text-green-600'
                  : 'text-red-500'
              }`}
            >
              {item.availabilityStatus}
            </p>

            {/* Buttons */}
            <div className="mt-auto space-y-3 pt-4">
              <button
                onClick={() => GotoPayment(item.id)}
                className="w-full bg-green-500 hover:bg-green-600 
                           text-white py-2 rounded-lg 
                           transition duration-300 text-sm sm:text-base"
              >
                Buy Now
              </button>

              <button
                onClick={() => handleRemove(item.id)}
                className="w-full bg-red-500 hover:bg-red-600 
                           text-white py-2 rounded-lg 
                           transition duration-300 text-sm sm:text-base"
              >
                Remove
              </button>
                <div className="flex items-center border rounded-lg overflow-hidden">
    <button
      onClick={() => dispatch(decreaseQuantity(item.id))}
      className="px-3 py-1 bg-gray-200 hover:bg-gray-300"
    >
      −
    </button>

    <span className="px-4 font-semibold">
      {item.quantity}
    </span>

    <button
      onClick={() => dispatch(increaseQuantity(item.id))}
      className="px-3 py-1 bg-gray-200 hover:bg-gray-300"
    >
      +
    </button>
  </div>
            </div>
          </div>
        ))}
      </div>

      {/* Total Section */}
      <div className="mt-10 flex justify-center sm:justify-end">
        <div className="bg-gray-100 p-6 rounded-2xl shadow-md w-full sm:w-80">
          <h2 className="text-lg font-semibold mb-2 text-center sm:text-left">
            Total Price
          </h2>
          <p className="text-2xl font-bold text-amber-600 text-center sm:text-left">
            ${totalPrice.toFixed(2)}
          </p>
        </div>
      </div>

    </div>
  )
}

export default Cart
