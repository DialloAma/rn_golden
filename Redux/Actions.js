
export const AddClient=(newclt)=>{
   // newclt.id=Math.random()
    return{
        type:'ADD_CLT',
        payload:newclt
    }
}