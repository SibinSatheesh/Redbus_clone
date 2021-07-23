import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
   
} from "react-native";

import { NavigationContainer, TabNavigator } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { TabView } from 'react-native-tab-view';
import { TabBar } from 'react-native-tab-view';

  const Tab = createMaterialTopTabNavigator();
   
  function completed() {
    return (
      <View style={styles.container1}>
        
        <View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttontext}>SHOW BOOKINGS</Text>
          </TouchableOpacity>
        </View>
      
      </View>
    )
  }
  
  function cancelled() {
    return (
        <View style={styles.container1}>
        
          <View>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttontext}>SHOW BOOKINGS</Text>
            </TouchableOpacity>
          </View>
      
        </View>
    )
  }

  function MyTopTabs() {
    return (  

      <Tab.Navigator
      
        initialRouteName="Feed"
          tabBarOptions={{
            activeTintColor: '#fc4765',
            inactiveTintColor:'#708090',
            labelStyle: {  fontSize: 17,textTransform: 'none' },
            pressColor:'#fa8072',
            
            indicatorStyle: {
              backgroundColor: '#edece8',
              height: '100%',
              borderBottomColor: '#fa8072',
              borderBottomWidth: 4
            },
              
            style:{
              shadowColor: 'rgba(58,55,55,0.1)',
              shadowOpacity: 1,
              shadowRadius: 15,
              elevation: 0,
              borderTopColor: 'transparent',
              backgroundColor: '#edece8',
              height: 50
            },
          }}
      >
        <Tab.Screen
          name="completed"
          component={completed}
          options={{ tabBarLabel: 'COMPLETED'}}
        />
        <Tab.Screen
          name="cancelled"
          component={cancelled}
          options={{ tabBarLabel: 'CANCELLED'  }}
        />

      </Tab.Navigator>
    );
  }

  export default function redbus() {
    return (
        
        <View style={styles.container}>
        
            <View >
                <Text style={styles.text1}>
                    All your bookings have been downloaded  
                </Text>
                <Text style={styles.text2}>
                    from redBus
                </Text>
                <Text style={styles.text3}>
                    Pull to refresh
                </Text>
            </View>
            <MyTopTabs/>
        </View>
      
    );
  }
  const styles = StyleSheet.create({

    container: {
      backgroundColor:"#fcfcfa",
      flex: 1,
    },

    container1: {
        backgroundColor:"#e6e5e1",
      flex: 1,
    },

    text1:{
      fontWeight:"800",
      fontSize:21,
      color:'#fc4765',
      marginStart: '4%',
      marginTop: '6%',
    },

    text2:{
      fontWeight:"800",
      fontSize:21,
      color:'#fc4765',
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
      backgroundColor:'#ffffff',
      elevation:2,
      marginTop:'4%',
      marginStart:8,
      height:'38%',
      padding:4,
      width:'96%'
  
      },
    buttontext:{
      fontSize:17,
      padding:17,
      marginLeft:'28%',
      opacity:0.6,
      fontWeight:'200',
      color:'black',
    },

  });