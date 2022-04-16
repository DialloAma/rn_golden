import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
  FlatList,
  ActivityIndicator
} from "react-native";
import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddItems, getAllProduct,UpdatQty } from "../Redux/Actions";
import { useEffect } from "react";

export default function Shopping({ navigation }) {
 
  const {product} = useSelector((state)=>state.prodReducer)
  const {data} = product
  const { Cartitems } = useSelector((state) =>state.cart);
 // console.log("itemesss");
 // console.log(Cartitems);
 // const [data, setData] = useState([]);
  const [loading ,setLoading]=useState(true)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProduct());
    setLoading(false)
   /* const getAlldata= async ()=>{
      try {
        const product = await axios.get("http://192.168.43.119:2000/Product");
        setData(product.data);
        setLoading(false)
      //  console.log(product.data)
      } catch (error) {
        console.log(error);
      }
      
    }
    getAlldata();
    fetch("http://192.168.43.119:2000/Product")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false)
      }).catch((error) => console.log(error));*/
  }, [dispatch]);
/// console.log(data);
  return (
    <View style={{ flex: 1, backgroundColor: "#eee" }}>
      <View style={{ flex: 1 }}></View>
      <View style={{ flex: 8 }}>
     
        {loading? <ActivityIndicator size="large" color="#00ff00" />:
       
       ( <FlatList
        data={data}
        renderItem={({item}) => {
          return(
            <Produt itemprod={item} />
          )
        }}
        keyExtractor={(item) => item._id}
      />)
      }
       
       
      </View>
      <View style={{ flex: 1 }}>
        {Cartitems.length > 0 ? (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Cart");
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

const Produt = ({itemprod }) => {
  const { Cartitems } = useSelector((state) =>state.cart);
  const {pname} =Cartitems;
  const [qtysold, setQtysold] = useState();
  const [dte, setDte] = useState(new Date());
  const dispatch = useDispatch();
  
 // console.log(dte)
 
  const Addcartitems = (itemprod, qtysold) => {
    console.log(itemprod.exdat)
    
    if (!qtysold) {
      Alert.alert("please fill up the product quantity field");
      return;
    }  else{
      dispatch(AddItems(itemprod, qtysold));
      setQtysold();
    }
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
          {itemprod.pname}
        </Text>
        <Text style={{ fontSize: 15, fontWeight: "500" }}>
          Stock: {itemprod.qty}
        </Text>
        <Text style={{ fontSize: 15, fontWeight: "500" }}>
          Price : {itemprod.price}
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
           {  qtysold > itemprod.qty  ? (<Text></Text> )  :(

                <TouchableOpacity
                  onPress={() => Addcartitems(itemprod, qtysold)}
                  style={{
                    backgroundColor: "#4aaaa5",
                    alignItems: "center",
                    padding: 10,
                    marginHorizontal: 15,
                  }}
                 // disabled={dte > itemprod.exdat ? true : false}
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
                  
           )

           }
          
        
        </View>
      </View>
    </View>
  );
};
