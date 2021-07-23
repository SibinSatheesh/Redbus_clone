import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet, Button
   
} from "react-native";

import { NavigationContainer, TabNavigator } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {createStackNavigator} from '@react-navigation/stack';

import Editprofile from "./scrns/Editprofile";
import Profile from "./scrns/Profile";
import Home from "./scrns/Home";
import MyBookings from "./scrns/MyBookings";
import Wallet from "./scrns/Wallet";

import Help from "./scrns/Help";
import Myaccount from "./scrns/Myaccount";
import Changeemail from "./scrns/Changeemail";
import Cards from "./scrns/Cards";
import Copass from "./scrns/Copass";
import Refer from "./scrns/Refer";
import Rewards from "./scrns/Rewards";
import Offer from "./scrns/Offer";
import Call from "./scrns/Call";
import About from "./scrns/About";
import Settings from "./scrns/Settings";

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

const myOptions = {
  headerStyle: {
    backgroundColor: '#fc4765',
    height:75,
    borderColor: '#fc4765',
  },
    headerTintColor: '#fff',
    headerTitleStyle: {
     fontSize:22,
    }
}

function Homes() {
  return (

    <Stack.Navigator 
      screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen
        name='Home'
        component={Home}
        options={{...myOptions,title:"Home"}}
      />
    </Stack.Navigator>
  );
}

function Booking() {
  return (

    <Stack.Navigator 
      screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen
        name='Bookings'
        component={MyBookings}
        options={{...myOptions,title:"My Bookings"}} 
      />
    </Stack.Navigator>
  );
}

function HelpTabs() {
  return (
    <Stack.Navigator 
      screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen
        name='Help'
        component={Help}
        options={{...myOptions,title:"red:Buddy"}}
      />
    </Stack.Navigator>
  );
}

function Account() {
  return (

    <Stack.Navigator initialRouteName="Myaccount">
        <Stack.Screen
          name='Myaccount'
          component={Myaccount}
          options={{ ...myOptions,title:"My Account"}}
        />

        <Stack.Screen
          name='Profile'
          component={Profile}
          options={{...myOptions,title:"Profile"}}
        />
        
        <Stack.Screen
          name='Editprofile'
          component={Editprofile}
          options={{...myOptions, title:"Profile"}}
        />

        <Stack.Screen
          name='Email'
          component={Changeemail}
          options={{...myOptions, title:"Profile"}}
        />

        <Stack.Screen
          name='Wallet'
          component={Wallet}
          options={{...myOptions, title:"Wallet"}}
        />
        <Stack.Screen
          name='Cards'
          component={Cards}
          options={{...myOptions, title:"Cards"}}
        />

        <Stack.Screen
          name='Copass'
          component={Copass}
          options={{...myOptions, title:"Co-Passengers"}}
        />
        <Stack.Screen
          name='Refer'
          component={Refer}
          options={{...myOptions, title:"Refer and Earn"}}
        />
         <Stack.Screen
          name='Rewards'
          component={Rewards}
          options={{...myOptions, title:"My Rewards"}}
        />
         <Stack.Screen
          name='Offer'
          component={Offer}
          options={{...myOptions, title:"Offers"}}
        />
        {/* <Stack.Screen
          name='Call'
          component={Call}
          options={{...myOptions, title:"Call Support"}}
        /> */}
        <Stack.Screen
          name='About'
          component={About}
          options={{...myOptions, title:"About Us"}}
        />
        <Stack.Screen
          name='Settings'
          component={Settings}
          options={{...myOptions, title:"Settings"}}
        />

    </Stack.Navigator>
    
  );
}


  export default function App() {
    return (
      
        <View style={styles.container}>

          <NavigationContainer> 
            <Tab.Navigator
            
              initialRouteName="Home"
              activeColor="#e91e63"
              style={{ backgroundColor: '#f5f5f5' }}
              barStyle={{ backgroundColor: 'white'}}
              shifting={false}

            >

            <Tab.Screen
              name="Home"
              component={Homes}
              options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color }) => (
                  <SimpleLineIcons name="home" color={color} size={26} />
                ),
              }}
            />

            <Tab.Screen
              name="Bookings"
              component={Booking}
              options={{
                tabBarLabel: 'My Bookings',
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons name="format-list-checkbox" color={color} size={26} />
                ),
              }}
            />

            <Tab.Screen
              name="Help"
              component={HelpTabs}
              options={{
                tabBarLabel: 'Help',
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons name="headset" color={color} size={26} />
                ),
              }}
            />

            <Tab.Screen
              name="Account"
              component={Account}
              options={{
                tabBarLabel: 'My Account',
                tabBarIcon: ({ color }) => (
                  <Ionicons name="person-circle-outline" color={color} size={26} />
                ),
              }}
            />

          </Tab.Navigator>
        </NavigationContainer>

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