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
import { AddDeliver,getAllProduct } from "../Redux/Actions"; 


const Delivery = () => {
  const { product } = useSelector((state) => state.prodReducer);
  const {data} = product
  const { Deliv } = useSelector((state) => state.deliv);
  const dispatch=useDispatch();
  const [pname, setPname] = useState("");
  const [qty, setQty] = useState("");
  const [price, setPrice] = useState("");
  const [amou, setAmou] = useState(0);
  const [dat,setDat]=useState(new Date())
  
  useEffect(()=>{
    dispatch(getAllProduct())
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
      dispatch(AddDeliver(pname,+qty,price,amou,dat))
      Alert.alert(`${pname} has been added successfully`);
      setPname("");
      setQty("");
      setPrice("");
      setAmou("");
    }
  }
  return (
    <View style={{flex:1 }}>
      <View style={{flex:1.5, alignItems: "center"}}>
        <Text style={{ fontSize: 40, color: "#4aaaa5", fontWeight: "bold",marginTop:10 }}>
          Products Delivery
        </Text>
      </View>
      <View  style={{flex:8.5,backgroundColor: "white"}}>
        <ScrollView>
        <View style={{alignItems:"flex-start",marginHorizontal:20}}>
        
          <Text style={{  fontSize: 20, color: "#4aaaa5",marginTop:20 }}>
            Product Name
          </Text>
          
          
         {/* <Picker  mode="dropdown" style={{height:50 ,width:"100%",backgroundColor:"#4aaaa5" ,color:"white",fontSize:20,padding:15}}  selectedValue={prod} onValueChange={(itemValue) => setProd(itemValue)}>
          
               {product.map((item,index)=>{
                 return(
                  <Picker.Item style={styles.input} label={item.pname} value={item.pname} key={index}/>
                 )
                })}
              </Picker>*/}
          <Dropdown
            style={styles.input}
            selectedTextStyle={{ fontSize: 25 }}
            labelField="pname"
            valueField="_id"
            data={data}
            search
            searchPlaceholder="Search..."
            placeholder="please select a product"
            value={pname}
             onChange={(item) => {
              setPname(item.pname);
             
              
            }}
          />
          
          <Text style={{ fontSize: 20, color: "#4aaaa5" }}>
            Quantity
          </Text>
          <TextInput
            placeholder="Quantity"
            keyboardType="numeric"
            style={styles.input}
            value={qty}
            onChangeText={(text)=>setQty(text)}
          />
          <Text style={{  fontSize: 20, color: "#4aaaa5" }}>
            Price
          </Text>
          <TextInput
            placeholder="Price"
            keyboardType="numeric"
            style={styles.input}
           value={price}
            onChangeText={(text)=>setPrice(text)}
          />
        
          <Text style={{  fontSize: 20, color: "#4aaaa5" }}>
            Amount
          </Text>
          <Text style={styles.input}>{amou}</Text>
          <TextInput value={dat} onChangeText={(text)=>setDat(text)}  />
        </View>
        <View style={{marginHorizontal:20}}>
          <TouchableOpacity activeOpacity={0.5} style={styles.btn} onPress={Add} >
            <Text style={{ fontSize: 30, color: "white", fontWeight: "bold" }}>
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
    fontSize: 25,
    borderRadius: 15,
  },
  btn: {
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
    backgroundColor: "#4aaaa5",
    borderRadius: 15,
   marginVertical:25,
   width:"100%"
    
  },
});

export default Delivery;
