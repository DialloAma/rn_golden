import React from 'react';
import {View,Text, StyleSheet, TextInput, TouchableOpacity, ScrollView} from 'react-native';
import {Picker} from '@react-native-picker/picker';

const Delivery = () => {

    return (
        <View style={{marginTop:30,backgroundColor:"white",marginHorizontal:25}}>
            <View style={{alignItems:"center",marginTop:30}}>
                <Text style={{fontSize:30,color:"#4aaaa5",fontWeight:"bold"}} >Products Delivery</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{marginTop:30}}>
     { /*<Picker style={{marginHorizontal:20,borderWidth:1,borderColor:"#4aaaa5"}}>
          <Picker.Item label='select a product' />

    </Picker>*/}
    <AutoComplete></AutoComplete>
                <Text style={{marginLeft:30,fontSize:20,color:"#4aaaa5"}}>Quantity</Text>
                <TextInput placeholder="Quantity" keyboardType="numeric" style={styles.input}/>
                <Text style={{marginLeft:30,fontSize:20,color:"#4aaaa5"}}>Price</Text>
                <TextInput placeholder="Price" keyboardType="numeric" style={styles.input}/>
                <Text style={{marginLeft:30,fontSize:20,color:"#4aaaa5"}}>Amout</Text>
                <TextInput placeholder="Amount"  keyboardType="numeric" caretHidden={true} style={styles.input}/>
                        
                
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
        borderWidth:1,
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


export default Delivery;