import React from 'react'
import { useStateValue } from './StateProvider'

function CheckoutProduct (props) {
    const[{basket},dispatach] = useStateValue();

    const removeFromBasket = () =>{
        //remove the  basket
        dispatach({
            type: "REMOVE_FROM_BASKET",
             id: props.id,
        })
    }

    return (
        <div className="CheckoutProduct">
         <img className="CheckoutProduct__image" src={props.image}/>

         <div className="CheckoutProduct__info">
          <p className="CheckoutProduct__title">{props.title}</p>

          <p className="CheckoutProduct__price">
              <small>$</small>
              <strong>{props.price}</strong>
          </p>

          <div className="CheckoutProduct__rating">
           {Array(props.rating)
           .fill()
           .map((_, i) => (
            <p>⭐</p>
           ))}
          
          </div>
          <button onClick={removeFromBasket}>Remove item from Basket</button>




         </div>
            
        </div>
    )
}

export default CheckoutProduct 
