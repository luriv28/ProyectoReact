
import './App.css';
import NavBarMenu from './components/Navbar'
import ItemListContainer from './components/ItemListContainer';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBarMenu/> 
        <ItemListContainer greeting="WELCOME TO OUR WORLD"/>
        
     
        
      </header>
    </div>
  );
}

export default App;
