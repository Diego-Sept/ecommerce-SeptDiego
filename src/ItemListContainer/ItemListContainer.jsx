import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css'

function ItemListContainer( {products, ...props} ) {

  return (
    <>
      <ItemList products={products}></ItemList>
    </>
  )


}

export default ItemListContainer;