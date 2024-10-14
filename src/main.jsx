import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from 'react-router-dom'
// import App from './App.jsx'
import './index.css'
import Routes from './Routes'
import Home from './Components/Main/Home'
import About from './Components/About/About'
import ProductsServices from './Components/Services/Services'
import ContactUs from './Components/Contact/ContactUs'

const router= createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element = {<Routes/>}>
      <Route path='' element= {<Home/>}/>
      <Route path='/about' element= {<About/>}/>
      <Route path='/services' element= {<ProductsServices/>}/>
      <Route path='/Contact' element= {<ContactUs/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
