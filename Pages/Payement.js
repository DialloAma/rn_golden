import React, { useState } from 'react';
import {View,Text, StyleSheet, TextInput, TouchableOpacity, ScrollView} from 'react-native';
import { Dropdown } from "react-native-element-dropdown";
import { useSelector } from "react-redux";

const Payement = () => {
    const {client}=useSelector((state)=>state.cltReducer)
     const [clt, setClt] = useState("")
    return (
        <View style={{flex:1 }}>
        <View style={{flex:1.5, alignItems: "center"}}>
          <Text style={{ fontSize: 30, color: "#4aaaa5", fontWeight: "bold" }}>
            Payements
          </Text>
        </View>
        <View  style={{flex:8.5,backgroundColor: "white"}}>
          <ScrollView>
          <View style={{alignItems:"flex-start",marginHorizontal:20}}>
          
            <Text style={{  fontSize: 20, color: "#4aaaa5" }}>
              Client Number
            </Text>
            <Dropdown
              style={styles.input}
      
              selectedTextStyle={{fontSize:20}}
              labelField="numberph"
              valueField="id"
              data={client}
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
          <View>
            <TouchableOpacity activeOpacity={0.5} style={styles.btn} >
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


export default Payement;