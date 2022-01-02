import { useContext } from 'react';

import ProductCard from "../../components/ProductCard/ProductCard";

import { CartContext } from "../../Routes";

function Cart() {

    const data = useContext(CartContext);
    console.log(data);

    function getTotal() {
      let total = 0;
      for(let i=0;i<data.cartItems.length;i++){
        total = total + data.cartItems[i].price;
      }
      return total;
    }

    return (
      <div>
      <div style={{display: 'flex', flexWrap: 'wrap'}}>
      {data.cartItems.map((product, idx) => <ProductCard key={idx} product={product} />)}
      </div>
      <h3>Total - {getTotal()}</h3>
      </div>
    );
  }
  
  export default Cart;