import React, { useEffect, useState } from 'react';
import {View,Text, StyleSheet, TextInput, TouchableOpacity, ScrollView} from 'react-native';
import { Dropdown } from "react-native-element-dropdown";
import { useDispatch, useSelector } from "react-redux";
import { AllClients } from '../Redux/Actions';
import axios from "axios";

const Payement = () => {
    const {client}=useSelector((state)=>state.cltReducer)
    console.log(client);
     const [clt, setClt] = useState([]);
     const dispatch = useDispatch();
     useEffect(() => {
       /*fetch('http://192.168.43.119:2000/Clients')
       .then(res=>res.json())
       .then(result=>{
         setClt(result);
         console.log(result)
       })
      async function getAllclt(){
        const result= await axios.get('http://192.168.43.119:2000/Clients');
        console.log(result.data);
        setClt(result.data);
      }
      getAllclt();*/
      dispatch(AllClients())
     }, [dispatch]);
    return (
        <View style={{flex:1 }}>
        <View style={{flex:1, alignItems: "center"}}>
          <Text style={{ fontSize: 30, color: "#4aaaa5", fontWeight: "bold",marginTop:20 }}>
            Payements
          </Text>
        </View>
        <View  style={{flex:9,backgroundColor: "white",marginTop:20}}>
          <ScrollView>
          <View style={{alignItems:"flex-start",marginHorizontal:20,marginTop:20}}>
          
            <Text style={{  fontSize: 20, color: "#4aaaa5" }}>
              Client Number
            </Text>
            <Dropdown
              style={styles.input}
      
              selectedTextStyle={{fontSize:25}}
              labelField="numberph"
              valueField="id"
              data={clt}
              search
              searchPlaceholder="Search..."
              placeholder="please select a Number"
              value={clt}
              onChange={(item) => {
                setClt(item.value);
                console.log(item)
              }}
            />
            <Text style={{ fontSize: 20, color: "#4aaaa5" }}>
              Payed
            </Text>
            <TextInput
              placeholder="Quantity"
              keyboardType="numeric"
              style={styles.input}
            //  value={}
             // onChangeText={}
            />
            <Text style={{  fontSize: 20, color: "#4aaaa5" }}>
              Amount
            </Text>
            <TextInput
              placeholder="Amount"
              keyboardType="numeric"
             caretHidden={true}
              style={styles.input}
            //  value={}
             // onChangeText={}
             />
          </View>
          <View style={{marginHorizontal:20}}>
            <TouchableOpacity activeOpacity={0.5} style={styles.btn} >
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
      width:"100%",
      borderRadius: 15,
     marginVertical:50
      
    },
  });


export default Payement;