

export const CltReducer=(state={client:[]},action)=>{
    switch(action.type){
        case 'ADD_CLT':
            return{ ...state, client:[...state.client,action.payload]}
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
 export const CartReducer=(state={items:[]},action)=>{
     switch(action.type){
         case 'ADD_CART':
            if (action.payload.checkboxvalue){
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
                }
              
            
             
         default:
             return state;

     }
 }