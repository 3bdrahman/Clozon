export const initialState={
    cart:[],
    user:null
}
// the selectopr
export const getCartTotal=(cart)=>
    cart?.reduce((amount,item)=>item.price + amount,0);
const reducer= (state,action)=>{
    // console.log(action);
    switch(action.type){
        case 'Add_To_Cart':
            return{
                ...state,
                cart:[...state.cart,action.item],

            }
        case 'Remove_From_Cart':
            const idx= state.cart.findIndex(
                (item)=>item.id === action.id
            )
            let newCart = [...state.cart];
            if(idx>=0){
                newCart.splice(idx,1);
            }else{
                console.log("item not in baske warning")
            }
            return{
                ...state,
                cart: newCart
            }
            case 'Set_User':
                return{
                    ...state,
                    user: action.user
                }
        default:
            return state;    
    }
}

export default reducer