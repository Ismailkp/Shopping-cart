
import { Footer } from './Footer/Footer'
import { Outlet } from 'react-router-dom'
import { Header } from './Components/Header/Header'


export const Layout = () => {
  return (
    <div>
     <Header/>
     <Outlet/>
     <Footer/>
    </div>
  )
}
