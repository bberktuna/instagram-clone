import React from "react"
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from "react-native"

const width = Dimensions.get("window").width
const height = Dimensions.get("window").height

const Button = ({ backgroundColor, textColor, onPress, buttonText }) => {
  return (
    <View style={{ marginBottom: 10 }}>
      <TouchableOpacity
        style={{
          backgroundColor: backgroundColor,
          width: width * 0.9,
          height: height * 0.07,
          borderRadius: width / 100,
          alignItems: "center",
          justifyContent: "center",
        }}
        onPress={onPress}
      >
        <Text
          style={{
            color: textColor,
            fontWeight: "bold",
          }}
        >
          {buttonText}
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default Button

const styles = StyleSheet.create({})

//
