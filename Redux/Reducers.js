

export const CltReducer=(state={client:[]},action)=>{
    switch(action.type){
        case 'ADD_CLT':
            return{ ...state, client:[...state.client,action.payload]}
        case 'ALL_CLT':
            return {
                ...state, client: action.payload
            }    
        default:
            return state;
    }
}

export const ProdReducer=(state={product:[]},action)=>{
    switch(action.type){
        case 'ADD_PROD':
            return{
                ...state, product:[...state.product,action.payload]
            }
        case 'Update_qty':
            return{
                ...state,
                qty:action.payload
            }    
        case 'ALL_PROD':
            return{
                ...state,product:action.payload
            }    
        default:
            return state;
    }
}
export const DeliverReducer=(state={Deliv:[]},action)=>{
    switch(action.type){
           case "Add_deliver":
               return{
                   ...state, Deliv:[...state.Deliv,action.payload]
               }
               default:
                   return state;
    }

}
 export const CartReducer=(state={Cartitems:[]},action)=>{
    
     switch(action.type){
         case 'ADD_CART':
            const item = action.payload;
            const exist = state.Cartitems.find((x)=>x._id===item._id)
            if(!exist){
                return{
                    ...state, Cartitems:[...state.Cartitems,item]
                }
            }else{
                return{
                    ...state, Cartitems:state.Cartitems.map((x)=>x._id===exist._id ? item : x)    
                 }  
            }
           /* if (action.payload.checkboxvalue){
                console.log("Addd")
                return{
                 ...state, items:[...state.items,action.payload]
                }
            }
            else{
                console.log("Remove")
                
                return{
                        ...state, items: state.items.filter((item)=>item.id !== action.payload.id)
                    }
            }*/
           case 'REMOV':
                return{
                    ...state, Cartitems: state.Cartitems.filter((item)=>item._id !== action.payload) 
                }
            case 'CLEAR':
                    return{
                        Cartitems:[]
                    } 
         default:
             return state;

     }
 }
 
 export const SellReducer=(state={sold:[]},action)=>{
     switch(action.type){
         case 'ADD_SOLD':
             return{
                 ...state, sold:[...state.sold,action.payload]
             }
         case 'ALL_SOLD':
             return{
                 ...state, sold:action.payload
             }    
           

             default:
                 return state;
     }

 }
 export const UserReducer=(state={UserInfo:[]},action)=>{
     switch(action.type){
         case 'SignUp User':
         return{
             ...state, UserInfo:[...state.UserInfo,action.payload]
         }



        default:
            return state;
     }

 }

 export const PaidReducer=(state={Paid:[]},action)=>{
     switch(action.type){
         case 'Paid':
             return{
                 ...state, Paid:[...state.Paid,action.payload]
             }

        default:
            return state;

     }
 }