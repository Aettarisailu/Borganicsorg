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
import Termsandconditions from './components/Termsandconditions'
import Addcart from './components/Addcart'
import PrivacyPolicy from './components/PrivacyPolicy'
import ShippingPolicy from './components/ShippingPolicy'
import CancellationPolicy from './components/CancellationPolicy'
import QualityProduct from './components/QualityProduct'
import ProtectYourDetails from './components/ProtectYourDetails'
import FSSAILicense from './components/FSSAILicense'
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
        <Route path="/termsandconditions" element={<Termsandconditions />}></Route>
        <Route path="/privacypolicy" element={<PrivacyPolicy />}></Route>
        <Route path="/shippingpolicy" element={<ShippingPolicy />}></Route>
        <Route path="/cancellationpolicy" element={<CancellationPolicy />}></Route>
        <Route path="/qualityproduct" element={<QualityProduct />}></Route>
        <Route path="/protectyourdetails" element={<ProtectYourDetails />}></Route>
        <Route path="/fssailicense" element={<FSSAILicense />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
