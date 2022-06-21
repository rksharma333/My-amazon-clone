import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Payment from "./Payment"
import Checkout from "./Checkout";
import Orders from "./Orders"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import {loadStripe } from "@stripe/stripe-js";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51LCNDUSJPTUlhZTHvVZ3BsCh3VbLU7sXMQFL2nIqVu9liaAqoDj9kV2i87Id3tvC0sGVvxsyPCxagMkyc0J0IpsU00w9oemthE"
);

function App() {
  
  const [{}, dispatch] = useStateValue();
  
  useEffect(() => {
    //this will only run once when the app components loads....
    auth.onAuthStateChanged((authUser) => {
      console.log("The User is >>> ", authUser);
      
      if(authUser){
        // the user just logged in / the user was logged in
        
        dispatch({
          type: 'SET_USER',
          user: authUser
        });
      }
      else {
        //the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        });
      }
    });
  }, []);
  
  
  return (
    // BEM
    <Router>
      <div className="app">
      
      
        
        <Routes>
          
        <Route path="/orders"
          element={[ <Header />, <Orders/> ]}
          />
          
          <Route path="/login"
          element={[ <Login/> ]}
          />
          
          <Route path="/payment"
          element={[<Header/>, <Elements stripe={promise}><Payment/></Elements> ]}
          />
          
          <Route path="/checkout" element={[<Header/>,<Checkout/>]}
          />
          <Route path="/" element={[<Header/>,<Home />]}/>
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
