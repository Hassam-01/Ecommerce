import './App.css';
import Display from './components/Display';
import Navbar from './components/Navbar';
import { CartProvider } from './components/States';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Cart from './components/Cart';


function App() {
  return (
    <Router>
    <>
    <CartProvider>
      <Navbar/>
      {/* <Display/> */}
    <Routes>
     <Route path='/' element={< Display/>}/>
     <Route exact path="/main" element={< Display/>}/> 
      <Route exact path='/cart' element={<Cart/>}/>



    </Routes>
      </CartProvider>
    </>
    </Router>
  );
}

export default App;
