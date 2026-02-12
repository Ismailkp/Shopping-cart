import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../../Features/CartSlice'

const ProductDetails = () => {
    const dispatch=useDispatch()
    const navigate =useNavigate()
  const { id } = useParams() // get the product id from the URL
  const { data = [] } = useSelector(state => state.Api_data)

  // find the product by id
  const product = data.find(item => item.id.toString() === id)

  if (!product) return <p className="text-center mt-10">Product not found</p>

  const HandleCart = (item)=>{
     dispatch(addToCart(item))
     navigate ('/cart')
  }

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-md mt-13 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-1 ">
      <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
      <div className="flex flex-col md:flex-row gap-6">
        <img
          src={product.images}
          alt={product.title}
          className="w-full md:w-1/2 h-auto object-contain"
        />
        <div className="md:w-1/2">
          <p className="text-gray-700 mb-2">Category: {product.category}</p>
          <p className="text-gray-700 mb-2">Price: ${product.price}</p>
          <p className="text-gray-700 mb-2">Stock: {product.stock}</p>
          <p className={`font-medium ${
            product.availabilityStatus === 'In Stock' ? 'text-green-600' : 'text-red-600'
          }`}>
            {product.availabilityStatus}
          </p>
          {product.description && (
            <p className="mt-4 text-gray-600">{product.description}</p>
          )}
        </div>
      </div>
              <button onClick={() => HandleCart(product)} className='mt-4 bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2 px-4 rounded transition-colors duration-300'>Add To Cart</button>

    </div>
  )
}

export default ProductDetails
