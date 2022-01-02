import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Button } from '@mui/material';
// import { useHistory } from "react-router-dom";

function ProductCard(props) {
  // console.log("product card props", props);
    const { product } = props;
    // const history = useHistory();




  return (
    <Card sx={{ maxWidth: 335, margin: "10px" }}>
      <CardActionArea onClick={() => props.history.push(`/product/${product.id}`)}>
        <CardMedia
          component="img"
          height="200"
          image={product.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product.description}
          </Typography>
        </CardContent>
      </CardActionArea>
        <Button variant='outlined' onClick={() => props.addToCart(product)}>Add to cart</Button>
    </Card>
  );
}


export default ProductCard;