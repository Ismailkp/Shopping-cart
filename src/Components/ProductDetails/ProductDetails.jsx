import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../../Features/CartSlice'

const ProductDetails = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { id } = useParams()
  const { data = [] } = useSelector(state => state.Api_data)

  const product = data.find(item => item.id.toString() === id)

  if (!product)
    return <p className="text-center mt-20 text-lg">Product not found</p>

  const HandleCart = (item) => {
    dispatch(addToCart(item))
    navigate('/cart')
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-20">
      <div className="bg-white rounded-xl shadow-lg p-6 md:p-10">

        <div className="flex flex-col md:flex-row gap-10">

          {/* Product Image */}
          <div className="flex-1 flex justify-center items-center">
            <img
              src={Array.isArray(product.images) ? product.images[0] : product.images}
              alt={product.title}
              className="w-full max-w-md h-80 object-contain"
            />
          </div>

          {/* Product Info */}
          <div className="flex-1 space-y-4">
            <h1 className="text-2xl md:text-3xl font-bold">
              {product.title}
            </h1>

            <p className="text-gray-600">
              Category: <span className="font-medium">{product.category}</span>
            </p>

            <p className="text-2xl font-semibold text-amber-600">
              ${product.price}
            </p>

            <p className="text-gray-600">
              Stock: {product.stock}
            </p>

            <p
              className={`font-semibold ${
                product.availabilityStatus === 'In Stock'
                  ? 'text-green-600'
                  : 'text-red-600'
              }`}
            >
              {product.availabilityStatus}
            </p>

            {product.description && (
              <p className="text-gray-600 leading-relaxed">
                {product.description}
              </p>
            )}

            <button
              onClick={() => HandleCart(product)}
              className="w-full md:w-auto mt-4 bg-amber-500 hover:bg-amber-600 
                         text-white font-semibold py-3 px-6 rounded-lg 
                         transition duration-300"
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
