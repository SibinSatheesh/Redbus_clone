import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
   
} from "react-native";

  export default function Help() {
    return (

      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headertext}>red:Buddy</Text>
        </View>
        <View style={styles.container1}>
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
      backgroundColor:"#e6e6e6",
      flex: 1,
      height:"200%"
    },

    text1:{
      fontWeight:"800",
      fontSize:21,
      color:'#fa8072',
      marginStart: '4%',
      marginTop: '8%',
    },

    text2:{
      fontWeight:"800",
      fontSize:21,
      color:'#fa8072',
      marginStart: '34%',
    },

    text3:{
      fontWeight:"800",
      fontSize:17,
      color:'#708090',
      marginStart: '35%',
      marginTop: '1%',
    },

    iconbutton:{
      color:'grey',
      marginStart:-15,
      marginTop:10
    },

    button:{
      backgroundColor:'#00ff00',
      borderRadius:10,
      shadowOffset: { width: 0, height: 0 },
      shadowColor: 'grey',
      shadowOpacity: 0.2,
      marginStart:-50,
      marginTop:14,
      width:63
    },

    buttontext:{
      fontSize:13,
      fontWeight:'bold',
      marginBottom:2,
      color:'white',
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
    
  });