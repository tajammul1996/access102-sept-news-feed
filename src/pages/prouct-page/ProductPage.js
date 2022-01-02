// import { useParams } from "react-router-dom";
import {useEffect, useState } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import styles from "./styles.module.css";



function Product(props) {
  // const params = useParams();
  console.log(props);
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const productId = props.match.params.id;
  // const {id} = useParams()


  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${productId}`)
      .then(res => {
        setLoading(false);
        console.log(res.data);
        setProduct(res.data);
      })
      .catch(err => {
        setLoading(false);
        console.log(err)});  
  }, []);

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

    return (
      <div>
        <h1>{product.title}</h1>
        <img src={product.image} alt={product.title}  />
        <p>
         {product.description}
        </p>
        <p>{`Price -  ${product.price} $`}</p>
      </div>
    );
  }
  
  export default Product;