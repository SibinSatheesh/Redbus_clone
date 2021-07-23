import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet, 
    TouchableOpacity
   
} from "react-native";

import { TextInput,Button } from 'react-native-paper';
import { Input } from 'react-native-elements';

const Changeemail=({navigation}) =>{
     
    return (
        
        <View style={styles.container}>

            <View style={styles.container1}>

                <View style={styles.subtitle}>
                    <Text style={{fontSize:17,color:'grey',padding:10}}>
                      ENTER YOUR EMAIL
                    </Text>
                    <Input style={{padding:8}}
                      placeholder='EMAIL'
                    />
                </View>

                <View>
                  <TouchableOpacity onPress={() =>
                    navigation.navigate('Myaccount')}>
                    <Button 
                      style={styles.inputStyle}
                      color='white'
                      mode="contained">
                     <Text style={{color:'white',fontSize:18,}}>
                        UPDATE EMAIL
                      </Text>
                    </Button>
                  </TouchableOpacity>
                </View>

            </View>
        
        </View>
    );
}


const styles = StyleSheet.create({

  container: {
    height: '100%',
    width: '100%',
    backgroundColor: '#fc4765',
    borderColor: '#fc4765',
  },

  container1: {
    backgroundColor:"white",
    flex: 1,
    height:"200%"
  },

  header:{
    flexDirection:'row',
    marginStart: 20,
    marginTop:20,
    marginBottom:'6%'
  },

  headertext:{
    fontSize: 22, 
    fontWeight: '800', 
    color:"white" 
  },

  subText: {
    fontSize: 17, 
    color: 'grey',
    opacity:0.5,
    marginVertical: 6,
    marginHorizontal: 16,
  },

  subradioText: {
    fontSize: 17, 
    color: 'grey',
    opacity:0.5,
    marginVertical: 6,
    marginHorizontal: 16,
  }, 

  subText1: {
    fontSize: 17, 
    color: 'grey',
    marginVertical: 6,
    marginHorizontal: 16,
  },  

  inputStyle:{
    margin:8,
    padding: 4,
    backgroundColor:"#fc4765"
  },

});

export default Changeemail;
