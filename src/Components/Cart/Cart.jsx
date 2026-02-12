import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RemoveFromCart, clearCart } from '../../Features/CartSlice'

const Cart = () => {
  const dispatch = useDispatch()
  const { data = [] } = useSelector(state => state.cart)

  const handleRemove = (itemId) => {
    dispatch(RemoveFromCart(itemId))
  }

  const handleClearAll = () => {
    dispatch(clearCart())
  }

  const totalPrice = data.reduce((acc, item) => acc + item.price, 0)

  if (data.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <h2 className="text-2xl font-semibold text-gray-600">
          🛒 Your Cart is Empty
        </h2>
        <p className="text-gray-400 mt-2">
          Please add items to your cart
        </p>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-20">

      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">
          Your Cart
        </h1>
        <button
          onClick={handleClearAll}
          className="mt-3 sm:mt-0 text-red-600 font-semibold hover:underline"
        >
          Remove All Items
        </button>
      </div>

      {/* Cart Items Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-md hover:shadow-lg 
                       transition duration-300 p-4 flex flex-col"
          >
            <img
              src={Array.isArray(item.images) ? item.images[0] : item.images}
              alt={item.title}
              className="h-48 object-contain mb-4"
            />

            <h3 className="font-semibold text-gray-700 line-clamp-2">
              {item.title}
            </h3>

            <p className="text-amber-600 font-bold mt-2">
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

            <button
              onClick={() => handleRemove(item.id)}
              className="mt-auto bg-red-500 hover:bg-red-600 
                         text-white py-2 px-4 rounded-lg 
                         transition duration-300 mt-4"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      {/* Total Section */}
      <div className="mt-10 flex justify-end">
        <div className="bg-gray-100 p-6 rounded-xl shadow-md w-full sm:w-80">
          <h2 className="text-lg font-semibold mb-2">
            Total Price
          </h2>
          <p className="text-2xl font-bold text-amber-600">
            ${totalPrice.toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Cart
