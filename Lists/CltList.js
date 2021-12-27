import React from 'react'
import { View, Text, FlatList } from 'react-native'
import { useSelector } from 'react-redux'

export default function CltList() {
    const {client}=useSelector((state)=>state.cltReducer)
    console.log(client)
    return (
           <View style={{flex:1}}>
{/*client.map((clt,index)=>{
    return(
        
        <Lists key={index} name={clt.fname}/>
    )
})*/}
           
           <View style={{flexDirection:"row",borderBottomWidth:1,marginTop:20}}>
        <Text style={{marginLeft:20,fontSize:15,flex:1}}>Full Name</Text>
        <Text style={{marginLeft:20,fontSize:15,flex:1}}>Number</Text>
        <Text style={{marginLeft:20,fontSize:15,flex:1}}>Adress</Text>
        <Text style={{marginLeft:20,fontSize:15,flex:1}}>Balance</Text>
        <Text style={{marginLeft:20,fontSize:15,flex:1}}>Action</Text>
    </View>
        
            <FlatList data={client}  renderItem={({item})=>{
               return(
                  <Lists name={item.fname} numb={item.numberph} adres={item.adress} balan={item.balance} />
                   )
                  
               
            }} keyExtractor={(item)=>item.numberph}   />
            </View>
    )
}
const Lists=({name,numb,adres,balan})=>(


  
    <View style={{flexDirection:"row",borderBottomWidth:1}}>
<Text style={{marginLeft:20,fontSize:15}}>{name}</Text>
<Text style={{marginLeft:20,fontSize:15}}>{numb}</Text>
<Text style={{marginLeft:20,fontSize:15}}>{adres}</Text>
<Text style={{marginLeft:20,fontSize:15}}>{balan}</Text>
</View>

)
