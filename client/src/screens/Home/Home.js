import React from "react"
import { StyleSheet, Text, View } from "react-native"
import { CustomHeader, Stories } from "../../components/index"

const Home = () => {
  return (
    <View>
      <CustomHeader
        label={false}
        headerLeftLogo={require("../../../assets/icons/homeHeader/instagram-logo.png")}
        icon1={require("../../../assets/icons/homeHeader/plus-blank.png")}
        icon2={require("../../../assets/icons/homeHeader/heart-blank.png")}
        icon3={require("../../../assets/icons/homeHeader/messenger-blank.png")}
      />
      <Stories />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})
