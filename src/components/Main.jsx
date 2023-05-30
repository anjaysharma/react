import React from 'react'
import { Container } from '@mui/material'
import ProductCard from './ProductCard'
import './Main.css'

const productList = [
  {
    id: 1,
    name: 'Smashic brand logo shoe - PUMA',
    description: 'Puma Smashic Unisex Sneakers',
    rating:'4.2',
    price: 1000,
    image: 'https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/21767244/2023/1/31/ce9c89f5-ab94-4754-8f56-00a6747173e41675143770544PumaSmashicUnisexSneakers1.jpg'
  },
  {
    id: 2,
    name: 'Women yoke design kurta set - Biba',
    description: 'lorem ipsum',
    rating:'4',
    price: 2000,
    image: 'https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/18652620/2022/8/26/4d5f7043-a460-42e5-b67a-b04d9c0bc7041661503606623-KALINI-Women-Beige-Floral-Yoke-Design-Kurta-with-Trousers--W-1.jpg'
  },
  {
    id: 3,
    name: 'Women yoke design kurta set - Biba',
    description: 'lorem ipsum',
    rating:'4.4',
    price: 2000,
    image: 'https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/18652620/2022/8/26/4d5f7043-a460-42e5-b67a-b04d9c0bc7041661503606623-KALINI-Women-Beige-Floral-Yoke-Design-Kurta-with-Trousers--W-1.jpg'
  },
  {
    id: 4,
    name: 'Women yoke design kurta set - Biba',
    description: 'lorem ipsum',
    rating:'3.5',
    price: 2000,
    image: 'https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/18652620/2022/8/26/4d5f7043-a460-42e5-b67a-b04d9c0bc7041661503606623-KALINI-Women-Beige-Floral-Yoke-Design-Kurta-with-Trousers--W-1.jpg'
  },
  {
    id: 5,
    name: 'Women yoke design kurta set - Biba',
    description: 'lorem ipsum',
    rating:'5',
    price: 2000,
    image: 'https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/18652620/2022/8/26/4d5f7043-a460-42e5-b67a-b04d9c0bc7041661503606623-KALINI-Women-Beige-Floral-Yoke-Design-Kurta-with-Trousers--W-1.jpg'
  },
]


function Main() {
  return (
    <div>
        <Container className='product-list' maxWidth="lg">
          {
            productList.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          }
        </Container>
    </div>
  )
}

export default Main