//! BIRTHDAY PICKER WILL BE ADDED !//

import React, { useState } from "react"
import { StyleSheet, Text, View } from "react-native"
import Button from "../../components/Button"

const AddBirthday = ({ navigation, route }) => {
  const [email, username, password] = route.params

  return (
    <View style={styles.container}>
      <Text>DATE PICKER</Text>
      <Button
        backgroundColor="#0095F6"
        textColor="white"
        onPress={() => navigation.navigate("Tab", email, username, password)}
        buttonText="Next"
        opacity={0}
        width={350}
        height={47}
        borderRadius={5}
      />
    </View>
  )
}

export default AddBirthday

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
})

//00376B
