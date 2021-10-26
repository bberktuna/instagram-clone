import React from "react"

import { createStackNavigator } from "@react-navigation/stack"

import { Splash, ChooseTodo, SignIn, SignUp } from "../screens"

const RootStack = createStackNavigator()

const Root = ({ navigation }) => (
  <RootStack.Navigator headerMode="none">
    <RootStack.Screen name="Splash" component={Splash} />
    <RootStack.Screen name="ChooseTodo" component={ChooseTodo} />
    <RootStack.Screen name="SignUp" component={SignUp} />
    <RootStack.Screen name="SignIn" component={SignIn} />
  </RootStack.Navigator>
)

export default Root
