import { AiOutlineShoppingCart } from "react-icons/ai";
import "./index.css";
import { Link } from "react-router-dom";
import CartContext from "../ReactContext/Context";

const Header = (props) => {
  const { restaurantName } = props;
  return (
    <CartContext.Consumer>
      {(value) => {
        const { cartList } = value;
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
              <p className="cart_count">{cartList.length}</p>
              <Link to="/login">
                <button className="logout" type="button">
                  Logout
                </button>
              </Link>
            </div>
          </div>
        );
      }}
    </CartContext.Consumer>
  );
};

export default Header;
