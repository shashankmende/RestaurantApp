import { AiOutlineShoppingCart } from "react-icons/ai";
import "./index.css";
import { Link } from "react-router-dom";

const Header = (props) => {
  const { restaurantName, cartSize } = props;
  return (
    <div className="header-container">
      <Link to="/">
        <h1>{restaurantName}</h1>
      </Link>

      <div className="icons-container">
        <p className="my-orders">My Orders</p>
        <Link to="/cart">
          <AiOutlineShoppingCart size={40} />
        </Link>
        <p className="cart_count">{cartSize}</p>
        <Link to="/login">
          <button className="logout" type="button">
            Logout
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
