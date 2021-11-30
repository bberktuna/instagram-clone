import React from "react"
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native"

const GradientPicture = ({
  profilePicture,
  onPress,
  pictureSizes,
  gradientSizes,
  marginLeft,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <ImageBackground
        source={require("../../assets/gradient.jpeg")}
        style={{
          width: gradientSizes,
          height: gradientSizes,
          overflow: "hidden",
          borderRadius: gradientSizes,
          marginLeft: marginLeft,
        }}
      >
        <Image
          source={{ uri: profilePicture }}
          style={{
            width: pictureSizes,
            height: pictureSizes,
            borderRadius: pictureSizes,
            borderWidth: 3,
            borderColor: "white",
            marginTop: 2,
            marginLeft: 2,
          }}
        />
      </ImageBackground>
    </TouchableOpacity>
  )
}

export default GradientPicture

const styles = StyleSheet.create({})
