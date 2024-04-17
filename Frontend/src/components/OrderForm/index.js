import "./index.css"
import { Link } from "react-router-dom";

const OrderForm = () => {

  return (
    <div className="mt-5 develiry-from-container">
      <h1 className="mt-5 mb-4">Shiping Deatails</h1>
      <from className="develiry-from mt-5">

        <div className="from-card">
          <label>Name</label>
          <input type="text" id="name"></input>
        </div>

        <div className="from-card">
          <label>Phone</label>
          <input type="number" id="name"></input>
        </div>

        <div className="from-card">
          <label>State</label>
          <input type="text" id="state"></input>
        </div>

        <div className="from-card">
          <label>City</label>
          <input type="text" id="city"></input>
        </div>

        <div className="from-card">
          <label>Pincode</label>
          <input type="text" id="pincode"></input>
        </div>

        <div className="from-card">
          <label>Adress</label>
          <textarea className="adr-box" id="adress"></textarea>
        </div>

        <div className="from-card">
          <Link to="/ordersummary"> <button style={{ width: '23rem' }}>Submit</button></Link>
        </div>

      </from>
    </div>
  )
}

export default OrderForm