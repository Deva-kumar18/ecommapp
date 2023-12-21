import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filter } from '../../Redux/features/cartSlice/cartSlice';

const Filter = () => {
  const data = useSelector((state) => state.cartSlice.cart);
  const dispatch = useDispatch();
  const menuItems = ['All', ...new Set(data.map((val) => val.category))];

  const filterItemsByCategory = (category) => {
    if (category === 'All') {
      dispatch(filter(data));
    } else {
      const filteredItems = data.filter((item) => item.category === category);
      dispatch(filter(filteredItems));
    }
  };

  return (
    <div className='filter-container'>
      {menuItems.map((val) => (
        <button key={val} className='filter-btn' onClick={() => filterItemsByCategory(val)}>
          {val}
        </button>
      ))}
    </div>
  );
};

export default Filter;


