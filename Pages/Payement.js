import React, { useEffect, useState } from 'react';
import {View,Text, StyleSheet, TextInput, TouchableOpacity, ScrollView,Alert} from 'react-native';
import { Dropdown } from "react-native-element-dropdown";
import { useDispatch, useSelector } from "react-redux";
import { getAllClients,AddPayements } from '../Redux/Actions';
import axios from "axios";



const Payement = () => {
    const {client}=useSelector((state)=>state.cltReducer)
    const {data}=client
    console.log(data)
     const [numberph, setNumberph] = useState("Veuillez selectionner le numero du client");
     const [amount,setAmount]=useState();
    // const [dte,setDte]=useState(new Date());
    const dte = new Date()
     console.log(dte)
     const dispatch = useDispatch();
     useEffect(() => {
      dispatch(getAllClients())
     }, [dispatch]);
     const AddPayement=()=>{
       if(!amount){
        Alert.alert('Veuillez saisir le monttant du versement')
       }else{
         dispatch(AddPayements(numberph,+amount,dte))
         Alert.alert('Versement effectuer avec succè')
         setNumberph("");
         setAmount("");
        // setDte(new Date())
         
       }
     }
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
              valueField="_id"
              data={data}
              search
              searchPlaceholder="Search..."
             // placeholder="please select a Number"
              value={numberph}
              onChange={(item) => {
                setNumberph(item.numberph);
                console.log(item)
              }}
            />
            <Text style={{  fontSize: 20, color: "#4aaaa5" }}>
              Amount
            </Text>
            <TextInput
              placeholder="Amount"
              keyboardType="numeric"
              style={styles.input}
             value={amount}
              onChangeText={(amount)=>setAmount(amount)}
             />
          </View>
         
          <View style={{marginHorizontal:20}}>
            <TouchableOpacity activeOpacity={0.5} style={styles.btn} onPress={AddPayement}>
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