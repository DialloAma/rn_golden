import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { AddItems } from "../Redux/Actions";
import Viewcart from "../Components/ViewCart";
import { useDispatch, useSelector } from "react-redux";
const Sell = ({ navigation }) => {
  const [qtysold,setQtysold]=useState(1)
  
 const dispatch = useDispatch();
  const { product } = useSelector((state) => state.prodReducer);
  const { items } = useSelector((state) => state.cart);
 console.log("itemesss");
  console.log(items);
  console.log(qtysold);
const cartitems = (item,checkboxvalue,qtysold) => {
    dispatch(AddItems(item,checkboxvalue,qtysold));
  };
  return (
    <View style={{ flex: 1, backgroundColor: "#eee" }}>
      <View style={{ flex: 1 }}></View>
      <View style={{ flex: 8 }}>
        <FlatList showsVerticalScrollIndicator={false} data={product} keyExtractor={(item)=>item.id} renderItem={({item})=>{
          return (
            <View
              style={{
                backgroundColor: "white",
                alignItems: "center",
                marginHorizontal: 50,
                marginVertical: 5,
                borderRadius: 20,
                flexDirection: "row",
              }}
            >
             <BouncyCheckbox fillColor='#4aaaa5' style={{borderRadius:50,marginLeft:5}}
                          
                          onPress={(checkboxvalue)=>{cartitems(item,checkboxvalue,qtysold)}}
                  />     
                  <TextInput value={qtysold} onChangeText={(qtysold)=>{setQtysold(qtysold)}} />
              <View style={{ flexDirection: "column", marginHorizontal: 5 }}>
                <Text
                  style={{
                    fontSize: 30,
                    fontWeight: "bold",
                    color: "#4aaaa5",
                  }}
                >
                  {item.pname}
                </Text>
                <Text style={{ fontSize: 15, fontWeight: "500" }}>
                  Stock: {item.qty}
                </Text>
                <Text style={{ fontSize: 15, fontWeight: "500" }}>
                  Price : {item.price}
                </Text>
              {/* <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    marginVertical: 5,
                  }}
                  
                >
                  <Cart qtysold={qtysold} onchange={(qtysold)=>setQtysold(qtysold)}   />
                  

                  <TouchableOpacity
                  onPress={()=>cartitems(item,qtysold)}
                    style={{
                      backgroundColor: "#4aaaa5",
                      alignItems: "center",
                      padding: 10,
                      marginHorizontal: 15,
                    }}
                  >
                    <Text
                      style={{
                        color: "white",
                        fontSize: 15,
                        fontWeight: "bold",
                      }}
                    >
                      ADD
                    </Text>
                  </TouchableOpacity>
                </View>*/}
              </View>
            </View>
          );
        }}/>
        
      </View>
      <View style={{ flex: 1 }}>
        {items.length > 0 ? (
          <TouchableOpacity
            onPress={() => {
             navigation.navigate("Cart")
              
            }}
            style={{
              alignItems: "center",
              justifyContent: "center",
              padding: 10,
              backgroundColor: "#4aaaa5",
              marginHorizontal: 100,
              borderRadius: 20,
              //marginVertical: 5,
            }}
          >
            <Text style={{ fontSize: 25, color: "white", fontWeight: "bold" }}>
              View Cart
            </Text>
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  );
};
 const Cart =({qtysold, onchange})=>{
  
  
   return(
     <View style={{flexDirection:"row"}}>
           <Text
    style={{
      fontSize: 20,
      fontWeight: "bold",
      color: "#4aaaa5",
    }}
  >
    Quantity : 
  </Text>
  <TextInput
    value={qtysold}
    onChangeText={(text) => onchange(text)}
    keyboardType="numeric"
    style={{
      borderWidth: 1,
      borderColor: "#4aaaa5",
      padding: 5,
      fontSize: 20,
      color: "#4aaaa5",
      width: 100,
    }}
  />
     </View>
   
   )
 }

const styles = StyleSheet.create({});

export default Sell;
