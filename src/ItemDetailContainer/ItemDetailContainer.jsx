import ItemList from '../ItemDetail/ItemDetail';
import './ItemDetailContainer.css'
import React, {useEffect} from 'react'

function ItemDetailContainer( {products, setProducts, cart, setCart,...props} ) {

  const searchProducts = async () => {
    try {
      const response = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=placa de video`);
      const data = await response.json();
      setProducts(data.results);
    } catch (e){ 
      console.log(e)
    }
  }

  useEffect(() => {
    searchProducts();
  }, [])

  return (
    <>
      <ItemDetail products={products} cart={cart} setCart={setCart}></ItemDetail>
    </>
  )


}

export default ItemDetailContainer;