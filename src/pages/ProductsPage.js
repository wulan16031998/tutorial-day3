import React from 'react'
import { productList_DUMMY } from '../utils/constant';
import Product from '../components/Product';


const ProductsPage = () => {
  const products = productList_DUMMY;



  return (
    <div className='bgProduk'> 
    {products.map((product) => {
      return <Product key={product.id} product={product}/>;
    })}
  </div>
  );
};

export default ProductsPage;