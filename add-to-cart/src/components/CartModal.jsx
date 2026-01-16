import "./CartModal.css";

function CartModal({ cart, onClose, onRemove }) {
  return (
    <div className="cart-modal-overlay">
      <div className="cart-modal-box">
        <h3>Cart Items</h3>

        {cart.length === 0 && <p>No items in cart</p>}

        {cart.map(item => (
          <div key={item.id} className="cart-item">
            <span className="cart-item-title">{item.title}</span>
            <button
              className="cart-item-remove-btn"
              onClick={() => onRemove(item.id)}
            >
              Remove
            </button>
          </div>
        ))}

        <button className="cart-modal-close-btn" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}

export default CartModal;
