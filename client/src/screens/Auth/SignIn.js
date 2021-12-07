import React, { useState } from "react"
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  StatusBar,
} from "react-native"
import { Button, CustomTextInput } from "../../components"

const width = Dimensions.get("window").width
const height = Dimensions.get("window").height

const SignIn = ({ navigation }) => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={{ color: "#A8A8A8" }}>English (United States)</Text>
      </View>
      <View style={styles.mid}>
        <Image
          source={require("../../../assets/logo/instagram-logo.png")}
          style={styles.logo}
        />
        <CustomTextInput
          autoCapitalize="none"
          autoComplete="off"
          autoCorrect={false}
          value={username}
          onChangeText={(text) => setUsername(text)}
          placeholder="Phone number, email or username"
          placeholderTextColor="#A2A2A2"
          marginBottom={20}
        />
        <CustomTextInput
          autoCapitalize="none"
          autoComplete="off"
          autoCorrect={false}
          value={password}
          onChangeText={(text) => setPassword(text)}
          placeholder="Password"
          placeholderTextColor="#A2A2A2"
          marginBottom={20}
        />
        <Button
          backgroundColor={username ? "#0095F6" : "#B2DFFC"}
          textColor={username ? "white" : "#C7E8FD"}
          onPress={() => navigation.navigate("Tab", { username })}
          buttonText="Log in"
          opacity={username ? 0 : 1}
          width={350}
          height={47}
          borderRadius={5}
        />
        <View
          style={{
            alignSelf: "center",
            flexDirection: "row",
            marginVertical: 3,
          }}
        >
          <Text style={styles.forgot}>Forgot your login details?</Text>
          <TouchableOpacity>
            <Text style={styles.getHelp}>Get help logging in.</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.borderscontainer}>
          <View style={styles.borders}></View>
          <Text
            style={{
              marginHorizontal: 10,
              color: "#999999",
              fontWeight: "bold",
            }}
          >
            OR
          </Text>
          <View style={styles.borders}></View>
        </View>
        <TouchableOpacity
          style={{ flexDirection: "row", alignItems: "center", marginTop: 15 }}
        >
          <Image
            source={require("../../../assets/icons/facebook.png")}
            style={styles.facebookLogo}
          />
          <Text style={styles.withFacebook}>Log in with Facebook</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bottom}>
        <Text style={styles.forgot}>Don't have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("SignUpStack")}>
          <Text style={styles.getHelp}>Sign up.</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default SignIn

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white" },
  borders: {
    borderBottomWidth: 0.5,
    width: width * 0.39,
    marginBottom: 7,
    borderBottomColor: "#999999",
  },
  borderscontainer: {
    width: width * 0.9,
    flexDirection: "row",
    marginTop: 15,
  },
  top: {
    flex: 1,

    alignItems: "center",
    justifyContent: "center",
  },
  mid: {
    flex: 8.2,
    alignItems: "center",
  },
  logo: {
    width: width * 0.5,
    height: height * 0.17,
    resizeMode: "contain",
  },
  bottom: {
    flex: 0.8,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderTopColor: "#999999",
    borderTopWidth: 0.5,
  },
  forgot: {
    color: "#999999",
    fontSize: 13,
  },
  getHelp: {
    color: "#00376B",
    fontWeight: "bold",
    marginLeft: 3,
    fontSize: 13,
  },
  withFacebook: {
    color: "#0095F6",
    fontWeight: "bold",
  },
  facebookLogo: {
    width: 32,
    height: 32,
    marginRight: 5,
  },
})
