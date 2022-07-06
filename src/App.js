
import './App.css';
import NavBarMenu from './components/Navbar'
import ItemListContainer from './components/ItemListContainer';



function App() {
  const handleClick = () => {
    alert('Proximamente podras visualizar todas nuestras novedades')
  }
  return (
    <div className="App">
      <header className="App-header">
        <NavBarMenu/> 
        <ItemListContainer greeting="WELCOME TO OUR WORLD" handleClick={handleClick} />
        
     
        
      </header>
    </div>
  );
}

export default App;
