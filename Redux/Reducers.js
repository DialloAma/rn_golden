

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
        default:
            return state;
    }
}
export const DeliverReducer=(state={Deliv:[]},action)=>{
    switch(action.type){
           case 'ADD-DELIV':
               return{
                   ...state, Deliv:[...state.Deliv,action.payload]
               }
               default:
                   return state;
    }

}
 export const CartReducer=(state={items:[]},action)=>{
     switch(action.type){
         case 'ADD_CART':
            const item = action.payload;
            const exist = state.items.find((x)=>x.id===item.id)
            if(exist){
                return{
                   ...state, items:state.items.map((x)=>x.id===exist.id ? item : x)    
                } 
            }else{
                return{...state, items:[...state.items,item]}
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
                    ...state, items: state.items.filter((item)=>item.id !== action.payload) 
                }
             
         default:
             return state;

     }
 }