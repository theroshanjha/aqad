// SignupScreen.js

import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, Text, StyleSheet, Image, TouchableOpacity, ToastAndroid, BackHandler, Alert } from 'react-native';
import { signup } from '../firebaseServiceHandler';
import HeaderWithTitle from '../Components/HeaderWithTitle';
import ProgressDialog from '../Components/ProgressDialog';

const Signup = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isVisible, setisVisible] = useState(false);



  useEffect(() => {
    const backAction = () => {
      navigation.goBack(null);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);

  const doSignup = async () => {
    if (email === "" || password === "") {
      ToastAndroid.showWithGravity(
        'We need your email & password to Logged you In!',
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM,
      );
    } else {
      setisVisible(true)
      const result = await signup(email, password);
      if (result.success) {
        setisVisible(false)
        ToastAndroid.showWithGravity(
          'Signup Successfully!',
          ToastAndroid.SHORT,
          ToastAndroid.BOTTOM,
        );
        navigation.navigate('Login');
      } else {
        setisVisible(false)
        setErrorMessage(result.message);
        console.log("error msg-->", result.message)
      }
    }
  };

  return (
    <View style={styles.container}>
      <HeaderWithTitle backgroundColor={"#f27b21"} title={"Signup"}></HeaderWithTitle>
      <View style={{ padding: 16 }}>
        <ProgressDialog visible={isVisible}></ProgressDialog>



        <Image style={styles.imagestyle} source={require("../Images/aqad-logo-1.png")}></Image>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}
        <Button title="SIGN UP" onPress={doSignup} color={"#000"} />

        <TouchableOpacity onPress={() => navigation.goBack(null)} activeOpacity={0.7}>
          <Text style={styles.signuptext}>Already have an account ? Login here !</Text>
        </TouchableOpacity>

      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    height: 45,
    borderColor: '#ddd',
    borderWidth: 1.5,
    marginBottom: 12,
    paddingHorizontal: 8,
    borderRadius: 5,
  },
  error: {
    color: 'red',
    marginBottom: 10
  },
  imagestyle: { height: 100, width: 200, resizeMode: "contain", alignSelf: "center" },
  signuptext: { marginTop: 10, letterSpacing: 1, textDecorationLine: "underline", color: "#000", fontSize: 12 }
});

export default Signup;
