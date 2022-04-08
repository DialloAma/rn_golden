import React,{useEffect} from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  FlatList,
  Alert,
} from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { MaterialIcons } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RemoveCart, getAllClients,sell,ClearCart } from "../Redux/Actions";
import { useState } from "react";

export default function ViewCart() {
  const { Cartitems } = useSelector((state) => state.cart);
 // const [qsold,setQsold]=useState(Cartitems.qtysold)
  const dispatch = useDispatch();
  const { client } = useSelector((state) => state.cltReducer);
  const {sold}= useSelector((state)=>state.sell)
  const {data}=client
  console.log("sold out" +sold)
  const [numberph, setNumberph] = useState("");
  const [paid,setPaid] = useState("");
  const [balan,setBalan] = useState("0");
  const [dat,setDat] = useState(new Date());
  const amount= Cartitems.reduce((a, b) => a + parseInt(b.qtysold* b.price), 0)

 useEffect(() => {
   dispatch(getAllClients())
   if(!paid){
     setBalan(0)
   } else if(amount===0){
    setBalan(0)
    setPaid("")
   }
   else{
    const res= parseInt(amount)-parseInt(paid) 
    setBalan(res)
   }
   
}, [paid,balan,amount,dispatch]);

const checkout=()=>{
 dispatch(sell({...Cartitems, buyitems:Cartitems,numberph,amount,paid,balan,dat}))
 Alert.alert( "has been added successfully");
 dispatch(ClearCart())
 setBalan("")
}

  return (
    <View style={{ flex: 1, marginHorizontal: 20 }}>
     

      
      <View style={{ flex: 5, marginVertical: 20 }}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={Cartitems}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => {
            return (
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginVertical: 5,
                }}
              >
                <View style={{ flex: 5 }}>
                  <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                    {item.pname}
                  </Text>
                </View>
                <View style={{ flex: 2 }}>
                  <Text style={{ fontSize: 20, fontWeight: "bold" }}>{item.qtysold} </Text>
                </View>
                <View style={{ flex: 2, alignItems: "center" }}>
                  <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                    {item.price}
                  </Text>
                </View>
                <View style={{ flex: 1 }}>
                  <TouchableOpacity onPress={() => dispatch(RemoveCart(item._id))}>
                    <MaterialIcons
                      name="delete"
                      size={24}
                      color="red"
                      style={{ alignItems: "center" }}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            );
          }}
        />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{ flex: 4, marginHorizontal: 20 }}>
        
          <Text style={{ fontSize: 20, color: "#4aaaa5" }}>
            Client Phone Number
          </Text>
          <Dropdown
           style={styles.input}
            selectedTextStyle={{ fontSize: 20 }}
            labelField="numberph"
            valueField="_id"
            data={data}
            search
            searchPlaceholder="Search..."
            placeholder="please select a Number"
            value={numberph}
            onChange={(item) => {
              setNumberph(item.numberph);
            }}
          ></Dropdown>
          <Text style={{ fontSize: 20, color: "#4aaaa5" }}>Payed</Text>
          <TextInput
            keyboardType="numeric"
            value={paid}
            onChangeText={(paid)=>setPaid(paid)}
            style={styles.input}
          />
          <Text style={{ fontSize: 20, color: "#4aaaa5" }}>Balance</Text>
          <Text style={styles.input} >{balan}</Text>
        {/* <TextInput
            keyboardType="numeric"
            
            value={balan}
            onChangeText={(balan)=>setPay(balan)}
            style={{
              borderWidth: 1,
              borderColor: "#4aaaa5",
              padding: 5,
              fontSize: 20,
              color: "#4aaaa5",
            }}
          />*/}
        
      </View>
      <View style={{ flex: 1,marginVertical: 20,marginTop:5 }}>
        <View style={{  marginHorizontal: 20,marginTop:5}}>
        <Text style={{fontSize:25}} >Number of Items : {Cartitems.reduce((a, b) => a + parseInt(b.qtysold), 0)}</Text>
        <Text style={{fontSize:25}}>TOTAL : {amount}</Text>
        </View>
        
        <TouchableOpacity
          style={{
            backgroundColor: "#4aaaa5",
            alignItems: "center",
            padding: 10,
            marginVertical: 20,
            marginHorizontal: 20,
          }}
          onPress={checkout}
        >
          <Text style={{ color: "white", fontSize: 20 }}>Check Out</Text>
        </TouchableOpacity>
      </View>
      </ScrollView>
      
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    width: "100%",
    marginVertical: 5,
    borderWidth: 1,
    borderColor: "#4aaaa5",
    padding: 15,
    fontSize: 20,
    borderRadius: 20,
  },
  input: {
   color: "black",
    width:'100%',
    marginVertical: 3,
    borderWidth: 1,
    borderColor: "#4aaaa5",
    padding: 10,
    fontSize: 20,
    borderRadius: 15,
  }
});
