import React, { useState } from 'react';
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
import { useDispatch } from 'react-redux';
import { SignUp } from '../Redux/Actions';

const Users = () => {
    const [fullname, setFullname] = useState("");
    const [numberph, setNumberph] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const dispatch =useDispatch()
    const Register =()=>{
      if(!fullname || !numberph || !email || !password ){
        Alert.alert("please fill up the field") 
        return
      }else{
        dispatch(SignUp(fullname,numberph,email,password))
        Alert.alert("Created succeful")
        setFullname("");
        setNumberph("");
        setEmail("");
        setPassword(""); 
      }
    }
    return (
        <View style={{flex:1 }}>
        <View style={{flex:1.5, alignItems: "center"}}>
          <Text style={{ fontSize: 40, color: "#4aaaa5", fontWeight: "bold",marginTop:10 }}>
            Create Users
          </Text>
        </View>
        <View  style={{flex:8.5,backgroundColor: "white"}}>
          <ScrollView>
          <View style={{alignItems:"flex-start",marginHorizontal:20}}>
            <Text style={{  fontSize: 20, color: "#4aaaa5",marginTop:15 }}>
              Full Name
            </Text>
            <TextInput
              placeholder="Full Name"
              autoCapitalize="words"
              value={fullname}
              onChangeText={(fullname) => {
                setFullname(fullname);
               
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
              Email
            </Text>
            <TextInput
              placeholder="Email"
              keyboardType="email-address"
              value={email}
              onChangeText={(email) => {
                setEmail(email);
              }}
              style={styles.input}
            />
             <Text style={{  fontSize: 20, color: "#4aaaa5" }}>
              Password
            </Text>
            <TextInput
             secureTextEntry
              value={password}
              onChangeText={(password) => {
                setPassword(password);
              }}
              style={styles.input}
            />
          </View>
          <View style={{marginHorizontal:20}}>
            <TouchableOpacity
              activeOpacity={0.5}
              style={styles.btn}
              onPress={Register}
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
}

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
})

export default Users;
