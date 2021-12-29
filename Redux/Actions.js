
export const AddClient=(newclt)=>{
    newclt.id=Math.random().toString()
    return{
        type:'ADD_CLT',
        payload:newclt
    }
}

export const AddProdt=(newprod)=>{
    newprod.id=Math.random().toString()
    return{
        type:'ADD_PROD',
        payload:newprod
    }
}
export const AddItems=(item, checkboxvalue)=>{
   // item.id=Math.random().toString()
    return{
        type:'ADD_CART',
        payload: {...item ,
            checkboxvalue: checkboxvalue}
    }
}
export const RemoveCart=(id)=>{
    return{
          type:'REMOV',
          payload:id
    }
}