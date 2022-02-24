import axios from "axios";
export const AddClient=(newclt)=>{
   // newclt.id=Math.random().toString();
    return async (dispatch)=>{
      await axios.post('http://192.168.43.119:2000/Clients', newclt)
      .then(res => {
        console.log("Status: ", res.status);
        console.log(res.data);
        dispatch({
            type:'ADD_CLT',
            payload:newclt
         });
      })
      .catch(err => {
        console.log(err.message);
        
      });
    }
}
export const AllClients=()=>{
    return async (dispatch,state)=>{
        await axios.get('http://192.168.43.119:2000/Clients')
        .then(res=>{res.json()})
        .then(data=>{
            console.log(data)
            dispatch({
                type:'ALL_CLT',
                payload: data
            })
        })
           
        
        .catch(err=>console.log(err));
    }
}

export const AddProdt=(newprod)=>{
  /*  newprod.id=Math.random().toString()
    return{
        type:'ADD_PROD',
        payload:newprod
    }*/
    return async (dispatch)=>{
        await axios.post('http://192.168.43.119:2000/Product',newprod)
        .then((res)=>{
             console.log(res.data)
             dispatch({
                type:'ADD_PROD',
                payload:newprod
             })
        })
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