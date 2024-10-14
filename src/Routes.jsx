
import Navbar from './Components/Header/Navbar'
import Footer from './Components/Footer/Footer'
import { Outlet } from 'react-router-dom'

function Routes() {
  return (
    <>
      <Navbar/>
      <Outlet/>
      <Footer/>

    </>
  )
}

export default Routes
