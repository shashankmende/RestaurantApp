import { AiOutlineShoppingCart } from "react-icons/ai";
import "./index.css";
import { Link, withRouter } from "react-router-dom";
import CartContext from "../ReactContext/Context";
import Cookies from "js-cookie";

const Header = (props) => {
  const { restaurantName } = props;
  return (
    <CartContext.Consumer>
      {(value) => {
        const { cartList } = value;

        const onClickLogout = () => {
          Cookies.remove("jwt_token");
          const { history } = props;
          history.replace("/login");
        };

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

              <button className="logout" type="button" onClick={onClickLogout}>
                Logout
              </button>
            </div>
          </div>
        );
      }}
    </CartContext.Consumer>
  );
};

export default withRouter(Header);
