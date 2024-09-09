import React, { useEffect } from 'react'
import { ActivityIndicator, Text, View , Image, StyleSheet} from 'react-native'

const Splash = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Login")
    }, 3000);
  }, [])

  return (
    <View style={styles.container}>
      <Image source={require("../Images/aqad-logo-1.png")} style={styles.imageStyle}></Image>
      <ActivityIndicator animating={true} color={"#000"}></ActivityIndicator>
    </View>
  )
}


const styles = StyleSheet.create({
  container:{ flex: 1, backgroundColor: "#FFF", justifyContent: "center" },
  imageStyle:{height:60, width:200, alignSelf:"center", resizeMode:"contain"}
});

export default Splash;
