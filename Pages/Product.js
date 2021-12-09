import React, { useState } from "react";
import DatePicker from "react-native-datepicker";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";

const Product = () => {
  const [pname, setPname] = useState("");
  const [qty, setQty] = useState("0");
  const [price, setPrice] = useState("0");
  const [exdat, setExdat] = useState("");

  return (
    <View
      style={{ marginTop: 30, backgroundColor: "white", marginHorizontal: 25 }}
    >
      <View style={{ alignItems: "center", marginTop: 30 }}>
        <Text style={{ fontSize: 30, color: "#4aaaa5", fontWeight: "bold" }}>
          Add Products
        </Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ marginTop: 30 }}>
          <Text style={{ marginLeft: 30, fontSize: 20, color: "#4aaaa5" }}>
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
          <Text style={{ marginLeft: 30, fontSize: 20, color: "#4aaaa5" }}>
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
          <Text style={{ marginLeft: 30, fontSize: 20, color: "#4aaaa5" }}>
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
           <Text style={{ marginLeft: 30, fontSize: 20, color: "#4aaaa5" }}>
            Expiration Date
          </Text>

          <DatePicker
         
         style={{ width: 350 }}
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
                dateInput:{
                    marginLeft:20,
                    height:60,
                    
                    marginTop:30,
                   borderColor: "#4aaaa5",
                   borderRadius:20,
                   borderWidth: 1,
                  
                   
                 },
                
                 dateText:{
                     fontSize:20,
                     
                     
                 },
                 placeholderText:{
                     fontSize:20,
                     
                 },
                 dateIcon:{
                   top:15
                 }
                
                
                   

                    
            }}
          />
        </View>
        <View>
          <TouchableOpacity activeOpacity={0.5} style={styles.btn}>
            <Text style={{ fontSize: 25, color: "white", fontWeight: "bold" }}>
              Valider
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    marginHorizontal: 20,
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
    marginHorizontal: 80,
    borderRadius: 20,
    marginTop: 40,
    marginBottom: 30,
  },
});

export default Product;
