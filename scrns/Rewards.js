import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
   
} from "react-native";

  export default function Rewards() {
    return (
      <View style={styles.container}>
        <View style={styles.container1}>
          <Text style={styles.headertext}>Rewards</Text>
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

    headertext:{
      fontSize: 22, 
      marginTop:'40%',
      marginStart:'40%',
      fontWeight: '800', 
      color:"#fc4765" 
    },
    
  });