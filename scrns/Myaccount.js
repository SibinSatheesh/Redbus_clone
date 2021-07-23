import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet, 
    Image,
    TouchableOpacity
   
} from "react-native";

import { Card } from 'react-native-elements';
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native";
import {  ListItem } from "react-native-elements";
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();


const Myaccount=({navigation}) =>{
        
    return (
        
        <SafeAreaView >
            
            <ScrollView>
                <View style={styles.container1}>
                    <Card>
                        <TouchableOpacity  onPress={() =>
                            navigation.navigate('Profile')}>
                            <View style={styles.subtitleView}>
                                <Image source={require('../assets/person.jpg')} style={styles.ratingImage}/>
                            </View>
                    
                            <View style={styles.subView}>
                                <Text>
                                    Male 
                                </Text>
                                <Text>
                                    9746502070
                                    <ListItem.Chevron style={{marginLeft:170,marginTop:5}}/>
                                </Text>
                                <Text>
                                    name@gmail.com
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </Card>
                
                    <Card>

                        <TouchableOpacity  onPress={() =>
                            navigation.navigate('Bookings')} >
                            <Text >
                                My Bookings <ListItem.Chevron style={{marginLeft:320}}/>
                            </Text>
                        </TouchableOpacity>

                        <Card.Divider  style={{marginStart:-15,width:'110%', marginTop:4,}}/>

                        <TouchableOpacity  onPress={() =>
                            navigation.navigate('Wallet')}>    
                            <Text style={{marginTop:12}}>
                                Wallet 
                                <ListItem.Chevron style={{marginLeft:320}}/>
                            </Text>
                        </TouchableOpacity>

                        <Card.Divider  style={{marginStart:-15,width:'110%', marginTop:4,}}/>

                        <TouchableOpacity  onPress={() =>
                            navigation.navigate('Cards')}>
                                
                            <Text style={{marginTop:12}}>
                                Cards 
                                <ListItem.Chevron style={{marginLeft:320}}/>
                            </Text>
                        </TouchableOpacity>

                        <Card.Divider  style={{marginStart:-15,width:'110%', marginTop:4,}}/>

                        <TouchableOpacity  onPress={() =>
                            navigation.navigate('Copass')}>
                            <Text style={{marginTop:12}}>
                                Co-Passengers(Bus) 
                                <ListItem.Chevron style={{marginLeft:320}}/>
                            </Text>
                        </TouchableOpacity>

                        <Card.Divider  style={{marginStart:-15,width:'110%', marginTop:4,}}/>

                        <TouchableOpacity  onPress={() =>
                            navigation.navigate('Refer')}>
                            <Text style={{marginTop:12}}>
                                Refer & Earn 
                                <ListItem.Chevron style={{marginLeft:320}}/>
                            </Text>
                        </TouchableOpacity>

                        <Card.Divider  style={{marginStart:-15,width:'110%', marginTop:4,}}/>

                        <TouchableOpacity  onPress={() =>
                            navigation.navigate('Rewards')}>
                            <Text style={{marginTop:12}}>
                                    My Rewards 
                                <ListItem.Chevron style={{marginLeft:320}}/>
                            </Text>
                        </TouchableOpacity>

                        <Card.Divider  style={{marginStart:-15,width:'110%', marginTop:4,}}/>

                        <TouchableOpacity  onPress={() =>
                            navigation.navigate('Offer')}>
                            <Text style={{marginTop:12}}>
                                Offers 
                                <ListItem.Chevron style={{marginLeft:320}}/>
                            </Text>
                        </TouchableOpacity>

                        <Card.Divider  style={{marginStart:-15,width:'110%', marginTop:4,}}/>

                        <TouchableOpacity  onPress={() =>
                            navigation.navigate('Help')} >
                            <Text style={{marginTop:12}}>
                                Help 
                                <ListItem.Chevron style={{marginLeft:320}}/>
                            </Text>
                        </TouchableOpacity>

                        <Card.Divider  style={{marginStart:-15,width:'110%', marginTop:4,}}/>

                        <TouchableOpacity  onPress={() =>
                            navigation.navigate('Call')}>
                            <Text style={{marginTop:12}}>
                                Call Support 
                                <ListItem.Chevron style={{marginLeft:320}}/>
                            </Text>
                        </TouchableOpacity>

                        <Card.Divider  style={{marginStart:-15,width:'110%', marginTop:4,}}/>

                        <TouchableOpacity  onPress={() =>
                            navigation.navigate('About')}>
                            <Text style={{marginTop:12}}>
                                About Us 
                                <ListItem.Chevron style={{marginLeft:320}}/>
                            </Text>
                        </TouchableOpacity>

                        <Card.Divider  style={{marginStart:-15,width:'110%', marginTop:4,}}/>

                        <TouchableOpacity  onPress={() =>
                            navigation.navigate('Settings')}>
                            <Text style={{marginTop:12}}>
                                Settings <ListItem.Chevron style={{marginLeft:320}}/>
                            </Text>
                        </TouchableOpacity>

                    </Card>
            
                    <Card >
                        <Text>
                            Logout 
                            <ListItem.Chevron style={{marginLeft:320}}/>
                        </Text>
                    </Card>

                </View>
            </ScrollView>

        </SafeAreaView>
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
        backgroundColor:"lightgrey",
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

    item:{
        backgroundColor: 'white',
        borderColor:'black',
        marginVertical: 8,
        marginHorizontal: 16,
    },  

    subtitleView: {
        flexDirection: 'column',
        paddingLeft: 4,
        paddingTop:-5,
    },

    subView: {
        flexDirection: 'column',
        marginLeft: '20%',
        marginTop: '-15%',
    },

    ratingImage: {
        height: 55,
        width: 55,
        resizeMode:"contain",
        
    },
});

export default Myaccount;
