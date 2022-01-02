import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Authentication from "./pages/authentication/Authentication";
import Home from "./pages/homepage/Homepage";
import Cart from "./pages/cart/Cart";
import Product from "./pages/prouct-page/ProductPage";

import Header from "./components/Header/Header";

export const CartContext = React.createContext();
export const HomeContext = React.createContext();

const Routes = () => {
  const isAuthenticatedFromLocalStorage = localStorage.getItem("isAuthenticated") === "true" || false;
  const [cartItems, setCartItems] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(isAuthenticatedFromLocalStorage);


  return (
    <CartContext.Provider value={{ cartItems, setCartItems, isAuthenticated, setIsAuthenticated }}>
      <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route path="/cart" component={Cart} />
          <Route path="/product/:id" component={Product} />
          <Route path="/authentication" component={Authentication} />
          <Route path="/" exact component={Home} />
        </Switch>
      </div>
      </BrowserRouter>
    </CartContext.Provider>
    // <Route path="/" exact component={Home} />
  );
};

export default Routes;
