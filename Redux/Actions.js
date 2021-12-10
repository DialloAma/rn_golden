
export const AddClient=(newclt)=>{
   // newclt.id=Math.random()
    return{
        type:'ADD_CLT',
        payload:newclt
    }
}

export const AddProdt=(newprod)=>{
    newprod.id=Math.random().toString
    return{
        type:'ADD_PROD',
        payload:newprod
    }
}