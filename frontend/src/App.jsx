import { Routes, Route } from "react-router-dom";
import Contact from './pages/Contact';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Login from './pages/Login';
import PlaceOrder from './pages/PlaceOrder';
import Orders from './pages/Orders';
import Product from './pages/Product';
import About from './pages/About';
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Collection from "./pages/Collection";
import SearchBar from "./components/SearchBar";
import { ToastContainer } from "react-toastify";
import Logout from "./pages/Logout";

function App() {
  return (
    <div className='ecommerce-app px-4 sm:px-[3vw] md:px-[5vw] lg:px-[9vw]'>
      <ToastContainer />
      <NavBar />
      <SearchBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<Login />} />
          <Route path='/place-order' element={<PlaceOrder />} />
          <Route path='/orders' element={<Orders />} />
          <Route path='/product/:productId' element={<Product />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/logout" element={<Logout />} />        
      </Routes>
      <Footer />
    </div>
  )
}

export default App;
