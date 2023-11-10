import { Link } from "react-router-dom";

function EmptyCart() {
  return (
    <div>
      <Link to="/menu">&larr; Back to menu</Link>
      <p>Your cart is still empy. Start adding fresh bakery 🙂</p>
    </div>
  );
}

export default EmptyCart;
