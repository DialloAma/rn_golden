import React, { useState } from "react";
import DatePicker from "react-native-datepicker";
import { AddProdt } from "../Redux/Actions";
import { useDispatch, useSelector } from "react-redux";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";

const Product = () => {
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.prodReducer);
  console.log(product);
  
  const [pname, setPname] = useState("");
  const [qty, setQty] = useState("");
  const [price, setPrice] = useState("");
  const [exdat, setExdat] = useState("");

  const AddProduit = () => {
    //let names = product.map((item) => item.pname);
      for(let i=0; i < product.length; i++){
      if(product[i].pname === pname){
        Alert.alert("this product alredy exists,please change the name of the product")
        break;
      }
    }
   if (!pname) {
        Alert.alert("please fill up the product name field");
        return;
      } else if (!qty) {
        Alert.alert("please fill up the product quantity field");
      } else if (!qty) {
        Alert.alert("please fill up the product price field");
      } else if (!exdat) {
        Alert.alert("please fill up the expiration date of the product price");
      } else {
        dispatch(AddProdt({ pname, qty, price, exdat }));
        Alert.alert(`${pname} has been added successfully`);
        setPname("");
        setQty("");
        setPrice("");
        setExdat("")
      }
  
  };

  return (
    <View style={{flex:1 }}>
      <View style={{flex:1.5, alignItems: "center"}}>
        <Text style={{ fontSize: 30, color: "#4aaaa5", fontWeight: "bold" }}>
          Add Products
        </Text>
      </View>
      <View  style={{flex:8.5,backgroundColor: "white"}}>
        <ScrollView>
        <View style={{alignItems:"flex-start",marginHorizontal:20}}>
          <Text style={{  fontSize: 20, color: "#4aaaa5" }}>
            Product Name
          </Text>
          <TextInput
            placeholder="Product Name"
            autoCapitalize="words"
            style={styles.input}
            value={pname}
            onChangeText={(pname) => {
              setPname(pname);
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
            onChangeText={(qty) => {
              setQty(qty);
            }}
          />
          <Text style={{  fontSize: 20, color: "#4aaaa5" }}>
            Price
          </Text>
          <TextInput
            placeholder="Price"
            keyboardType="numeric"
            style={styles.input}
            value={price}
            onChangeText={(price) => {
              setPrice(price);
            }}
          />
          <Text style={{  fontSize: 20, color: "#4aaaa5" }}>
            Expiration Date
          </Text>

          <DatePicker
            style={{ width: '80%' }}
            date={exdat}
            mode="date"
            onDateChange={(exdat) => {
              setExdat(exdat);
            }}
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            format="DD-MM-YYYY"
            placeholder="select date"
            customStyles={{
              dateInput: {
               height: 60,
               marginTop: 30,
                borderColor: "#4aaaa5",
                borderRadius: 20,
                borderWidth: 1,
              },

              dateText: {
                fontSize: 20,
              },
              placeholderText: {
                fontSize: 20,
              },
              dateIcon: {
                top: 15,
              },
            }}
          />
        </View>
        <View >
          <TouchableOpacity
            activeOpacity={0.5}
            style={styles.btn}
            onPress={AddProduit}
          >
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

export default Product;
