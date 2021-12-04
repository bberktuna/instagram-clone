//! TODOS !//
//! IF PLACES ARE EMPTY SHOW THE TEXT MESSAGE ELSE SHOW PLACES

import React from "react"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"

const PlacesSlide = () => {
  const places = false

  return (
    <View style={styles.container}>
      <Text style={{ fontWeight: "bold", marginTop: 30, fontSize: 18 }}>
        Share Your Location with Instagram
      </Text>
      <Text
        style={{ textAlign: "center", marginVertical: 10, color: "#999999" }}
      >
        This lets you choose whether to share where you took photos and videos,
        find locations near your, and more. You can always change this later in
        your phone's settings.
      </Text>
      <TouchableOpacity>
        <Text style={{ color: "#0095F6" }}>Turn On</Text>
      </TouchableOpacity>
    </View>
  )
}

export default PlacesSlide

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginHorizontal: 30,
  },
})
