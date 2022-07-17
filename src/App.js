import { BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import NavBarMenu from './components/Navbar'
import ItemListContainer from './components/ItemListContainer';



function App() {
  // const onAdd = () => {
  //   console.log("click")
  // }
  return (
    <div className="App">
      <BrowserRouter>
        <NavBarMenu /> 
        <Routes>
        <Route path='/' element={<ItemListContainer greeting="WELCOME TO OUR WORLD"/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
