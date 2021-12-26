import { useState, useEffect } from 'react';
import axios from 'axios';
import Loader from "react-loader-spinner";

import ProductCard from "../../components/ProductCard/ProductCard";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import styles from "./styles.module.css";


function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

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

  const renderProducts = () => {
    return products.map((product, idx) =>  <ProductCard key={idx} product={product} />);
  }

    return (
      <div className={styles.container}>
       {renderProducts()}
      </div>
    );
  }
  
  export default Home;