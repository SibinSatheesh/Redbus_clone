import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
   
} from "react-native";

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

  import redbus from "./redbus";
  import rpool from "./rpool";
  import bushire from "./bushire";

  const Tab = createMaterialTopTabNavigator();

  function MyTopTabs() {
    return (  

      <Tab.Navigator
      
        initialRouteName="Feed"
          tabBarOptions={{
            activeTintColor: '#fffafa',
            inactiveTintColor:'#f5f5f5',
            labelStyle: {  fontSize: 17, opacity:1,textTransform: 'none' },
            contentContainerStyle: {
              color: 'white'
            },
            indicatorStyle: {
              backgroundColor: '#fc4765',
              height: '100%',
              borderBottomColor: 'white',
              borderBottomWidth: 2
            },

            style:{
              shadowColor: 'rgba(58,55,55,0.1)',
              shadowOpacity: 1,
              shadowRadius: 15,
              elevation: 0,
              borderTopColor: 'transparent',
              backgroundColor: '#fc4765',
              height: 50
            },
          }}
      >
        <Tab.Screen
          name="Feed"
          component={redbus}
          options={{ tabBarLabel: 'redBus'}}
        />
        <Tab.Screen
          name="Notifications"
          component={rpool}
          options={{ tabBarLabel: 'rPool'  }}
        />
        <Tab.Screen
          name="Prof"
          component={bushire}
          options={{ tabBarLabel: 'Bus Hire' }}
        />
      </Tab.Navigator>
    );
  }

  export default function MyBookings() {
    return (

      <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.headertext}>My Bookings</Text>
          </View>
            <MyTopTabs/>
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