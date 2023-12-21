import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
    const data =useSelector((state)=>state.cartSlice.cart)
    const { id } = useParams();
  const filterdata = data.filter((product) => product.id == id);
  console.log(filterdata);
  const renderSpecifications = (specs) => {
    return (
      <ul>
        {Object.entries(specs).map(([key, value]) => (
          <li key={key}>
            <strong>{key}:</strong> {value}
          </li>
        ))}
      </ul>
    );
  };
  return (
    <div className="product-details-container">
    {filterdata.map((product) => (
      <div className='p-details-flex' key={product.id}>
        <div className="image-name"><div>
          <img className="products-image" src={product.image} />
        </div>
        <div>{product.title}</div></div>
        <div className="pro-details">
          <div className="p-details">
        <div>Price: ${product.price}</div> 
       <div> {renderSpecifications(product.specs)}</div>
       </div>
        </div>
      </div>
    ))}
  </div>
  )
}

export default ProductDetails