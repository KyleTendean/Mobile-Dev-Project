import React from 'react';
import {View, Text, ScrollView, TextInput, Image, StyleSheet,} from 'react-native';
import Laptop from '../img/1.png';

const CoreComponents = props => {
  return (
    <ScrollView>
      <Text>{props.title}</Text>
      <View style={styles.box} />
      <Image
        source={require('./../img/1.png')}
        style={{width: 200, height: 200}}
      />
      <Image source={Laptop} style={{width: 200, height: 200}} />
      <Image
        source={{uri: 'https://reactjs.org/logo-og.png'}}
        style={{width: 200, height: 200}}
      />
      <TextInput
        placeholder="Anak manja"
        style={{
          borderColor: 'black',
          borderWidth: 1,
          borderRadius: 10,
          margin: 10,
          padding: 10,
        }}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  box: {
    width: 100, 
    height: 100, 
    backgroundColor: 'blue',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    borderColor: 'blue'
    
  }
})
export default CoreComponents;