import React,{useState} from 'react';
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

const Login = () => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    return (
        <View style={{flex:1 }}>
        <View style={{flex:2, alignItems: "center"}}>
          <Text style={{ fontSize: 40, color: "#4aaaa5", fontWeight: "bold",marginTop:10 }}>
            Login Users
          </Text>
        </View>
        <View  style={{flex:8,backgroundColor: "white",marginHorizontal:20,marginVertical:10}}>
          <View style={{alignItems:"flex-start",marginHorizontal:20,marginTop:30}}>
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
            placeholder="Password"
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
              
            >
              <Text style={{ fontSize: 30, color: "white", fontWeight: "bold" }}>
                Valider
              </Text>
            </TouchableOpacity>
          </View>
            
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

export default Login;
