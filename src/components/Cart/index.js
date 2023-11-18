import "./index.css";

import CartContext from "../ReactContext/Context";
import Header from "../Header";
import Empty from "../EmptyView";
import CartItem from "../CartItem";

const Cart = () => (
  <CartContext.Consumer>
    {(value) => {
      const { cartList, removeAllCartItems } = value;

      const onClickRemoveAll = () => {
        removeAllCartItems();
      };

      return (
        <>
          <Header restaurantName={"UNI Resto Cafe"} />
          <div className="cart-container">
            <div className="cart-header">
              <h1>My Cart</h1>
              <button
                type="button"
                className="remove-all-btn"
                onClick={onClickRemoveAll}
              >
                Remove All
              </button>
            </div>
            {cartList.length === 0 ? (
              <Empty />
            ) : (
              cartList.map((each) => (
                <ul className="unordered-list">
                  <CartItem key={each.dishId} dish={each} />
                </ul>
              ))
            )}
          </div>
        </>
      );
    }}
  </CartContext.Consumer>
);

export default Cart;
