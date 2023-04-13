import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import TextInput from '../../components/molecules/TextInput';
import Button from '../../components/atoms/Button';
import Gap from '../../components/atoms/Gap';

const SignIn = () => {
  const [name, setName] = useState('');
  const [userName, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhone] = useState('');
  

  const handleSignIn = () => {
    const data = {
      userName: userName,
      name: name,
      email: email,
      address: address,
      phoneNumber: phoneNumber,

    };

    console.log(data);
  };

  return (

    <View style={styles.container}>
      <Text style={styles.register}>Register</Text>
      <Gap height={40} />

      <TextInput
        label="Name"
        placeHolder="Masukan nama lengkap anda"
        value={name}
        onChangeText={e => setName(e)}
      />

<Gap height={20} />
      <TextInput
        label="Username"
        placeHolder="Masukan username anda"
        value={userName}
        onChangeText={e => setUsername(e)}
      />
      
<Gap height={20} />
      <TextInput
        label="Email"
        placeHolder="Masukan email anda"
        value={email}
        onChangeText={e => setEmail(e)}
      />

<Gap height={20} />
      <TextInput
        label="Address"
        placeHolder="Masukan alamat anda"
        value={address}
        onChangeText={e => setAddress(e)}
      />

<Gap height={20} />
      <TextInput
        label="Phone Number"
        placeHolder="Masukan nomor telepon anda"
        value={phoneNumber}
        onChangeText={e => setPhone(e)}
      />
      <Gap height={40} />
      <Button label="Register" onPress={handleSignIn} />
    </View>
    
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginTop: 10,
  },
  register: {
    fontSize: 30,
    color: 'black',
  },
});