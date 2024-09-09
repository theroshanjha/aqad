
import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, Text, StyleSheet, Image, TouchableOpacity, ToastAndroid, BackHandler, Alert } from 'react-native';

const ContactForm = ({ navigation }) => {

    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');
    const [descriptions, setDisc] = useState('');

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


    const onSubmitPress = () =>{
        setName("");
        setMobile("");
        setDisc("");
        alert("Thank you for showing your interest, our team will contact you very soon!")
    }


    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 30, fontWeight: "bold", color: "#000", marginBottom: 20 }}>{"Contact Us!"}</Text>

            <TextInput
                style={styles.input}
                placeholder="Name"
                value={name}
                onChangeText={setName}
            />
            <TextInput
                style={styles.input}
                placeholder="Mobile No."
                value={mobile}
                onChangeText={setMobile}

            />

            <TextInput
                style={{ ...styles.input, height: 100 }}
                placeholder="Descriptions"
                value={descriptions}
                onChangeText={setDisc}
            />


            <Button title="Submit" onPress={() => onSubmitPress()} color={"#000"} />

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    },
    input: {
        height: 45,
        borderColor: '#ddd',
        borderWidth: 1.5,
        marginBottom: 12,
        paddingHorizontal: 8,
        borderRadius: 5,
    },
});

export default ContactForm;
