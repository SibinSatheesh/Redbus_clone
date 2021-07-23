import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,Image
   
} from "react-native";

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


  const Tab = createMaterialTopTabNavigator();
   
  function upcomingtrips() {

    return (

      <View style={styles.container1}>
          <View >
            <Image style={{height: '60%',width:'100%'}}
              source={require('../assets/imagebg.jpeg')}
            />
            <Text style={styles.buttontext}>No Upcoming Trips</Text>
          </View>
      </View>
    )
  }
  
  function completedtrips() {

    return (

      <View style={styles.container1}>
        <View >
            <Image style={{height: '60%',width:'100%'}}
              source={require('../assets/imagebg.jpeg')}
            />
            <Text style={styles.buttontext}>No Completed Trips</Text>
        </View>
      </View>
    )
  }

  function cancelledtrips() {

    return (

      <View style={styles.container1}>
        <View >
            <Image style={{height: '60%',width:'100%'}}
              source={require('../assets/imagebg.jpeg')}
            />
            <Text style={styles.buttontext}>No Cancelled Trips</Text>
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
            labelStyle: {  fontSize: 15, opacity:1, marginTop:14,textTransform: 'none' },
             pressColor:'#fa8072',
            
            indicatorStyle: {
              backgroundColor: '#f5f5f5',
              height: '100%',
              borderBottomColor: '#fc4765',
              borderBottomWidth: 6
            },

            style:{
              borderTopColor: 'transparent',
              backgroundColor: '#f5f5f5',
              height: 70
            },
        }}
      >
        <Tab.Screen
          name="upcomingtrips"
          component={upcomingtrips}
          options={{ tabBarLabel: 'Upcoming Trips'}}
        />
        <Tab.Screen
          name="completedtrips"
          component={completedtrips}
          options={{ tabBarLabel: 'Completed Trips'  }}
        />
        <Tab.Screen
          name="cancelledtrips"
          component={cancelledtrips}
          options={{ tabBarLabel: 'Cancelled Trips'  }}
        />

      </Tab.Navigator>
    );
  }

  export default function redbus() {
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
      flex: 1,
    },

    container1: {
      backgroundColor:"white",
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
      marginTop:'20%',
      marginLeft:'28%',
      fontWeight:'bold',
      color:'black',
    },
  });