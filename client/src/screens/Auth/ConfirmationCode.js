//! TODOS !//
//! CHECK IF THE CODE CORRECT OR NOT

import React, { useState } from "react"
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  TextInput,
  StatusBar,
} from "react-native"
import { Button } from "../../components"

const ConfirmationCode = ({ navigation, route }) => {
  const [code, setCode] = useState("")
  const email = route.params
  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: "center",
        marginTop: 3 * StatusBar.currentHeight,
      }}
    >
      <View>
        <Text style={{ fontWeight: "bold", marginBottom: 20 }}>
          ENTER CONFIRMATION CODE
        </Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <Text>Enter the confirmation code fwe sent to {email}. </Text>
        <TouchableOpacity>
          <Text style={{ color: "#249FF7" }}> Resend Code.</Text>
        </TouchableOpacity>
      </View>

      <TextInput
        autoCapitalize="none"
        autoComplete="off"
        autoCorrect={false}
        value={code}
        onChangeText={(text) => setCode(text)}
        placeholder="Confirmation Code"
        placeholderTextColor="#A2A2A2"
        style={styles.textInput}
      />

      <Button
        backgroundColor={code ? "#0095F6" : "#B2DFFC"}
        textColor={code ? "white" : "#C7E8FD"}
        onPress={() => navigation.navigate("NameAndPassword", email)}
        buttonText="Next"
        opacity={code ? 0 : 1}
      />
    </SafeAreaView>
  )
}

export default ConfirmationCode

const width = Dimensions.get("window").width
const height = Dimensions.get("window").height
const styles = StyleSheet.create({
  textInput: {
    backgroundColor: "#E8E8E8",
    borderWidth: 1,
    borderColor: "#CCCCCC",
    width: width * 0.9,
    height: height * 0.06,
    marginVertical: 20,
    borderRadius: width / 100,
    paddingLeft: 10,
  },
})
