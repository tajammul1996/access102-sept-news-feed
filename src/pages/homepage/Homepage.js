import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import Loader from "react-loader-spinner";

import ProductCard from "../../components/ProductCard/ProductCard";
import { CartContext } from "../../Routes"

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import styles from "./styles.module.css";


function Home(props) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  // const [cartItems, setCartItems] = useState([]);

  // const { cartItems, setCartItems } = useContext(CartContext);
  const data = useContext(CartContext);
  // console.log( "homepage--->", data)

  function fetchProducts() {
    setLoading(true);
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setLoading(false);
        setProducts(res.data);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    fetchProducts();
  },[]);

  if (loading) {
    return (
      <div className={styles.loader_container}>
        <Loader
          type="Puff"
          color="#000000"
          height={100}
          width={100}
        />
      </div>
    );
  }

  const addToCart = product => {
    data.setCartItems([...data.cartItems, product]);
  };

  const renderProducts = () => {
    return products.map((product, idx) =>  <ProductCard key={idx} product={product} addToCart={addToCart} history={props.history}/>);
  }

    return (
      <div className={styles.container}>
       {renderProducts()}
      </div>
    );
  }
  
  export default Home;