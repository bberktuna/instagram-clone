//! TODOS !//
//! CHECK IF EMAIL IS VALID
//! IF ITS NOT SHOW NOT VALID TEXT AND RED BORDER
import React, { useState } from "react"
import { StyleSheet, Text, TextInput, View, Dimensions } from "react-native"
import { useNavigation } from "@react-navigation/native"

import Button from "../Button"

const WithEmail = () => {
  const navigation = useNavigation()

  const [email, setEmail] = useState("")

  const onChangeEmail = () => {}

  return (
    <View style={{ flex: 1 }}>
      <TextInput
        autoCapitalize="none"
        autoComplete="off"
        autoCorrect={false}
        value={email}
        onChangeText={(text) => setEmail(text)}
        placeholder="Email"
        placeholderTextColor="#A2A2A2"
        style={styles.textInput}
      />
      <Button
        backgroundColor={email ? "#0095F6" : "#B2DFFC"}
        textColor={email ? "white" : "#C7E8FD"}
        onPress={() => navigation.navigate("ConfirmationCode", email)}
        buttonText="Next"
        opacity={email ? 0 : 1}
        width={350}
        height={47}
        borderRadius={5}
      />
    </View>
  )
}

export default WithEmail
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

// CCCCC
// FAFAFA
// text a2a2a2
// bottomtext b2b2b2
// b2dffc
// c8e8fd
// 4d7398
