import React from "react"
import { ListView, ScrollView, StyleSheet, Text, View } from "react-native"
import { CustomHeader, Posts, Stories } from "../../components/index"

const Home = () => {
  const onPressIcon1 = () => {
    return
  }
  const onPressIcon2 = () => {
    return
  }
  const onPressIcon3 = () => {
    return
  }
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <CustomHeader
        label={false}
        headerLeftLogo={require("../../../assets/icons/homeHeader/instagram-logo.png")}
        icon1={require("../../../assets/icons/homeHeader/plus-blank.png")}
        icon2={require("../../../assets/icons/homeHeader/heart-blank.png")}
        icon3={require("../../../assets/icons/homeHeader/messenger-blank.png")}
        size1={26}
        size2={26}
        size3={26}
        marginHorizontal1={13}
        marginHorizontal3={13}
        onPressIcon1={onPressIcon1}
        onPressIcon2={onPressIcon2}
        onPressIcon3={onPressIcon3}
      />
      <Posts />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})
