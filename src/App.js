import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import LandingPage from "Pages/LandingPage";
import ProductMenu from 'Pages/ProductMenu';
import DetailProduct from 'Pages/DetailProduct';
import LoginPage from 'Pages/Login';
import RegisterPage from 'Pages/Register'
import PaymentDelivery from 'Pages/PaymentDelivery';
import Transaction from 'Pages/Transaction';


import './assets/scss/style.scss'


function App() {
  return (
    <div className="App">
      <Router>
          <Route exact path="/" component={LandingPage}/>
          <Route exact path="/productmenu" component={ProductMenu}/>
          <Route exact path="/detailproduct" component={DetailProduct}/>
          <Route exact path="/loginpage" component={LoginPage}/>
          <Route exact path="/registerpage" component={RegisterPage}/>
          <Route exact path="/paymentdelivery" component={PaymentDelivery}/>
          <Route exact path="/transaction" component={Transaction}/>
      </Router>
    </div>
  );
}

export default App;
