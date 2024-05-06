import Login from "./Pages/login";
import Home from "./Pages/home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./Pages/signup"
import ForgotPassword from "./Pages/fpass";
import Navbar from "./Pages/Components/navbar";
import Mobiles from "./Pages/mobiles";
import { Provider } from "react-redux";
import store from "./redux/store";
import Cart from "./Pages/Cart";
import Wishlist from "./Pages/Wishlist";
import ProductDetails from "./Pages/ProductDetails";
import BuyNow from "./Pages/buynow";


function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Router>
        <>
        <Navbar/>
        </>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/forgotpass" element={<ForgotPassword/>}/>
          <Route path="/wishlist" element={<Wishlist/>}/>
          <Route path="/mobiles" element={<Mobiles/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/productdetails/:id" element={<ProductDetails/>}/>
          <Route path="/buynow/">
            <Route path="" element={<BuyNow/>}/>
            <Route path=":id" element={<BuyNow/>}/>
          </Route>
        </Routes>
      </Router>
    </div>
    </Provider>
  );
}

export default App;