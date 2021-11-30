//! TODOS !//
//! ADD LOADING WHEN PRESSED
import React from "react"
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  Image,
} from "react-native"

const width = Dimensions.get("window").width
const height = Dimensions.get("window").height

const Button = ({
  backgroundColor,
  textColor,
  onPress,
  buttonText,
  opacity,
  width,
  height,
  borderRadius,
  borderWidth,
  borderColor,
  isButtonText = true,
  iconSource,
  iconWidth,
  iconHeight,
  marginHorizontal,
}) => {
  return (
    <View style={{ marginBottom: 10 }}>
      <TouchableOpacity
        activeOpacity={opacity}
        style={{
          backgroundColor: backgroundColor,
          width: width,
          height: height,
          borderRadius: borderRadius,
          alignItems: "center",
          justifyContent: "center",
          borderWidth: borderWidth,
          borderColor: borderColor,
          marginHorizontal: marginHorizontal,
        }}
        onPress={onPress}
      >
        {isButtonText ? (
          <Text
            style={{
              color: textColor,
              fontWeight: "bold",
            }}
          >
            {buttonText}
          </Text>
        ) : (
          <Image
            source={iconSource}
            style={{ width: iconWidth, height: iconHeight }}
          />
        )}
      </TouchableOpacity>
    </View>
  )
}

export default Button

const styles = StyleSheet.create({})

//
