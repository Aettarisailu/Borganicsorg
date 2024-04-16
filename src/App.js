import Landingpage from './components/Landingpage';
import Header from './components/Header';
import Honeyproduct from './components/Honeyproduct'; // Corrected import path
import UserLogin from "./components/UserLogin";
import NewUserForm from './components/NewUserForm'
import NotFound from './components/NotFound';
import OrderSummary from './components/OrderSummary'
import OrderForm from './components/OrderForm'
import Confimedorder from './components/Confimedorder'
import HoneyProducts from './components/HoneyProducts'
import CoffeeProducts from './components/CoffeeProducts'
import Addcart from './components/Addcart'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/honeproduct" element={<Honeyproduct />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/Addcart" element={<Addcart />}></Route>
        <Route path="/newuserform" element ={<NewUserForm/>}></Route>
        <Route path="/notfound" element ={<NotFound/>}></Route>
        <Route path="/OrderForm" element={<OrderForm />}></Route>
        <Route path="/Confimedorder" element={<Confimedorder />}></Route>
        <Route path="/HoneyProducts" element={<HoneyProducts/>}></Route>
        <Route path="/CoffeeProducts" element={<CoffeeProducts/>}></Route>
        <Route path="/ordersummary" element={<OrderSummary />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
