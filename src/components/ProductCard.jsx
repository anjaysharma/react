import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, Rating, Stack } from '@mui/material';
import '../components/Main.css'

export default function ActionAreaCard({product}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="240"
          image={product.image}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product.description}
          </Typography>
          <Rating name="read-only" value={product.rating} precision={0.1} readOnly />
          <Stack direction="row" spacing={2}>
            <Typography variant="h4" color="text.primary">
              ₹{product.price}
            </Typography>
            <Typography variant="h6" color="text.secondary" style={{textDecoration: "line-through"}}>
              ₹{product.price}
            </Typography>
          </Stack>
          <Stack direction="row" spacing={1}>
            <Button variant="outlined">Add to Cart</Button>
            <Button variant="contained" className='new-btn'>Buy Now</Button>
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}