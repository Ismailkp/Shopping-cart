// import React, { StrictMode } from 'react'
import React,{Suspense} from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import { Layout } from './Layout.jsx'
import { Provider } from 'react-redux'
import { store } from './Utility/Store.js'

const ProductDetails=React.lazy(()=>import('./Components/ProductDetails/ProductDetails.jsx'))
const Home=React.lazy(()=>import('./Components/Home/Home.jsx'))
const About=React.lazy(()=>import('./Components/About/About.jsx'))
const Cart=React.lazy(()=>import('./Components/Cart/Cart.jsx'))
const Contact=React.lazy(()=>import('./Components/Contact/Contact.jsx'))
const Login =React.lazy(()=>import('./Components/Login/Login.jsx'))
const Noresult=React.lazy(()=>import('./Components/Error/Noresult.jsx'))



let router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path='/' element={<Layout />}
    errorElement={
        <Suspense fallback={<h4>Loading No Result Page...</h4>}>
          <Noresult />
        </Suspense>
      }
  
  >
      <Route
        index
        element={
          <Suspense fallback={<h4>Loading Home....</h4>}>
            <Home />
          </Suspense>
        }
      />
      <Route 
      path="/product/:id" 
      element={
        <Suspense fallback={<h4>Loading ProductCart....</h4>}>
      <ProductDetails />
      </Suspense>
      } />
      <Route
        path='about'
        element={
          <Suspense fallback={<h4>Loading About....</h4>}>
            <About />
          </Suspense>
        }
      />
      <Route
        path='contact'
        element={
          <Suspense fallback={<h4>Loading Contact....</h4>}>
            <Contact />
          </Suspense>
        }
      />
      <Route
        path='login'
        element={
          <Suspense fallback={<h4>Loading Login....</h4>}>
            <Login />
          </Suspense>
        }
      />
      <Route
        path='cart'
        element={
          <Suspense fallback={<h4>Loading Cart....</h4>}>
            <Cart />
          </Suspense>
        }
      />
    </Route>
    </>
  )
)


createRoot(document.getElementById('root')).render(


    <Provider store={store}>
 <RouterProvider router={router}/>
 </Provider>

)
