import React, { Component } from "react";

import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
   
} from "react-native";

import { Card } from 'react-native-elements'
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']);
LogBox.ignoreAllLogs();
import {  ListItem } from "react-native-elements";
import { RadioButton } from 'react-native-paper';

const Profile=({navigation}) =>{

const [checked, setChecked] = React.useState('first');

  return (
        
    <View style={styles.container}>

      <View style={styles.container1}>

        <Card>

            <View style={styles.subtitle}>
              <Text style={{fontSize:17,color:'black'}}>
                  PERSONAL DETAILS
              </Text>

                <TouchableOpacity onPress={() =>
                  navigation.navigate('Editprofile')}>
                    <Text style={{fontSize:17,color:'blue', marginLeft:'55%'}}>
                      EDIT
                    </Text>
                </TouchableOpacity>
            </View>

            <View style={styles.subtitleView}>
              <Image source={require('../assets/person.jpg')} style={styles.ratingImage}/>
            </View>
                
            <View style={styles.subView}>
                <Text style={styles.subText} >
                  Name
                </Text>
                <Text style={styles.subText}>
                  Age
                </Text>
                <Text style={styles.subText1}>
                  0
                </Text>
                <Text style={styles.subText1}>
                  Gender
                </Text>
                
                <View style={styles.subtitle}>
    
                    <RadioButton
                      value="first"
                      disabled="true"
                      label="M"
                      status={ checked === 'first' ? 'checked' : 'unchecked' }
                    />
                    <Text style={styles.subradioText}> 
                        M
                    </Text>
                    <RadioButton
                        value="second"
                        disabled="true"
                        status={ checked === 'second' ? 'checked' : 'unchecked' }
                      // onPress={() => setChecked('second')}
                    />
                    <Text style={styles.subradioText}> 
                        F
                    </Text>

                </View>
                    <Text style={styles.subText}>
                        Mobile Number
                    </Text>
                    <Text style={styles.subText1}>
                        9746502070
                    </Text>
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

  subtitle: {
    flexDirection: 'row',
    paddingLeft: 4,
    paddingTop:5,
  },

  subtitleView: {
    flexDirection: 'column',
    paddingLeft: 4,
    paddingTop:-5,
    marginTop: '5%',
  },

  subView: {
    flexDirection: 'column',
    marginLeft: '22%',
    marginTop: '-8%',
  },

  ratingImage: {
    height: 48,
    width: 48,
    resizeMode:"contain",
  },
  
});

export default Profile;
