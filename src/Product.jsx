import React from 'react'
import { useStateValue } from './StateProvider';


function Product({id,title,price,image,rating}) {
    
  const[{basket},dispatch] = useStateValue();

//   console.log("this is a basket",basket);

    const addToBasket = () =>{
        // dispatch the item into dataLayer
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id:id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        });
    };


    return (
        <div className="product">
        <div className="product__info">
         <p>{title}</p>
          <p className="product__price">
              <small>$</small>
              <strong>{price}</strong>
          </p>
          <div className="product__rating">
           {Array(rating)
           .fill()
           .map((_, i) => (
            <p>⭐</p>
           ))}
          
          </div>
        </div>

       <img 
        src={image} alt="" />
        {/* src="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"  */}
           
            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    )
}

export default Product;
