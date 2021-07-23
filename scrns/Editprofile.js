import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet, Image,TouchableOpacity, KeyboardAvoidingView
   
} from "react-native";

import { Card } from 'react-native-elements';
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native";
import {  ListItem } from "react-native-elements";
import { RadioButton,TextInput } from 'react-native-paper';

const Profile=({navigation}) =>{

    const [checked, setChecked] = React.useState('first');
    const [text, setText] = React.useState('');
    
    return (
        
        <KeyboardAvoidingView>
            
            <ScrollView>

                <View style={styles.container}>

                    <View style={styles.container1}>

                        <Card>

                            <View style={styles.subtitle}>
                                <Text style={{fontSize:17,color:'black'}}>
                                    PERSONAL DETAILS
                                </Text>
                            </View>

                             <View style={styles.subtitleView}>
                                <Image source={require('../assets/person.jpg')} style={styles.ratingImage}/>
                            </View>
                
                            <View style={styles.subView}>
                        
                                <TextInput
                                    
                                    placeholder={'Name'}
                                    style={styles.subText} 
                                    secureTextEntry={true} 
                                />
                                <TextInput
                                    
                                    placeholder={'DOB(mm/yyyy)'}
                                    style={styles.subText} 
                                    secureTextEntry={true} 
                                />
                                <Text style={styles.subText1}>
                                    Gender
                                </Text>

                                <View style={styles.subtitle}>

                                    <RadioButton
                                        value="first"
                                        label="M"
                                        color="#fc4765"
                                        status={ checked === 'first' ? 'checked' : 'unchecked' }
                                        onPress={() => setChecked('first')}
                                    />
                                    <Text style={styles.subradioText}> 
                                        M
                                    </Text>

                                    <RadioButton
                                        value="second"
                                        color="#fc4765"
                                        status={ checked === 'second' ? 'checked' : 'unchecked' }
                                        onPress={() => setChecked('second')}
                                    />
                                    <Text style={styles.subradioText}> 
                                        F
                                    </Text>

                                </View>
                                <Text style={styles.subText}>
                                    Mobile Number
                                </Text>
                        
                                <TextInput
                                
                                    placeholder={'Mobile Number'}
                                    style={styles.subText} 
                                    secureTextEntry={true} 
                                />

                            </View>

                            <View style={styles.subtitle1}>

                                <TouchableOpacity onPress={() =>
                                    navigation.navigate('Profile')}>
                                        <Text style={{fontSize:17,color:'blue'}}>
                                            DONE
                                        </Text>
                                </TouchableOpacity>

                                <TouchableOpacity onPress={() =>
                                    navigation.navigate('Profile')}>
                                        <Text style={{fontSize:17,color:'blue',marginLeft:'20%'}}>
                                            CANCEL
                                        </Text>
                                </TouchableOpacity>
                        
                            </View>
                        </Card>

                        <Card>
                            <TouchableOpacity onPress={() =>
                                navigation.navigate('Email')}>
                                <Text style={{fontSize:17,color:'black'}}>
                                    Change Email  <ListItem.Chevron style={{marginLeft:220,marginTop:5}}/>
                                </Text>
                            </TouchableOpacity>
                        </Card>
                    </View>
        
                </View>

            </ScrollView>
        </KeyboardAvoidingView>
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

    subText: {
        backgroundColor:'white',
        fontSize: 15, 
        color: 'grey',
        opacity:0.7,
        marginVertical: 8,
        marginHorizontal: 8,
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

    subtitle: {
        flexDirection: 'row',
        paddingLeft: 4,   
    },

    subtitle1: {
        flexDirection: 'row',
        paddingLeft: 4,
        marginTop:20
    },

    subtitleView: {
        flexDirection: 'column',
        paddingLeft: 4,
        marginTop: '2%',
    },

    subView: {
        flexDirection: 'column',
        marginLeft: '18%',
        marginTop: '-21%',
    },

    ratingImage: {
        height: 55,
        width: 55,
        resizeMode:"contain",
    },

});

export default Profile;
