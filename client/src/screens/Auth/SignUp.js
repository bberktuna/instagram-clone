import React, { useState } from "react"
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native"
import { WithEmail, WithPhone } from "../../components"

const SignUp = ({ navigation }) => {
  const [pressed, setPressed] = useState(true)
  const [phoneTextColor, setPhoneTextColor] = useState("#000000")
  const [phoneBorderColor, setPhoneBorderColor] = useState("#000000")

  const [emailTextColor, setEmailTextColor] = useState("#A7A7A7")
  const [emailBorderColor, setEmailBorderColor] = useState("#A7A7A7")
  const [whichScreen, setWhichScreen] = useState(true)

  const onPressPhone = () => {
    if (!pressed) {
      setPhoneBorderColor("#000000")
      setPhoneTextColor("#000000")
      setPressed(true)
      console.log("phona basıyom")
      setWhichScreen(true)
      setEmailTextColor("#A7A7A7")
      setEmailBorderColor("#A7A7A7")
    }
  }

  const onPressEmail = () => {
    if (pressed) {
      setPressed(false)
      console.log("emaile basıyom")
      setEmailTextColor("#000000")
      setEmailBorderColor("#000000")
      setWhichScreen(false)
      setPhoneBorderColor("#A7A7A7")
      setPhoneTextColor("#A7A7A7")
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.personIcon}>
        <Image
          source={require("../../../assets/icons/person.png")}
          style={styles.userImage}
        />
      </View>
      <View style={styles.functions}>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            style={[styles.phoneStyle, { borderColor: phoneBorderColor }]}
            onPress={onPressPhone}
          >
            <Text style={[styles.phoneText, { color: phoneTextColor }]}>
              PHONE
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.mailStyle, { borderColor: emailBorderColor }]}
            onPress={onPressEmail}
          >
            <Text style={[styles.mailText, { color: emailTextColor }]}>
              EMAIL
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1 }}>
          {whichScreen ? <WithPhone /> : <WithEmail />}
        </View>
      </View>
      <View style={styles.bottom}>
        <Text style={{ color: "#9A9A9A", fontWeight: "bold" }}>
          Already have an account?
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
          <Text style={{ color: "#043B6E", fontWeight: "bold" }}> Log in.</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default SignUp

const width = Dimensions.get("window").width
const height = Dimensions.get("window").height
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  personIcon: {
    flex: 0.4,

    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: 20,
  },
  functions: {
    flex: 0.53,

    justifyContent: "center",
    alignItems: "center",
  },
  bottom: {
    flex: 0.07,
    borderTopWidth: 1.5,
    borderColor: "#E5E5E5",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  userImage: {
    resizeMode: "contain",
    width: width / 2.5,
    height: height * 0.2,
  },
  phoneStyle: {
    borderBottomWidth: 1.5,
    justifyContent: "center",
    alignItems: "center",
    width: width / 2,
    borderColor: "#000000",
  },
  mailStyle: {
    borderBottomWidth: 1.5,
    justifyContent: "center",
    alignItems: "center",
    width: width / 2.5,
    borderColor: "#A7A7A7",
  },
  phoneText: {
    color: "#000000",
    fontWeight: "bold",
    marginBottom: 15,
  },
  emailText: {
    color: "#A7A7A7",
    fontWeight: "bold",
    marginBottom: 15,
  },
})
