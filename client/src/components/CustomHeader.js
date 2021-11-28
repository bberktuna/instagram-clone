import React from "react"
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  SafeAreaView,
  StatusBar,
  Image,
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
}) => {
  return (
    <View style={styles.containerSize}>
      <View style={{ justifyContent: "flex-start" }}>
        {label ? (
          <Text>{headerLeftLabel} </Text>
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
    marginTop: StatusBar.currentHeight,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 55,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  instaLogo: {
    height: 55,
    width: width / 3,
    resizeMode: "contain",
  },
  icons: {
    width: 27,
    height: 27,
    marginHorizontal: 6,
  },
})
