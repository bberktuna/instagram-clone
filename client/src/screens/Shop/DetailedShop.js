import React from "react"
import { StyleSheet, Text, View } from "react-native"
import { SearchBar } from "../../components"

const DetailedShop = () => {
  return (
    <View style={{ backgroundColor: "white", height: "100%" }}>
      <SearchBar placeholder="Search shops" />
    </View>
  )
}

export default DetailedShop

const styles = StyleSheet.create({})
