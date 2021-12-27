import React from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';

import { useSelector } from 'react-redux'

const Sell = () => {
    const {product}= useSelector((state)=>state.prodReducer)
    return (
        <View style={{flex:1,backgroundColor:'#eee'}}>
            <View style={{flex:1}}>

            </View>
            <View style={{flex:9}}>
            <ScrollView>
                {product.map((item,index)=>{
                    return(
                        <View key={index} style={{backgroundColor:'white',alignItems:'center',marginHorizontal:50,marginVertical:5,borderRadius:20}}>
                            
                            <Text style={{fontSize:30,fontWeight:"bold",color:"#4aaaa5" }}>{item.pname}</Text>
                            <Text style={{fontSize:15,fontWeight:"500"}}> Stock: {item.qty}</Text>
                            <Text style={{fontSize:15,fontWeight:"500"}}> Price : {item.price}</Text>
                           

                        </View>
                    )
                })}
            </ScrollView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({})

export default Sell;
