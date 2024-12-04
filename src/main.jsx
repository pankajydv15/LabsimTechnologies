import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import './index.css';
import Routes from './Routes';
import Home from './Components/Main/Home';
import About from './Components/About/About';
import ProductsServices from './Components/Services/Services';
import ContactUs from './Components/Contact/ContactUs';
import Hmv from './Components/Main/ReadMore/HMV/Hmv';
import Lmv from './Components/Main/ReadMore/LMV/Lmv';
import Tmv from './Components/Main/ReadMore/TWS/Tmv';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Routes />}>
      <Route path="" element={<Home />} />
      <Route path="/hmv" element={<Hmv />} />
      <Route path="/lmv" element={<Lmv />} />
      <Route path="/tmv" element={<Tmv />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<ProductsServices />} />
      <Route path="/contact" element={<ContactUs />} />
    </Route>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
