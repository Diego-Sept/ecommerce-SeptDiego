import './App.css';
import NavBar from './NavigationBar/Navbar';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {

	const [cart, setCart] = useState([]);
	const [products, setProducts] = useState([]);

	return (
		<div className="App"> 
			<BrowserRouter>
				<NavBar cart={cart} />
				<header className='App-header p-4'>
					<Routes>
						<Route exact path="/" element={<ItemListContainer products={products} setProducts={setProducts} cart={cart} setCart={setCart} />}></Route> 
						<Route exact path="/product/:idProducto" element={<ItemDetailContainer products={products} setProducts={setProducts} cart={cart} setCart={setCart} />}></Route> 
					</Routes>
				</header>
			</BrowserRouter>
		</div>
	)
}

export default App;
