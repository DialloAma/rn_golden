import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import AutocompleteInput from "react-native-autocomplete-input";
import { Dropdown } from "react-native-element-dropdown";
import { useSelector } from "react-redux";

const Delivery = () => {
  const { product } = useSelector((state) => state.prodReducer);
  const names = product.map((item) => item.pname);
  console.log(product);
  const [prod, setProd] = useState("");
  const [qty, setQty] = useState(0);
  const [price, setPrice] = useState(0);
  const [amou, setAmou] = useState(0);
  const calcul=()=>{
    if(qty && price){
     setAmou(  parseInt(qty)*parseInt(price))
    }else{

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
          <Dropdown
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
          />
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
          <TextInput
            placeholder="Amount"
            keyboardType="numeric"
           caretHidden={true}
            style={styles.input}
            
            value={amou}
           // onChangeText={(amou)=>calcul(amou)}
           // onChangeText={()=>setAmou({ amou: (qty&&price)? parseInt(qty)*parseInt(price): null}) }
          />
            <Text style={{fontSize:25,alignItems:"center"}}>{amou}</Text>
        </View>
        <View>
          <TouchableOpacity activeOpacity={0.5} style={styles.btn} onPress={calcul}>
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
