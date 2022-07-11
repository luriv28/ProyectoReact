
import './App.css';
import NavBarMenu from './components/Navbar'
import ItemListContainer from './components/ItemListContainer';



function App() {
  // const onAdd = () => {
  //   console.log("click")
  // }
  return (
    <div className="App">
      <header className="App-header">
        <NavBarMenu/> 
        <ItemListContainer greeting="WELCOME TO OUR WORLD"/>
        {/* <ItemCount stock={6} initial={1} onAdd={onAdd}/>     */}
        
      </header>
    </div>
  );
}

export default App;
