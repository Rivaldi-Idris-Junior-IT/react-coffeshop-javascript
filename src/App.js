import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from "Pages/LandingPage";
import ProductMenu from 'Pages/ProductMenu';
import DetailProduct from 'Pages/DetailProduct';
import LoginPage from 'Pages/Login';
import RegisterPage from 'Pages/Register'
import PaymentDelivery from 'Pages/PaymentDelivery';
import Transaction from 'Pages/Transaction';
import './assets/scss/style.scss'

import { loadUser } from './actions/userAction'
import store from 'store'

function App() {
  useEffect(() => {
    store.dispatch(loadUser())
  }, [])
  
  return (
    <div className="App">
      <Router>
          <Routes>
            <Route path="/" element={<LandingPage/>}/>
            <Route path="/productmenu" element={<ProductMenu/>}/>
            <Route path="/detailproduct" element={<DetailProduct/>}/>
            <Route path="/loginpage" element={<LoginPage/>}/>
            <Route path="/registerpage" element={<RegisterPage/>}/>
            <Route path="/paymentdelivery" element={<PaymentDelivery/>}/>
            <Route path="/transaction" element={<Transaction/>}/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
