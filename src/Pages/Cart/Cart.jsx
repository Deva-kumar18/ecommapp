import { useDispatch, useSelector } from "react-redux";
import { cart,removeCart } from "../../Redux/features/cartSlice/cartSlice";
import UP from "../../Assets/uparrow.png";
import DOWN from "../../Assets/downarrow.png";
import Cart from "../../Assets/add-cart.png";
import { useState } from "react";

const CartPage = () => {
  const data = useSelector((state) => state.cartSlice.cart);

  const dispatch = useDispatch();

  const calculatAmount = () => {
    var totalAmount = 0;
    data.map((val, key) => (totalAmount = totalAmount + val.totalamount));
    return "$" + totalAmount;
  };
  const badge = () => {
    var badger = 0;
    data.map((val, key) => (badger = badger + val.count));
    return badger;
  };

  return (
    <div className="cart">
      <div className="content">
        <h1>User Cart List</h1>
        {data.length > 0 ? (
          data.map((val, key) => (
            <div className="cart-box">
              <ul key={val.id}>
                <div className="flex-data">
                  <li>
                    <img className="img" src={val.image} />
                  </li>
                  <div className="product-details">
                    <li className="name">{val.title}</li>
                    <li className="price">{"$" + val.price}</li>
                    <li>
                      <button
                        className="rmv-btn"
                        onClick={() =>
                          dispatch(removeCart({ key, opr: "remove" }))
                        }
                      >
                        remove
                      </button>
                    </li>
                  </div>
                  <div className="add">
                    <button
                      className="btn"
                      onClick={() =>
                        dispatch(
                          cart({ count: val.count + 1, key, opr: "add" })
                        )
                      }
                    >
                      <img className="ico" src={UP} />
                    </button>
                    <div>{val.count}</div>
                    <button
                      className="btn"
                      onClick={() =>
                        dispatch(
                          cart({ count: val.count - 1, key, opr: "sub" })
                        )
                      }
                    >
                      <img className="ico" src={DOWN} />
                    </button>
                  </div>
                </div>
              </ul>
            </div>
          ))
        ) : (
          <>No Carts to display</>
        )}

        {data.length > 0 && (
          <div className="total-part">
            <div>TotalCost</div>
            {calculatAmount()}
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
