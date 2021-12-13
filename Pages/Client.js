import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
  KeyboardAvoidingView,
} from "react-native";
import { AddClient } from "../Redux/Actions";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "react-redux";

const Client = (props) => {
    const dispatch =useDispatch();
    const {client}=useSelector((state)=>state.cltReducer)
    console.log(client)
  const [fname, setFname] = useState("");
  const [numberph, setNumberph] = useState("");
  const [adress, setAdress] = useState("");
  const [balance, setBalance] = useState('0');
  const AddClt=()=>{
    if(!fname){
      Alert.alert("please fill up the client name field") 
      return
    }else if(!numberph){
      Alert.alert("please fill up the client phone number field")
    }else if(!adress){
      Alert.alert("please fill up the client address field")
    }else{
      
       dispatch(AddClient( {fname,numberph,adress,balance}))
     //  props.add(newclt)
      Alert.alert(`${fname} has been added successfully`)
      setAdress("");
    setFname("");
    setNumberph("");
    }
    
  
  }
  return (
    <View style={{flex:1 }}>
      <View style={{flex:1.5, alignItems: "center"}}>
        <Text style={{ fontSize: 30, color: "#4aaaa5", fontWeight: "bold" }}>
          Add Clients
        </Text>
      </View>
      <View  style={{flex:8.5,backgroundColor: "white"}}>
        <ScrollView>
        <View style={{alignItems:"flex-start",marginHorizontal:20}}>
          <Text style={{  fontSize: 20, color: "#4aaaa5" }}>
            Full Name
          </Text>
          <TextInput
            placeholder="Full Name"
            autoCapitalize="words"
            value={fname}
            onChangeText={(fname) => {
              setFname(fname);
             
            }}
            style={styles.input}
          />
          <Text style={{  fontSize: 20, color: "#4aaaa5" }}>
            Phone Number
          </Text>
          <TextInput
            placeholder="Phone Number"
            keyboardType="numeric"
            value={numberph}
            onChangeText={(numberph) => {
              setNumberph(numberph);
            }}
            style={styles.input}
          />
          <Text style={{  fontSize: 20, color: "#4aaaa5" }}>
            Adress
          </Text>
          <TextInput
            placeholder="Adress"
            autoCapitalize="words"
            value={adress}
            onChangeText={(adress) => {
              setAdress(adress);
            }}
            style={styles.input}
          />
          <TextInput
            placeholder="balance"
            keyboardType="numeric"
            value={balance}
            onChangeText={(balance) => {
              setBalance(balance);
            }}
            style={{ height: 0, width: 0 }}
          />
        </View>
        <View >
          <TouchableOpacity
            activeOpacity={0.5}
            style={styles.btn}
            onPress={AddClt}
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
/*const mapDispatchToProps={
 add :AddClient
}
const mapStateToProps=(state)=>{
    console.log(state)
    return{
        client: state.cltReducer}
}

export default connect(mapStateToProps,mapDispatchToProps)(Client);*/
export default Client;