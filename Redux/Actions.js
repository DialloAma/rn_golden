
export const AddClient=(newclt)=>{
    newclt.id=Math.random().toString()
   /* return{
        type:'ADD_CLT',
        payload:newclt
    }*/
    return async (dispatch)=>{
        
    }
}

export const AddProdt=(newprod)=>{
    newprod.id=Math.random().toString()
    return{
        type:'ADD_PROD',
        payload:newprod
    }
}
export const AddItems=(item,qtysold)=>{
    return{
        type:'ADD_CART',
        payload: {...item ,
           // checkboxvalue:checkboxvalue,  
           qtysold: qtysold
        }
    }
}
export const AddDeliver=(newdel)=>{
    return{
        type:'ADD-DELIV',
        payload: newdel
    }
}
export const RemoveCart=(id)=>{
    return{
          type:'REMOV',
          payload:id
    }
}
export const UpdatQty=(qtysold,id)=>{
    console.log(qtysold)
    return{
        type:'UPQTYSOLD',
        payload: {id:id,
        qtysold:qtysold}
    }
}