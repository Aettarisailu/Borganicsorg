import "./index.css"

const OrderSummary = () => {
  const orderDetails = {
    productName: "Honey",
    quantity: 2,
    price: 10, // Assuming price per unit is $10
    deliveryAddress: "123 Main St, Cityville, State, 12345",
    total: 20 // Total price for 2 units of honey
  };
  return (
    <div className="order-summary-container">
      <h2 className="order-summary-title mt-5">Order Summary</h2>
      <div className="order-details">
        <div className="order-item">
          <span className="item-label">Product:</span>
          <span className="item-value">{orderDetails.productName}</span>
        </div>
        <div className="order-item">
          <span className="item-label">Quantity:</span>
          <span className="item-value">{orderDetails.quantity}</span>
        </div>
        <div className="order-item">
          <span className="item-label">Price:</span>
          <span className="item-value">${orderDetails.price}</span>
        </div>
        <div className="order-item">
          <span className="item-label">Delivery Address:</span>
          <span className="item-value">{orderDetails.deliveryAddress}</span>
        </div>
        <div className="order-item">
          <span className="item-label">Total:</span>
          <span className="item-value">${orderDetails.total}</span>
        </div>
      </div>
      <button className="place-order-btn">Place Order</button>
    </div>
  );
};

export default OrderSummary;