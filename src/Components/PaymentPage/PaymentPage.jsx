import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { clearCart } from '../../Features/CartSlice'

const PaymentPage = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { data = [] } = useSelector((state) => state.cart)

  const product = data.find((item) => item.id === Number(id))

  const [selectedMethod, setSelectedMethod] = useState(null)
  const [orderPlaced, setOrderPlaced] = useState(false)

  const [cardDetails, setCardDetails] = useState({
    name: '',
    number: '',
    expiry: '',
    cvv: ''
  })

  const [upiId, setUpiId] = useState('')

  if (!product) {
    return (
      <div className="flex justify-center items-center min-h-screen px-4">
        <h2 className="text-lg sm:text-xl font-semibold text-red-500 text-center">
          Product Not Found
        </h2>
      </div>
    )
  }

  const totalAmount = product.price * (product.quantity || 1)

const handlePlaceOrder = () => {
  if (selectedMethod === "card") {
    if (!cardDetails.name || !cardDetails.number || !cardDetails.expiry || !cardDetails.cvv) {
      alert("Please fill all card details")
      return
    }
  }

  if (selectedMethod === "upi") {
    if (!upiId) {
      alert("Please enter UPI ID")
      return
    }
  }

  if (!selectedMethod) {
    alert("Please select a payment method")
    return
  }

  // Show success message first
  setOrderPlaced(true)

  // Delay clearing cart so UI can show success
  setTimeout(() => {
    dispatch(clearCart())
    navigate('/')
  }, 2000)
}


  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">

      {/* Success Message */}
      {orderPlaced && (
        <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-xl text-center font-semibold">
          🎉 Order Placed Successfully!
        </div>
      )}

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
              className={`mt-2 font-medium ${
                product.availabilityStatus === 'In Stock'
                  ? 'text-green-600'
                  : 'text-red-500'
              }`}
            >
              {product.availabilityStatus}
            </p>

            <p className="mt-2 text-gray-700">
              Quantity: {product.quantity || 1}
            </p>
          </div>
        </div>

        {/* Payment Section */}
        <div className="bg-gray-100 shadow-lg rounded-2xl p-5 sm:p-8">
          <h3 className="text-lg sm:text-xl font-semibold mb-6">
            Select Payment Method
          </h3>

          <div className="space-y-4">

            {/* Payment Buttons */}
            <button
              onClick={() => setSelectedMethod("card")}
              className={`w-full py-3 rounded-xl text-white transition ${
                selectedMethod === "card"
                  ? "bg-blue-700"
                  : "bg-blue-500 hover:bg-blue-600"
              }`}
            >
              Pay with Card
            </button>

            <button
              onClick={() => setSelectedMethod("upi")}
              className={`w-full py-3 rounded-xl text-white transition ${
                selectedMethod === "upi"
                  ? "bg-green-700"
                  : "bg-green-500 hover:bg-green-600"
              }`}
            >
              UPI Payment
            </button>

            <button
              onClick={() => setSelectedMethod("cod")}
              className={`w-full py-3 rounded-xl text-white transition ${
                selectedMethod === "cod"
                  ? "bg-yellow-600"
                  : "bg-yellow-500 hover:bg-yellow-600"
              }`}
            >
              Cash on Delivery
            </button>

            {/* Card Form */}
            {selectedMethod === "card" && (
              <div className="bg-white p-4 rounded-xl shadow space-y-3 mt-4">
                <input
                  type="text"
                  placeholder="Card Holder Name"
                  className="w-full border p-2 rounded"
                  value={cardDetails.name}
                  onChange={(e) =>
                    setCardDetails({ ...cardDetails, name: e.target.value })
                  }
                />
                <input
                  type="text"
                  placeholder="Card Number"
                  className="w-full border p-2 rounded"
                  value={cardDetails.number}
                  onChange={(e) =>
                    setCardDetails({ ...cardDetails, number: e.target.value })
                  }
                />
                <div className="flex gap-3">
                  <input
                    type="text"
                    placeholder="MM/YY"
                    className="w-1/2 border p-2 rounded"
                    value={cardDetails.expiry}
                    onChange={(e) =>
                      setCardDetails({ ...cardDetails, expiry: e.target.value })
                    }
                  />
                  <input
                    type="text"
                    placeholder="CVV"
                    className="w-1/2 border p-2 rounded"
                    value={cardDetails.cvv}
                    onChange={(e) =>
                      setCardDetails({ ...cardDetails, cvv: e.target.value })
                    }
                  />
                </div>
              </div>
            )}

            {/* UPI Form */}
            {selectedMethod === "upi" && (
              <div className="bg-white p-4 rounded-xl shadow mt-4">
                <input
                  type="text"
                  placeholder="Enter UPI ID (example@upi)"
                  className="w-full border p-2 rounded"
                  value={upiId}
                  onChange={(e) => setUpiId(e.target.value)}
                />
              </div>
            )}

            {/* COD Message */}
            {selectedMethod === "cod" && (
              <div className="bg-white p-4 rounded-xl shadow mt-4 text-gray-700">
                You will pay at the time of delivery.
              </div>
            )}

            {/* Total Amount */}
            <p className="mt-6 text-gray-800 font-semibold text-lg">
              Total Amount:{" "}
              <span className="text-amber-600">
                ${totalAmount.toFixed(2)}
              </span>
            </p>

            {/* Place Order Button */}
            {selectedMethod && !orderPlaced && (
              <button
                onClick={handlePlaceOrder}
                className="w-full mt-4 bg-amber-600 hover:bg-amber-700 text-white py-3 rounded-xl transition font-semibold"
              >
                Place Your Order
              </button>
            )}

          </div>
        </div>
      </div>
    </div>
  )
}

export default PaymentPage
