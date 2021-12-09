

export const CltReducer=(state={client:[]},action)=>{
    switch(action.type){
        case 'ADD_CLT':
            return{ ...state, client:[...state.client,action.payload]}
        default:
            return state;
    }
}