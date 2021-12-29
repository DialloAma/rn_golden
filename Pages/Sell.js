import React, { useState } from 'react';
import {View, StyleSheet, Text, ScrollView, TextInput} from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { AddItems } from '../Redux/Actions';
import Viewcart from '../Components/ViewCart';

import { useDispatch, useSelector } from 'react-redux'

const Sell = () => {
     const [checkboxvalue, setCheckboxvalue] = useState(false)
    const dispatch= useDispatch()
   
    const {product}= useSelector((state)=>state.prodReducer)
  const {items} =useSelector((state)=>state.cart)
  console.log("itemesss")
    console.log(items)
    
   
    const cartitems=(item,checkboxvalue)=> {
        dispatch(AddItems(item,checkboxvalue))
    }
    return (
        <View style={{flex:1,backgroundColor:'#eee'}}>
            <View style={{flex:1}}>

            </View>
            <View style={{flex:8}}>
            <ScrollView>
                {product.map((item,index)=>{
                    return(
                       
                           
                        <View key={index} style={{backgroundColor:'white',alignItems:'center',marginHorizontal:50,marginVertical:5,borderRadius:20,flexDirection:"row"}}>
                            <BouncyCheckbox fillColor='#4aaaa5' style={{borderRadius:50,marginLeft:5}}
                           //isChecked={checkboxvalue}
                            onPress={(checkboxvalue)=>{cartitems(item,checkboxvalue)}}
                            />
                            <View>
                            <Text style={{fontSize:30,fontWeight:"bold",color:"#4aaaa5" }}>{item.pname}</Text>
                            <Text style={{fontSize:15,fontWeight:"500"}}> Stock: {item.qty}</Text>
                            <Text style={{fontSize:15,fontWeight:"500"}}> Price : {item.price}</Text>
                          
                            </View>
                           
                            
                        </View>
                        
                    )
                })}
            </ScrollView>
            </View>
            <View style={{flex:1}}>
                 {
                     items.length > 0 ? <Viewcart/> : null
                 }
                
            </View>
        </View>
    );
}

const styles = StyleSheet.create({})

export default Sell;
