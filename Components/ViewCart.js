import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { useSelector } from "react-redux";

const Viewcart = () => {
    const {items} =useSelector((state)=>state.cart)
    
    
        return (
            <View>
                 

                
            
             
            
            </View>
          );
    
  
};

const styles = StyleSheet.create({});

export default Viewcart;
