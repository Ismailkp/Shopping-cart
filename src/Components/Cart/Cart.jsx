import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RemoveFromCart,clearCart } from '../../Features/CartSlice'



const Cart = () => {
 const dispath=useDispatch()
   const {data}=useSelector(state=>state.cart)

   if(data.length === 0){
    return <h4>No Item Please add the items to Cart</h4>
   }

   const HandleClick =(itemId)=>{
    dispath(RemoveFromCart(itemId))
   }

   const HandleClearAll = () =>{
    dispath(clearCart())
   }

     
  return (
    <div className='mx-auto px-4 py-17'>
      <h4 className='text-3xl font-bold text-red-800 mb-6'>Your cart  </h4>
         <button className='text-gray-400 font-semibold' onClick={HandleClearAll}>Remove All Items 🛒</button>
      <div className='grid grid-cols-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap:10'>
           {
            data.map(data=>(
              <div key={data.id} className='bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-4 flex flex-col items-center hover:bg-cyan-200'>
                <img src={data.images} alt={data.title}/>
              <h4 className='text-gray-400 font-semibold'>{data.title}</h4>
              <h4 className='text-gray-400 font-semibold'>Price:${data.price}</h4>
              <h4 className={`text-gray-400 font-medium  ${data.availabilityStatus === 'In Stock' ? 'text-green-400': 'text-red-500'} `}>
                {data.availabilityStatus}
              </h4>
              <button className='p-2 bg-cyan-500 mix-blend-multiply text-black font-semibold rounded-xl hover:text-lg' onClick={()=>HandleClick(data.id)}>Remove</button>
              </div>
            ))
           }
      </div>
    </div>
  )
}

export default Cart