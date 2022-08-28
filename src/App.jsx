import './App.css';
import NavBar from './navbar/navbar';
import ItemListContainer from './ItemListContainer/ItemListContainer';

function App() {
  return (

    /** https://api.mercadolibre.com/sites/MLA/search?q=Ferrari */
    <div className="App">
      <NavBar></NavBar>
      <ItemListContainer title="Este es el titulo de la card" option="Agregar al carrito" />
      <header className="App-header">
      </header>
    </div>
  );
}

export default App;
