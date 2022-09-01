import './App.css';
import NavBar from './Navbar/Navbar';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import { useState } from 'react';

function App() {

  //const [search, setSearch] = useState('');
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);

  return (

    <div className="App">
      <NavBar cart={cart}></NavBar>
      <header className="App-header p-4">
        <ItemListContainer products={products} setProducts={setProducts} cart={cart} setCart={setCart} />
      </header>
    </div>
  );
}

export default App;
