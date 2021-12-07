import React from "react"
import { StyleSheet, Text, View, Dimensions, TextInput } from "react-native"

const CustomTextInput = ({
  placeholder,
  onChangeText,
  value,
  marginBottom,
}) => {
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
        style={[styles.textInput, { marginBottom: marginBottom }]}
        placeholderTextColor="#999999"
      />
    </View>
  )
}

export default CustomTextInput

const width = Dimensions.get("window").width
const height = Dimensions.get("window").height
const styles = StyleSheet.create({
  textInput: {
    backgroundColor: "#FAFAFA",
    borderWidth: 1,
    borderColor: "#DBDBDB",
    width: width * 0.9,
    height: height * 0.06,

    borderRadius: width / 100,
    paddingLeft: 10,
  },
})
