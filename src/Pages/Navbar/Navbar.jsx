import React, { useState } from "react";
import { ShoppingCartOutlined, SearchOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import { filter } from "../../Redux/features/cartSlice/cartSlice";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const data = useSelector((state) => state.cartSlice.cart);
  const dispatch = useDispatch();
  const badge = () => {
    var badger = 0;
    data.map((val, key) => (badger = badger + val.count));
    return badger;
  };
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearchChange = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filteredItems = data.filter((item) =>
      item.title.toLowerCase().includes(term)
    );

    dispatch(filter(filteredItems));
  };
  const navigate = useNavigate()
  const navigateCart = ()=>{
    navigate("/cart")
  }

  return (
    <div className="navbar-container">
      <div className="shoppy">
        <h1>Shoppy</h1>
      </div>
      <div className="search-bar">
        <div>
          <input
            className="search-input"
            type="text"
            placeholder="Search...."
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
        <div className="search-icon">
          <SearchOutlined />
        </div>
      </div>
      <div onClick={navigateCart} className="shopping-cart-icon">
        <  ShoppingCartOutlined />
        <div className="cart-badge">{badge()}</div>
      </div>
    </div>
  );
};

export default Navbar;
