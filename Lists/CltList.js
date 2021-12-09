import React from 'react'
import { View, Text, FlatList } from 'react-native'
import { useSelector } from 'react-redux'

export default function CltList() {
    const {client}=useSelector((state)=>state.cltReducer)
    console.log(client)
    return (
           <View>
{/*client.map((clt,index)=>{
    return(
        
        <Lists key={index} name={clt.fname}/>
    )
})*/}
           
       
        
            <FlatList data={client}  renderItem={({item})=>{
               return(
                  <Lists name={item.fname} numb={item.numberph} adres={item.adress} balan={item.balance} />
                   )
                  
               
            }} keyExtractor={(item)=>item.numberph}   />
            </View>
    )
}
const Lists=({name,numb,adres,balan})=>(

<View style={{marginTop:30,flexDirection:"column"}}>
    <View style={{flexDirection:"row"}}>
        <Text style={{marginLeft:20,fontSize:15}}>Full Name</Text>
        <Text style={{marginLeft:20,fontSize:15}}>Number</Text>
        <Text style={{marginLeft:20,fontSize:15}}>Adress</Text>
        <Text style={{marginLeft:20,fontSize:15}}>Balance</Text>
    </View>
    <View style={{flexDirection:"row"}}>
<Text style={{marginLeft:20,fontSize:15}}>{name}</Text>
<Text style={{marginLeft:20,fontSize:15}}>{numb}</Text>
<Text style={{marginLeft:20,fontSize:15}}>{adres}</Text>
<Text style={{marginLeft:20,fontSize:15}}>{balan}</Text>
</View>
</View>
)
