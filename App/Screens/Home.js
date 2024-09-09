
import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, Text, StyleSheet, Image, TouchableOpacity, ToastAndroid, BackHandler, Alert } from 'react-native';

const Home = ({ navigation }) => {

    useEffect(() => {
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



    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 30, fontWeight:"bold", color:"#000"}}>{"Welcome Back To,\nAQAD!"}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding:16
    }
});

export default Home;
