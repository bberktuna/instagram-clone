import React from "react"

import { NavigationContainer } from "@react-navigation/native"

import { Root, Tab } from "./src/navigation"
import { View } from "react-native"

const App = () => {
  const userToken = null

  return (
    <NavigationContainer>
      {userToken !== null ? <Tab /> : <Root />}
    </NavigationContainer>
  )
}

export default App
