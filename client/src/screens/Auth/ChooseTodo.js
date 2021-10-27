import React from "react"
import { Image, StyleSheet, Text, View, Dimensions } from "react-native"
import { Button } from "../../components"
const width = Dimensions.get("window").width
const height = Dimensions.get("window").height

const ChooseTodo = ({ navigation }) => {
  const presscnewAccount = () => {
    navigation.navigate("SignUpStack")
  }
  const pressLogin = () => {
    navigation.navigate("SignIn")
  }
  return (
    <View style={styles.container}>
      <View style={styles.nuldeView}>
        <Text style={{ color: "#A8A8A8" }}>English (United States)</Text>
      </View>
      <View style={styles.ersteView}>
        <Image
          source={require("../../../assets/logo/instagram-logo.png")}
          style={styles.logo}
        />
      </View>
      <View style={styles.tweedeView}>
        <Button
          buttonText="Create New Account"
          onPress={presscnewAccount}
          backgroundColor="#0095F6"
          textColor="white"
        />
        <Button buttonText="Log In" onPress={pressLogin} textColor="#0095F6" />
      </View>
    </View>
  )
}

export default ChooseTodo

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  logo: {
    width: width * 0.5,
    height: height * 0.17,
    resizeMode: "contain",
    marginBottom: 20,
  },
  nuldeView: {
    flex: 0.1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  ersteView: {
    flex: 0.4,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  tweedeView: {
    flex: 0.5,
    alignItems: "center",
    justifyContent: "flex-start",
  },
})
