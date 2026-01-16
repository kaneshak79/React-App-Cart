import { useState } from "react";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import CartModal from "./components/CartModal";

function App() {
  const [cart, setCart] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const removeFromCart = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  return (
    <>
      <Navbar
        count={cart.length}
        onCartClick={() => setShowModal(true)}
      />

      <Products cart={cart} setCart={setCart} />

      {showModal && (
        <CartModal
          cart={cart}
          onClose={() => setShowModal(false)}
          onRemove={removeFromCart}
        />
      )}
    </>
  );
}

export default App;
