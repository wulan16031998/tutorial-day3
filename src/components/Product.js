import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

// const Products = () => {
//   const [price, setPrice] = useState(4000)

//   const changePriceHandler = () => {
//     setPrice(6000);
//   };

//   if(price>5000){
//     throw new Error('Price is over standar');
//   }
//   return (
//       <div>
//         <ul>
//           <li>
//           <h4>Indomie</h4>
//           <p>Rp. 4000</p>
//           <p>Rp. {price}</p>
//           <button onClick={changePriceHandler}>Change Price</button>
//           </li>
//         </ul>
//       </div> 
//       )
// }

// export default Products;



const Product = ({product}) => {
  console.log(product.id);
  const navigate = useNavigate();



  const ProductDetailHandler = () => {
    const navigate =useNavigate();
    navigate('1');
  }


 
 
  return (

    <div style={{padding:'1rem'}} onClick={ProductDetailHandler}>
      <h4>{product.title}</h4>
      <p>Rp. {product.price}</p>
      <p>manfaat : {product.description}</p>
    </div>
     );
   
   };
  
  

export default Product