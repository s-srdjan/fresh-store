import { Link } from "react-router-dom";

function CartOverview() {
  return (
    <div>
      <p>
        <span>10 pizzas</span>
        <span>$24</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
