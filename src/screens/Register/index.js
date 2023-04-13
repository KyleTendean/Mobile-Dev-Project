import {StyleSheet, Text, View, Button, TextInput, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';

const SignIn = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#FFFAF0'}}>
      <Text style={styles.welcome}>Welcome</Text>
      <Text style={styles.text}>Username</Text>

      <TextInput style={styles.textInput}
       placeholder="Masukan Username anda" 
       placeholderTextColor={'grey'} 
        />
      <Text style={styles.text} >Password</Text> 
      <TextInput style={styles.textInput}
       placeholder="Masukan Password anda"
       placeholderTextColor={'grey'} 
        />
    
      <TouchableOpacity style={styles.button1}>
        <Text  style={styles.button}>Sing In</Text>
        
      </TouchableOpacity>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  welcome: {
    fontSize: 30,
    color: 'black',
    fontWeight: 'bold',
    margin: 10,
  },
  textInput: {
    borderColor: 'grey',
    borderWidth: 3,
    borderRadius: 15,
    margin: 10,
    padding: 18,

  },
  text: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
    margin: 10,
  },
  button: {
    fontSize: 15,
    color: 'black',
    fontWeight: 'bold',
    margin: 10,
    textAlign: 'center'  
  },
  button1 :{
    backgroundColor: '#Ff7300', 
    paddingVertical: 10,
    marginTop: 50,
    marginHorizontal: 10,
    borderRadius: 15,
    elevation: 2, 

  }
  

});