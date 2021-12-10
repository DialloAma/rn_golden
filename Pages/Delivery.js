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
const data = [
  { label: 'Item 1', value: '1' },
  { label: 'Item 2', value: '2' },
  { label: 'Item 3', value: '3' },
  { label: 'Item 4', value: '4' },
  { label: 'Item 5', value: '5' },
  { label: 'Item 6', value: '6' },
  { label: 'Item 7', value: '7' },
  { label: 'Item 8', value: '8' },
];
const Delivery = () => {
  const { product } = useSelector((state) => state.prodReducer);
  const names = product.map((item) => item.pname);
  console.log(product);
  const [prod, setProd] = useState("");
  return (
    <View
      style={{ marginTop: 30, backgroundColor: "white", marginHorizontal: 25 }}
    >
      <View style={{ alignItems: "center", marginTop: 30 }}>
        <Text style={{ fontSize: 30, color: "#4aaaa5", fontWeight: "bold" }}>
          Products Delivery
        </Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ marginTop: 30 }}>
        
          <Text style={{ marginLeft: 30, fontSize: 20, color: "#4aaaa5" }}>
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
          <Text style={{ marginLeft: 30, fontSize: 20, color: "#4aaaa5" }}>
            Quantity
          </Text>
          <TextInput
            placeholder="Quantity"
            keyboardType="numeric"
            style={styles.input}
          />
          <Text style={{ marginLeft: 30, fontSize: 20, color: "#4aaaa5" }}>
            Price
          </Text>
          <TextInput
            placeholder="Price"
            keyboardType="numeric"
            style={styles.input}
          />
          <Text style={{ marginLeft: 30, fontSize: 20, color: "#4aaaa5" }}>
            Amout
          </Text>
          <TextInput
            placeholder="Amount"
            keyboardType="numeric"
            caretHidden={true}
            style={styles.input}
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

export default Delivery;
