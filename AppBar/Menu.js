import React from "react";
import { View, StyleSheet, TextInput, Text, Dimensions } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import Product from "../Pages/Product";
import Client from '../Pages/Client';
import Delivery from '../Pages/Delivery';
import Payement from '../Pages/Payement';
import CltList from "../Lists/CltList";
import Sell from "../Pages/Sell";

import { Header } from "react-native/Libraries/NewAppScreen";
import { FontAwesome5 } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";


const Drawer = createDrawerNavigator();
const Menu = () => {
  const Searchbar=()=>{
    return(
      <SafeAreaView style={{backgroundColor:"#4aaaa5"}}>
        <View style={{margin:10,padding:5,backgroundColor:"white"}} >
          <TextInput style={{height:20}} placeholder="Search...." />
        </View>
      </SafeAreaView>
    )
  }
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#4aaaa5"},
          drawerStyle:{width:250,marginTop:80},
          drawerLabelStyle:{ fontSize:20,fontWeight:"bold"},
         drawerActiveTintColor:"white",
         drawerActiveBackgroundColor:"#4aaaa5",
         headerTintColor:"white",
         headerTitleAlign:"center",
         headerTitle:"",
          headerRight: () => (
              <TouchableOpacity>
            <FontAwesome5
              style={{marginRight:30}}
              name="shopping-cart"
              size={24}
              color="white"
            />
            </TouchableOpacity>
          ),
          
          
          
        }}
      >
        <Drawer.Screen   name="Sell" component={Sell} />
        <Drawer.Screen   name="Product" component={Product} />
        <Drawer.Screen  name="Client" component={Client} />
        <Drawer.Screen name="Payement" component={Payement} />
        <Drawer.Screen  name="Deliver" component={Delivery} />
        <Drawer.Screen  name="list" component={CltList} />
        
        
      </Drawer.Navigator>
     
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default Menu;