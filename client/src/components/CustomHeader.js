import React from "react"
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  SafeAreaView,
  StatusBar,
  Image,
  TouchableOpacity,
} from "react-native"
const width = Dimensions.get("window").width
const height = Dimensions.get("window").height

const CustomHeader = ({
  headerLeftLabel,
  icon1,
  icon2,
  icon3,
  headerLeftLogo,
  label = true,
  leftIcon1,
  isLeftIcon1 = false,
  leftIcon1OnPress,
  backgroundColor = "white",
}) => {
  return (
    <View style={[styles.containerSize, { backgroundColor: backgroundColor }]}>
      <StatusBar backgroundColor="white" />
      <View style={{ justifyContent: "flex-start", flexDirection: "row" }}>
        {isLeftIcon1 ? (
          <TouchableOpacity onPress={leftIcon1OnPress}>
            <Image source={leftIcon1} style={styles.icons} />
          </TouchableOpacity>
        ) : null}

        {label ? (
          <Text style={styles.labelText}>{headerLeftLabel} </Text>
        ) : (
          <Image source={headerLeftLogo} style={styles.instaLogo} />
        )}
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <Image source={icon1} style={styles.icons} />
        <Image source={icon2} style={styles.icons} />
        <Image source={icon3} style={styles.icons} />
      </View>
    </View>
  )
}

export default CustomHeader

const styles = StyleSheet.create({
  containerSize: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 55,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    zIndex: 5,
  },
  instaLogo: {
    height: 55,
    width: width / 3,
    resizeMode: "contain",
  },
  icons: {
    width: 27,
    height: 27,
    marginHorizontal: 8,
  },
  labelText: {
    fontSize: 22,
    fontWeight: "bold",
    marginLeft: 15,
    marginTop: -2,
  },
})
