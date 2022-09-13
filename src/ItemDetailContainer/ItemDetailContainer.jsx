import ItemDetail from '../ItemDetail/ItemDetail';
import './ItemDetailContainer.css'
import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';

function ItemDetailContainer( {products, setProducts, cart, setCart,...props} ) {

  const idProducto = useParams();

  let [product, setProduct] = useState();

  const searchProducts = async () => {
    try {
      const response = await fetch(`https://api.mercadolibre.com/items/${idProducto}`);
      const data = await response.json();
      setProduct(data);
    } catch (e){ 
      console.log(e)
    }
  }

  useEffect(() => {
    searchProducts();
  }, [])

  return (
    <>
      <ItemDetail product={product} cart={cart} setCart={setCart}></ItemDetail>
    </>
  )


}

export default ItemDetailContainer;