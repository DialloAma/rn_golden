import React, { useState } from "react";
import DatePicker from "react-native-datepicker";
import DateTimePicker from '@react-native-community/datetimepicker';
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
  Button,
} from "react-native";

const Product = () => {
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.prodReducer);
  console.log(product);
  
  const [pname, setPname] = useState("");
  const [qty, setQty] = useState("");
  const [price, setPrice] = useState("");
  const [exdat, setExdat] = useState(new Date());
  const AddProduit = () => {
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
        setExdat(new Date())
      }
  
  };

  return (
    <View style={{flex:1 }}>
      <View style={{flex:1.5, alignItems: "center"}}>
        <Text style={{ fontSize: 35, color: "#4aaaa5", fontWeight: "bold" ,marginTop:10 }}>
          Add Products
        </Text>
      </View>
      <View  style={{flex:8.5,backgroundColor: "white",marginTop:15}}>
        <ScrollView>
        <View style={{alignItems:"flex-start",marginHorizontal:20}}>
          <Text style={{  fontSize: 20, color: "#4aaaa5",marginTop:20 }}>
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
        <View style={{marginHorizontal:20}} >
          <TouchableOpacity
            activeOpacity={0.5}
            style={styles.btn}
            onPress={AddProduit}
          >
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
   marginVertical:50,
   width:"100%"
    
  },
});

export default Product;
