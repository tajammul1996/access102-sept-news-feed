import { BrowserRouter, Route, Switch } from "react-router-dom";

import Authentication from "./pages/authentication/Authentication";
import Home from "./pages/homepage/Homepage";
import Cart from "./pages/cart/Cart";
import Product from "./pages/prouct-page/ProductPage";

import Header from "./components/Header/Header";

const Routes = () => {
  return (
    <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/cart" component={Cart} />
        <Route path="/product" component={Product} />
        <Route path="/authentication" component={Authentication} />
        <Route path="/" exact component={Home} />
      </Switch>
    </div>
    </BrowserRouter>
  );
};

export default Routes;
