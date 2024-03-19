// import logo from './logo.svg';
import './App.css';
import Cart from './Component/Cart';
import Dashboard from './Component/Dashboard';
import NavbarPanel from './Component/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
        <NavbarPanel/>
        <Routes>
            <Route path='/' element={<Dashboard/>}/>
            <Route path='/cart' element={<Cart/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
