import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

const PaymentPage = () => {
  const { id } = useParams()
  const { data = [] } = useSelector((state) => state.cart)

  const product = data.find((item) => item.id === Number(id))

  if (!product) {
    return (
      <div className="flex justify-center items-center min-h-screen px-4">
        <h2 className="text-lg sm:text-xl font-semibold text-red-500 text-center">
          Product Not Found
        </h2>
      </div>
    )
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">

      {/* Main Container */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

        {/* Product Section */}
        <div className="bg-white shadow-lg rounded-2xl p-5 sm:p-8 flex flex-col items-center lg:items-start">

          <img
            src={Array.isArray(product.images) ? product.images[0] : product.images}
            alt={product.title}
            className="w-full max-w-xs sm:max-w-sm md:max-w-md h-60 sm:h-72 object-contain"
          />

          <div className="mt-6 text-center lg:text-left">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
              {product.title}
            </h2>

            <p className="text-amber-600 text-lg sm:text-2xl font-semibold mt-3">
              ${product.price}
            </p>

            <p
              className={`mt-2 font-medium text-sm sm:text-base ${
                product.availabilityStatus === 'In Stock'
                  ? 'text-green-600'
                  : 'text-red-500'
              }`}
            >
              {product.availabilityStatus}
            </p>
          </div>
        </div>

        {/* Payment Section */}
        <div className="bg-gray-100 shadow-lg rounded-2xl p-5 sm:p-8">
          <h3 className="text-lg sm:text-xl font-semibold mb-6 text-center lg:text-left">
            Select Payment Method
          </h3>

          <div className="space-y-4">

            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-xl transition duration-300 text-sm sm:text-base">
              Pay with Card
            </button>

            <button className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl transition duration-300 text-sm sm:text-base">
              UPI Payment
            </button>

            <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-3 rounded-xl transition duration-300 text-sm sm:text-base">
              Cash on Delivery
            </button>

          </div>
        </div>

      </div>

    </div>
  )
}

export default PaymentPage
