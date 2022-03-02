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
    return async (dispatch)=>{
        
            fetch('http://192.168.43.119:2000/Clients')
            .then(res=>res.json())
            .then(result=>{
                dispatch({
                    type:'ALL_CLT',
                    payload: result
                 })
            }).catch(err=>console.log(err))
          /*  const result= await axios.get('http://192.168.43.119:2000/Clients')
            console.log(result.data)
            dispatch({
             type:'ALL_CLT',
             payload: result.data
            })*/
            
        
      
        

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
export const getAllProduct=()=>{
    return async(dispatch)=>{
        fetch('http://192.168.43.119:2000/Product')
        .then(res=>res.json())
        .then(data=>{
            dispatch({
                type:'ALL_PROD',
                payload:data
            })
        }).catch (error=>console.log(error))
       

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
   /* return async (dispatch,getState)=>{
          // const {data} = await axios.get(`http://192.168.43.119:2000/Product/${itemid}`);
          const {data} = await axios.get("http://192.168.43.119:2000/Product");
           console.log(data)
           const {cart : {Cartitems}} =getState();
           dispatch({
            type:'ADD_CART',
            payload: {
                id : data._id,
                pname:data.pname,
                price:data.price, 
                qtysold: qtysold
             }
           })
    }*/
}
export const UpdatQty=(qtysold,id)=>{
    return{
        type:'UPQTYSOLD',
        payload: {
            id,
          qtysold:qtysold
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
