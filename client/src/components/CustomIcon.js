import React from "react"
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"

const CustomIcon = ({
  source,
  size,
  tintColor,
  onPressIcon,
  marginLeft,
  marginRight,
  marginTop,
  marginBottom,
  marginVertical,
  marginHorizontal,
}) => {
  return (
    <TouchableOpacity onPress={onPressIcon}>
      <Image
        source={source}
        style={{
          width: size,
          height: size,
          tintColor: tintColor,
          marginLeft: marginLeft,
          marginRight: marginRight,
          marginTop: marginTop,
          marginBottom: marginBottom,
          marginHorizontal: marginHorizontal,
          marginVertical: marginVertical,
        }}
      />
    </TouchableOpacity>
  )
}

export default CustomIcon

const styles = StyleSheet.create({})
