import React from "react"

import { createStackNavigator } from "@react-navigation/stack"

import {
  Splash,
  ChooseTodo,
  SignIn,
  SignUp,
  ConfirmationCode,
  NameAndPassword,
} from "../screens"

const RootStack = createStackNavigator()

const Root = ({ navigation }) => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name="ChooseTodo"
        component={ChooseTodo}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name="Splash"
        component={Splash}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name="SignUpStack"
        component={SignUpStack}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name="SignIn"
        component={SignIn}
        options={{ headerShown: false }}
      />
    </RootStack.Navigator>
  )
}

const _SignUpStack = createStackNavigator()
const SignUpStack = () => {
  return (
    <_SignUpStack.Navigator>
      <_SignUpStack.Screen name="SignUp" component={SignUp} />
      <_SignUpStack.Screen
        name="ConfirmationCode"
        component={ConfirmationCode}
        options={{ headerShown: false }}
      />
      <_SignUpStack.Screen
        name="NameAndPassword"
        component={NameAndPassword}
        options={{ headerShown: false }}
      />
    </_SignUpStack.Navigator>
  )
}
export default Root
