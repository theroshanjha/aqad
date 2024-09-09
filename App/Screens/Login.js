
import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, Text, StyleSheet, Image, TouchableOpacity, BackHandler, Alert, ToastAndroid } from 'react-native';
import { login } from '../firebaseServiceHandler';
import HeaderWithTitle from '../Components/HeaderWithTitle';
import ProgressDialog from '../Components/ProgressDialog';
import { addUser, createTable } from '../sqldatabase';


const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isVisible, setisVisible] = useState(false);



  useEffect(() => {
    createTable();
    const backAction = () => {
      Alert.alert('Hold on!', 'Are you sure you want to exit?', [
        {
          text: 'Cancel',
          onPress: () => null,
          style: 'cancel',
        },
        { text: 'YES', onPress: () => BackHandler.exitApp() },
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);


  const doLogin = async () => {
    if (email === "" || password === "") {
      ToastAndroid.showWithGravity(
        'We need your email & password to Logged you In!',
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM,
      );
    } else {
      setisVisible(true)
      const result = await login(email, password);
      console.log("info coming -->", result)
      if (result.success) {
        setisVisible(false)
        ToastAndroid.showWithGravity(
          'Login Successfull!',
          ToastAndroid.SHORT,
          ToastAndroid.BOTTOM,
        );
        addUser(email,"","");
        navigation.navigate('Home');  // Navigate to a different screen upon successful login
      } else {
        setisVisible(false)
        // alert(result.message);
      }
    }
  };

  return (
    <View style={styles.container}>
      <HeaderWithTitle backgroundColor={"#f27b21"} title={"Login"}></HeaderWithTitle>
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
        <Button title="Log In" onPress={doLogin} color={"#000"} />

        <TouchableOpacity onPress={() => navigation.navigate("Signup")} activeOpacity={0.7}>
          <Text style={styles.signuptext}>Didn't have an account ? Signup here !</Text>
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
    marginBottom:10
  },

  imagestyle: { height: 100, width: 200, resizeMode: "contain", alignSelf: "center" },
  signuptext: { marginTop: 10, letterSpacing: 1, textDecorationLine: "underline", color: "#000", fontSize: 12 }
});

export default LoginScreen;
