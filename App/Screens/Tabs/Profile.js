
import React, { useState, useEffect, useRef } from 'react';
import { View, TextInput, Button, Text, StyleSheet, Image, TouchableOpacity, ToastAndroid, BackHandler, Alert, FlatList } from 'react-native';
import { getUsers, updateUser } from '../../sqldatabase';
import RBSheet from 'react-native-raw-bottom-sheet';

const Profile = ({ navigation }) => {

    const [users, setUsers] = useState([]);
    const [username, setusername] = useState('');
    const [userage, setuserage] = useState('');
    const refRBSheet = useRef();



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



    useEffect(() => {
        fetchUsers();
    }, [])


    const fetchUsers = () => {
        getUsers(setUsers);
    }


    const handleUpdateUser = (id, name) => {
        updateUser(id,name,"")
        fetchUsers();
        refRBSheet.current.close();
      };

    return (
        <View style={styles.container}>
            <FlatList
                data={users.splice(0, 1)}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => (
                    <View>
                        <View style={{ backgroundColor: "#FFF", borderRadius: 5, height: 60, justifyContent: 'center' }}>
                            <Text style={{ fontSize: 20, fontWeight: "bold", color: "#000", marginLeft: 4 }}>Email</Text>
                            <Text style={{ fontSize: 14, fontWeight: "bold", color: "#000", marginLeft: 4 }}>{item.email}</Text>
                        </View>

                        {item.name == "" &&
                            <TouchableOpacity activeOpacity={0.7} onPress={() => refRBSheet.current.open()} style={{ backgroundColor: "#FFF", borderRadius: 5, height: 60, justifyContent: 'space-between', marginTop: 5, flexDirection: 'row', alignItems: "center" }}>
                                <View>
                                    <Text style={{ fontSize: 20, fontWeight: "bold", color: "#000", marginLeft: 4 }}>Name</Text>
                                    <Text style={{ fontSize: 14, fontWeight: "bold", color: "#000", marginLeft: 4 }}>{"Please provide your username"}</Text>
                                </View>
                                <Image source={require("../../Images/edit.png")} style={{ height: 20, width: 20, marginRight: 10 }}></Image>
                            </TouchableOpacity>
                        }

                        {item.name != "" &&
                            <View style={{ backgroundColor: "#FFF", borderRadius: 5, height: 60, justifyContent: 'center', marginTop: 5 }}>
                                <Text style={{ fontSize: 20, fontWeight: "bold", color: "#000", marginLeft: 4 }}>Name</Text>
                                <Text style={{ fontSize: 14, fontWeight: "bold", color: "#000", marginLeft: 4 }}>{item.name}</Text>
                            </View>
                        }


                    </View>
                )}
            />


            <RBSheet
                ref={refRBSheet} height={200}>

                <View style={{ width: "100%" }}>
                    <View >
                        <View style={{ justifyContent: "center", padding: 10 }}>
                            <Text style={{ color: "black", fontWeight: "bold", fontSize: 16 }}>{"Update Username"}</Text>
                        </View>
                    </View>

                    <TextInput
                        style={styles.input}
                        placeholder="Name"
                        value={username}
                        onChangeText={setusername}
                    />

                    <TouchableOpacity activeOpacity={0.7} onPress={()=>handleUpdateUser(1,username)} style={{ height: 50, backgroundColor: "#000", width: "95%", alignSelf: "center", justifyContent: 'center' }}>
                        <Text style={{ color: "#FFF", fontSize: 15, alignSelf: "center" }}>UPDATE</Text>
                    </TouchableOpacity>





                </View>
            </RBSheet>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    },
    input: {
        height: 60,
        width: "95%",
        alignSelf: "center",
        borderColor: '#ddd',
        backgroundColor: "#fff",
        borderWidth: 1.5,
        marginBottom: 12,
        paddingHorizontal: 8,
        borderRadius: 5,
        marginTop: 5
    },
});

export default Profile;
