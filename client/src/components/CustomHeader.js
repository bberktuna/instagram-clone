import React from "react"
import { StyleSheet, Text, View, Dimensions, SafeAreaView } from "react-native"
const width = Dimensions.get("window").width
const height = Dimensions.get("window").height

const CustomHeader = () => {
  return (
    <SafeAreaView stlye={styles.containerSize}>
      <Text>hi</Text>
    </SafeAreaView>
  )
}

export default CustomHeader

const styles = StyleSheet.create({
  containerSize: {
    width: width,
    height: 200, //! problem
    borderWidth: 3,
    borderColor: "red",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
})
