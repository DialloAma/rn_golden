import { View, Text, TextInput, TouchableOpacity, ScrollView } from "react-native";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddItems } from "../Redux/Actions";

export default function Shopping({navigation}) {
  const { product } = useSelector((state) => state.prodReducer);
  const { items } = useSelector((state) => state.cart);
  console.log("itemesss");
   console.log(items);

  return (
    <View style={{ flex: 1, backgroundColor: "#eee" }}>
      <View style={{ flex: 1 }}></View>
      <View style={{ flex: 8 }}>
          <ScrollView>
        {product.map((item, id) => {
          return (
              <Produt proddata={item} key={id} />
          );
        })}
        </ScrollView>
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
}

const Produt = ({ proddata }) => {
  const [qtysold, setQtysold] = useState();
  const dispatch = useDispatch();
  const cartitems = (proddata,qtysold) => {
    dispatch(AddItems(proddata,qtysold));
    setQtysold();
  };
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
      <View style={{ flexDirection: "column", marginHorizontal: 5 }}>
        <Text
          style={{
            fontSize: 30,
            fontWeight: "bold",
            color: "#4aaaa5",
          }}
        >
          {proddata.pname}
        </Text>
        <Text style={{ fontSize: 15, fontWeight: "500" }}>
          Stock: {proddata.qty}
        </Text>
        <Text style={{ fontSize: 15, fontWeight: "500" }}>
          Price : {proddata.price}
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginVertical: 5,
          }}
        >
        
          <View style={{ flexDirection: "row" }}>
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
              onChangeText={(text) => setQtysold(text)}
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
          <TouchableOpacity
            onPress={() => cartitems(proddata, qtysold)  }
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
        </View>
      </View>
    </View>
  );
};
