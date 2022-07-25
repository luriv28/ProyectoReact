import './App.css';
import NavBarMenu from './components/Navbar'
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import CartContext from './components/CartContext'
import { BrowserRouter, Routes, Route} from 'react-router-dom'


function App() {
  // const onAdd = () => {
  //   console.log("click")
  // }
  return (
    
    <BrowserRouter className="App">
          <NavBarMenu /> 
      <Routes>
       <Route exact path='/' element={<ItemListContainer greeting="WELCOME TO OUR WORLD" />} />
       <Route exact path='/categories/:category' element={<ItemListContainer greeting="WELCOME TO OUR WORLD" />} />
       <Route exact path='/item/:id' element={<ItemDetailContainer />}></Route> 
       <Route exact path='/cart' element={<CartContext/>} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
