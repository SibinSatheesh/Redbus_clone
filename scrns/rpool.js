import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,TouchableOpacity
   
} from "react-native";

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

  const Tab = createMaterialTopTabNavigator();
   
  function upcoming() {

    return (

      <View style={styles.container1}>
        <View >
          <Text style={styles.buttontext}>Oops!!Something went</Text>
          <Text style={styles.buttontext1}> wrong</Text>
        </View>
      </View>
    )
  }
  
  function recurring() {

     return (

      <View style={styles.container1}>
        <View >
          <Text style={styles.buttontext}>Oops!!Something went</Text>
          <Text style={styles.buttontext1}> wrong</Text>
        </View>
      </View>
    )
  }

  function past() {

    return (

      <View style={styles.container1}>
        <View >
          <Text style={styles.buttontext}>Oops!!Something went</Text>
          <Text style={styles.buttontext1}> wrong</Text>
        </View>
      </View>
    )
  }

  function MyTopTabs() {

    return (  

      <Tab.Navigator
      
        tabBarOptions={{
          activeTintColor: '#fc4765',
          inactiveTintColor:'black',
          labelStyle: {  fontSize: 17, opacity:0.8 ,textTransform: 'none' },

          indicatorStyle: {
            backgroundColor: 'white',
            height: '90%',
            borderBottomColor: 'white',
            borderBottomWidth: 1
          },
          
          style:{
            shadowColor: 'rgba(58,55,55,0.1)',
            shadowOpacity: 1,
            shadowRadius: 15,
            elevation: 0,
            borderTopColor: 'transparent',
            backgroundColor: '#f5f5f5',
            height: 50,
          },
        }}
      >

        <Tab.Screen
          name="upcoming"
          component={upcoming}
          options={{ tabBarLabel: 'Upcoming'}}
        />
        <Tab.Screen
          name="recurring"
          component={recurring}
          options={{ tabBarLabel: 'Recurring'  }}
        />
        <Tab.Screen
          name="past"
          component={past}
          options={{ tabBarLabel: 'Past'  }}
        />

      </Tab.Navigator>
    );
  }

  export default function rpool() {

    return (
        
      <View style={styles.container}>
        <View >
        </View>
          <MyTopTabs/>
      </View>
      
    );
  }
  const styles = StyleSheet.create({
    container: {
      marginTop:20,
      flex: 1,
    },

    container1: {
      backgroundColor:"#e6e6e6",
      flex: 1,
    },
  
    text1:{
      fontWeight:"800",
      fontSize:21,
      color:'#fa8072',
      marginStart: '4%',
      marginTop: '6%',
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
      marginBottom:10,
    },
  
    button:{
      backgroundColor:'white',
      elevation:2,
      marginTop:'4%',
      marginStart:5,
      height:'40%',
      padding:5,
      width:'98%'
    },

    buttontext:{
      fontSize:22,
      marginTop:'40%',
      marginLeft:'22%',
      fontWeight:'bold',
      color:'black',
    },

    buttontext1:{
      fontSize:22,
      marginTop:'1%',
      marginLeft:'40%',
      fontWeight:'bold',
      color:'black',
    },

    textview:{
      fontWeight:'500',
      fontSize:10,
      color:'grey',
      marginStart:100,    
    },

    textview:{
      fontWeight:'500',
      fontSize:15,
      color:'grey',
      marginStart:130,
    },
  });