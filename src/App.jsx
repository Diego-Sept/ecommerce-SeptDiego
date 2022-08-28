import './App.css';
import NavBar from './navbar/navbar';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import { useState, useEffect } from 'react';

function App() {

  //const [search, setSearch] = useState('');
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);

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

    <div className="App">
      <NavBar></NavBar>
      <header className="App-header p-4">
        <ItemListContainer products={products} />
      </header>
    </div>
  );
}

export default App;
