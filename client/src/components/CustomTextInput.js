import React from "react"
import { StyleSheet, Text, View, Dimensions, TextInput } from "react-native"

const CustomTextInput = ({ placeholder, onChangeText, value }) => {
  return (
    <View>
      <TextInput
        autoCapitalize="none"
        autoComplete="off"
        autoCorrect={false}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="#A2A2A2"
        style={styles.textInput}
      />
    </View>
  )
}

export default CustomTextInput

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
