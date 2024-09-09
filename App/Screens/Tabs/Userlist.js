
import React, { useEffect } from 'react';
import { View, Text, StyleSheet,BackHandler, Alert, FlatList } from 'react-native';

const Userlist = ({ navigation }) => {

    const userData = [
        {
            id: 1,
            name: "ram",
            email: "ram@gmail.com"
        },
        {
            id: 2,
            name: "rama",
            email: "rama@gmail.com"
        },
        {
            id: 3,
            name: "ramaa",
            email: "ramaa@gmail.com"
        }
    ]

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
            <Text style={{ fontSize: 16 }}>Showing just static list of users for demo purpose.</Text>
            <Text style={{ fontSize: 16 }}>To check Signed up users, for that we need firebase storage database and need to create collections, for this backend api will needed.</Text>

            <FlatList
                style={{marginTop:10}}
                data={userData}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => (
                    <View>
                        <View style={{ backgroundColor: "#FFF", borderRadius: 5, height: 60, justifyContent: 'center', marginTop: 4 }}>
                            <Text style={{ fontSize: 20, fontWeight: "bold", color: "#000", marginLeft: 4 }}>{item.name}</Text>
                            <Text style={{ fontSize: 14, fontWeight: "bold", color: "#000", marginLeft: 4 }}>{item.email}</Text>
                        </View>

                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
});

export default Userlist;
