import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { useSelector } from "react-redux";

const Viewcart = () => {
    const {items} =useSelector((state)=>state.cart)
    
    
        return (
            <View>
                 

                
            
              <TouchableOpacity
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
                <Text style={{ fontSize: 25, color: "white", fontWeight: "bold" }}>View Cart</Text>
              </TouchableOpacity>
            
            </View>
          );
    
  
};

const styles = StyleSheet.create({});

export default Viewcart;
