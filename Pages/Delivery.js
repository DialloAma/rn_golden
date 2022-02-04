import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import AutocompleteInput from "react-native-autocomplete-input";
import { Dropdown } from "react-native-element-dropdown";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { AddDeliver } from "../Redux/Actions"; 

const Delivery = () => {
  const { product } = useSelector((state) => state.prodReducer);
  const names = product.map((item) => item.pname);
  const { Deliv } = useSelector((state) => state.deliv);
  console.log(Deliv);
  const dispatch=useDispatch();
  console.log(product);
  const [prod, setProd] = useState();
  const [qty, setQty] = useState(0);
  const [price, setPrice] = useState(0);
  const [amou, setAmou] = useState(0);
  useEffect(()=>{
    if(!qty || !price){
      setAmou(0)
    }else{
      const res= parseInt(qty)*parseInt(price)
      setAmou(res)
    }
 
  },[qty,price])
  const Add=()=>{
   /* if (!prod) {
      Alert.alert("please fill up the product name field");
      return;
    } else */ if (!qty) {
      Alert.alert("please fill up the product quantity field");
    } else if (!price) {
      Alert.alert("please fill up the product price field");
    }else{
      dispatch(AddDeliver({prod,qty,price,amou}))
      Alert.alert(`${prod} has been added successfully`);
      setProd("");
      setQty("");
      setPrice("");
      setAmou("");
    }
  }
  return (
    <View style={{flex:1 }}>
      <View style={{flex:1.5, alignItems: "center"}}>
        <Text style={{ fontSize: 30, color: "#4aaaa5", fontWeight: "bold" }}>
          Products Delivery
        </Text>
      </View>
      <View  style={{flex:8.5,backgroundColor: "white"}}>
        <ScrollView>
        <View style={{alignItems:"flex-start",marginHorizontal:20}}>
        
          <Text style={{  fontSize: 20, color: "#4aaaa5" }}>
            Product Name
          </Text>
          
          <Picker placeholder="please select a product" mode="Dropdown" style={styles.input} selectedValue={prod} onValueChange={(itemValue) => setProd(itemValue)}>
          <Picker.Item style={styles.input} label="Please select a Product" />
               {product.map((item,index)=>{
                 return(
                 

                   <Picker.Item  style={styles.input} label={item.pname} value={item.pname} key={index}/>
                   )
                 
               })}
          </Picker>
          {/*<Dropdown
            style={styles.input}
            selectedTextStyle={{fontSize:20}}
            labelField="pname"
            valueField="id"
            data={product}
            search
            searchPlaceholder="Search..."
            placeholder="please select a product"
            value={prod}
            onChange={(item) => {
              setProd(item.value);
              console.log(item)
            }}
          />*/}
          <Text style={{ fontSize: 20, color: "#4aaaa5" }}>
            Quantity
          </Text>
          <TextInput
            placeholder="Quantity"
            keyboardType="numeric"
            style={styles.input}
            value={qty}
            onChangeText={(qty)=>setQty(qty)}
          />
          <Text style={{  fontSize: 20, color: "#4aaaa5" }}>
            Price
          </Text>
          <TextInput
            placeholder="Price"
            keyboardType="numeric"
            style={styles.input}
           value={price}
            onChangeText={(price)=>setPrice(price)}
          />
        
          <Text style={{  fontSize: 20, color: "#4aaaa5" }}>
            Amount
          </Text>
          <Text style={styles.input}>{amou}</Text>
        </View>
        <View>
          <TouchableOpacity activeOpacity={0.5} style={styles.btn} onPress={Add} >
            <Text style={{ fontSize: 25, color: "white", fontWeight: "bold" }}>
              Valider
            </Text>
          </TouchableOpacity>
        </View>
        </ScrollView>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
   
    width:'100%',
    marginVertical: 5,
    borderWidth: 1,
    borderColor: "#4aaaa5",
    padding: 15,
    fontSize: 20,
    borderRadius: 20,
  },
  btn: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: "#4aaaa5",
    marginHorizontal: 100,
    borderRadius: 20,
   marginVertical:50
    
  },
});

export default Delivery;
