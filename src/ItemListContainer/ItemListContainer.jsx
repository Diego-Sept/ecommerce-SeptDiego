import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css'
import React, {useEffect} from 'react'

function ItemListContainer( {products, setProducts, cart, setCart,...props} ) {

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
      <ItemList products={products} cart={cart} setCart={setCart}></ItemList>
    </>
  )


}

export default ItemListContainer;