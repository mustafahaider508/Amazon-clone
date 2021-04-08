export const initialState ={
    basket:[],
    user:null
};

//Selector for the SubTotal
export const BasketTotal = (basket) =>
basket?.reduce((total, item)=>

   parseFloat(item.price)+total,0
 )
 

const reducer = (state,action) => {
    switch (action.type) {
           //Add to  the basket
        case "ADD_TO_BASKET":
            return{
                ...state,
            basket: [...state.basket, action.item],
            };
          
            //Remove from the basket
         case "REMOVE_FROM_BASKET":
             const index = state.basket.findIndex(
                 (basketItem) => basketItem.id === action.id
             );
             let newBasket = [...state.basket];
 
            if (index >=0) {
                newBasket.splice(index, 1);
            } else {
                console.warn(
                    `Cant remove product (id: ${action.id}) as its not in basket!`
                )
            }

            return{
                ...state,
                basket: newBasket
            }
            case "SET_USER":
                return {
                    ...state,
                    user:action.user
                }



            default:
                return state;      
    }
};
export default reducer;