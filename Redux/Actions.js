import axios from "axios";
export const AddClient=(newclt)=>{
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

export const getAllClients=()=>{
    return async (dispatch)=>{
           fetch('http://192.168.43.119:2000/Clients')
            .then(res=>res.json())
            .then(data=>{
                dispatch({
                    type:'ALL_CLT',
                    payload: data
                 })
            }).catch(err=>console.log(err))
             }
}

export const AddProdt=(newprod)=>{
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
