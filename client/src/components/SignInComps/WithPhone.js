//! TODOS !//
//! CHECK IF PHONE IS VALID
//! IF ITS NOT SHOW NOT VALID TEXT AND RED BORDER
//! ADD COUNTRY CODE PICKER
import React, { useState } from "react"
import { StyleSheet, Text, TextInput, View, Dimensions } from "react-native"
import Button from "../Button"

const WithPhone = ({ navigation }) => {
  const [phone, setPhone] = useState("")
  const [pressable, setPressable] = useState(false)

  const onChangeEmail = () => {}
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <TextInput
        autoCapitalize="none"
        autoComplete="off"
        autoCorrect={false}
        value={phone}
        onChangeText={(text) => setPhone(text)}
        placeholder="Phone"
        placeholderTextColor="#A2A2A2"
        style={styles.textInput}
      />
      <View style={{ alignItems: "center" }}>
        <Text style={{ color: "#9A9A9A", fontSize: 12.5 }}>
          You may receive SMS updates from Instagram and can opt out
        </Text>
      </View>

      <View style={{ alignItems: "center", marginBottom: 20 }}>
        <Text style={{ color: "#9A9A9A", fontSize: 12.5 }}>at any time.</Text>
      </View>

      <Button
        backgroundColor={phone ? "#0095F6" : "#B2DFFC"}
        textColor={phone ? "white" : "#C7E8FD"}
        onPress={console.log("bastım")}
        buttonText="Next"
        opacity={phone ? 0 : 1}
        width={350}
        height={47}
        borderRadius={5}
      />
    </View>
  )
}

export default WithPhone

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
