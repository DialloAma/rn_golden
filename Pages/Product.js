import React from 'react';
import {View,Text, StyleSheet, TextInput, TouchableOpacity, ScrollView} from 'react-native';

const Product = () => {
    return (
        <View style={{marginTop:30,backgroundColor:"white",marginHorizontal:25}}>
            <View style={{alignItems:"center",marginTop:30}}>
                <Text style={{fontSize:30,color:"#4aaaa5",fontWeight:"bold"}} >Add Products</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{marginTop:30}}>
            <Text style={{marginLeft:30,fontSize:20,color:"#4aaaa5"}}>Product Name</Text>
                <TextInput placeholder="Product Name"  autoCapitalize="words" style={styles.input}/>
                <Text style={{marginLeft:30,fontSize:20,color:"#4aaaa5"}}>Quantity</Text>
                <TextInput placeholder="Quantity" keyboardType="numeric" style={styles.input}/>
                <Text style={{marginLeft:30,fontSize:20,color:"#4aaaa5"}}>Price</Text>
                <TextInput placeholder="Price" keyboardType="numeric" style={styles.input}/>
                
            </View>
            <View>
                <TouchableOpacity activeOpacity={0.5} style={styles.btn}>
                    <Text style={{fontSize:25,color:"white",fontWeight:"bold"}}>Valider</Text>
                </TouchableOpacity>
            </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    input:{
        marginHorizontal:20,
        marginVertical:5,
        borderWidth:3,
        borderColor:"#4aaaa5",
        padding:15,
        fontSize:20,
        borderRadius:20
    
    },
    btn:{
        alignItems:"center",
        justifyContent:"center",
        padding:10,
        backgroundColor:"#4aaaa5",
        marginHorizontal:80,
        borderRadius:20,
        marginTop:40,
        marginBottom:30
        
    }
})

export default Product;