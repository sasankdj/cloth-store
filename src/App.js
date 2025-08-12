
import './App.css';
import Navbar from './components/navbar/Navbar';
import {
  BrowserRouter , Routes,Route
} from "react-router-dom";
import Shop from "./pages/Shop";
import Shopcategory from "./pages/Shopcategory.jsx";
import Cart from "./pages/Cart";
import Loginsignup from "./pages/Loginsignup.jsx";
import Product from "./pages/Product.jsx";
import Footer from './components/footer/Footer.jsx';
import men_banner from './components/assets/banner_mens.png'
import women_banner from './components/assets/banner_women.png'
import kids_banner from './components/assets/banner_kids.png'

function App() {
  return (
    <div>
      <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path='/cloth-store' element={<Shop />}/>
      <Route path='/mens' element={<Shopcategory banner={men_banner} category="men"/>}/>
      <Route path='/womens' element={<Shopcategory banner={women_banner} category="women" />}/>
      <Route path='/kids' element={<Shopcategory banner={kids_banner} category="kid" />}/>
      <Route path='/product' element={<Product />}>
      <Route path=':productId' element={<Product />}/>
      </Route>
      <Route path='/cart' element={<Cart />}/>
      <Route path='/login' element={<Loginsignup />}/>

     </Routes>
     <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
