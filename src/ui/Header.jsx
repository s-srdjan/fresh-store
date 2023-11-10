import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";

function Header() {
  return (
    <header>
      <Link to="/">Fresh Store Co.</Link>

      <SearchOrder />

      <p>Bakery</p>
    </header>
  );
}

export default Header;
