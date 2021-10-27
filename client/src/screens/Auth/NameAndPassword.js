//! TODOS !//
//! ADD ERROR ALERTS
//! PASSWORDS MUST BE AT LEAST 6 CHARACTERS
import React, { useState } from "react"
import { StyleSheet, Text, View, StatusBar } from "react-native"
import { CustomTextInput, Button } from "../../components"
import BouncyCheckbox from "react-native-bouncy-checkbox"

const NameAndPassword = ({ navigation, route }) => {
  const email = route.params
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [checkboxState, setCheckboxState] = useState(false)

  return (
    <View
      style={{
        flex: 1,
        marginTop: 3 * StatusBar.currentHeight,
        alignItems: "center",
      }}
    >
      <View style={{ flex: 0.8 }}>
        <View style={{ alignItems: "center" }}>
          <Text style={{ fontWeight: "bold" }}>NAME AND PASSWORD</Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <View>
            <CustomTextInput
              value={name}
              placeholder="Full name"
              onChangeText={(text) => setName(text)}
            />
          </View>
          <View style={{ marginTop: -20 }}>
            <CustomTextInput
              value={password}
              placeholder="Password"
              onChangeText={(text) => setPassword(text)}
            />
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            marginLeft: 5,
            alignItems: "center",
            alignSelf: "flex-start",
          }}
        >
          <BouncyCheckbox
            size={25}
            fillColor="#0095F6"
            unfillColor="#E8E8E8"
            iconStyle={{ borderColor: "#CCCCCC" }}
            onPress={() => setCheckboxState(!checkboxState)}
          />
          <Text
            style={{
              color: "#A2A2A2",
              fontWeight: "bold",
            }}
          >
            Remember password
          </Text>
          {checkboxState ? console.log("true") : console.log("false")}
        </View>
        <View style={{ marginTop: 30 }}>
          <Button
            backgroundColor={name && password ? "#0095F6" : "#B2DFFC"}
            textColor={name && password ? "white" : "#C7E8FD"}
            onPress={() => navigation.navigate("ConfirmationCode", email)}
            buttonText="Continue and Sync Contacts"
            opacity={name && password ? 0 : 1}
          />
          <Button
            textColor={name && password ? "#0095F6" : "#b2dffc"}
            onPress={() => navigation.navigate("ConfirmationCode", email)}
            buttonText="Continue Without Syncing Contacts"
            opacity={name && password ? 0 : 1}
          />
        </View>
      </View>
      <View
        style={{
          flex: 0.2,
          alignItems: "center",
          justifyContent: "center",
          marginHorizontal: 20,
        }}
      >
        <Text style={{ color: "#9A9A9A", textAlign: "center" }}>
          Your contacts will be periodically synced and stored on Instagram
          servers to help you and others find frineds, and to help us provide a
          better service. To remove contacts, go to Settings and disconnect.
          <Text style={{ color: "#999999", fontWeight: "bold" }}>
            {" "}
            Learn More.
          </Text>
        </Text>
      </View>
    </View>
  )
}
//ffffff
//b2dffc
export default NameAndPassword

const styles = StyleSheet.create({})
