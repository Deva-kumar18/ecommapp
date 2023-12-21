import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Filter from "../../components/Filter/Filter";
import { cart } from "../../Redux/features/cartSlice/cartSlice";

const Products = () => {
  const data = useSelector((state) => state.cartSlice.cart);
  const filteredItems = useSelector((state) => state.cartSlice.filteredItems);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleNavigate = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="product-container">
      <div className="filter-div">
        <Filter />
      </div>
      <ul className="product-flex">
        {filteredItems.length > 0
          ? filteredItems.map((val, key) => (
              <li className="product-card" key={key}>
                <div>
                  <img
                    className="product-image"
                    onClick={() => handleNavigate(val.id)}
                    src={val.image}
                    alt={val.title}
                  />
                </div>
                <div className="product-title">{val.title}</div>
                <div className="product-price">${val.price}</div>
                <button className="addcart-btn">Add to Cart</button>
              </li>
            ))
          : data.map((val, key) => (
              <li className="product-card" key={key}>
                <div>
                  <img
                    className="product-image"
                    onClick={() => handleNavigate(val.id)}
                    src={val.image}
                    alt={val.title}
                  />
                </div>
                <div className="product-title">{val.title}</div>
                <div className="product-price">${val.price}</div>
                <button
                  className="addcart-btn"
                  onClick={() =>
                    dispatch(cart({ count: val.count + 1, key, opr: "add" }))
                  }
                >
                  Add to Cart
                </button>
              </li>
            ))}
      </ul>
    </div>
  );
};

export default Products;
