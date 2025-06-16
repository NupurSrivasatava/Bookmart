import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './Components/Signup';
import About from './Components/About';
import SignIn from './Components/Signin';
import SellerDashboard from './Components/Seller_dash';
import BuyerDashboard from './Components/Buyer_dash';
import Parent  from './Components/Parent';



function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/signin" element={<SignIn />}  />
        <Route path="/signup" element={<SignUp />}  />
        <Route path="/seller-dashboard" element={<SellerDashboard />}  />
        <Route path="/buyer-dashboard" element={<BuyerDashboard />}  />
        <Route path="/parent" element={<Parent />}/>;

      </Routes>
    </BrowserRouter>
  );
}

export default App;
