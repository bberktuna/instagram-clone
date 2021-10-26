import React, { useEffect } from "react"
import { View, ActivityIndicator } from "react-native"
import {
  NavigationContainer,
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme,
} from "@react-navigation/native"
import { createDrawerNavigator } from "@react-navigation/drawer"

import {
  Provider as PaperProvider,
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme,
} from "react-native-paper"

import { AuthContext } from "./src/context/context"

import { Root, Tab } from "./src/navigation"

import AsyncStorage from "@react-native-community/async-storage"

const Drawer = createDrawerNavigator()

const App = () => {
  // const [isLoading, setIsLoading] = React.useState(true);
  // const [userToken, setUserToken] = React.useState(null);

  const [isDarkTheme, setIsDarkTheme] = React.useState(false)

  const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null,
  }

  const CustomDefaultTheme = {
    ...NavigationDefaultTheme,
    ...PaperDefaultTheme,
    colors: {
      ...NavigationDefaultTheme.colors,
      ...PaperDefaultTheme.colors,
      background: "#ffffff",
      text: "#333333",
    },
  }

  const CustomDarkTheme = {
    ...NavigationDarkTheme,
    ...PaperDarkTheme,
    colors: {
      ...NavigationDarkTheme.colors,
      ...PaperDarkTheme.colors,
      background: "#333333",
      text: "#ffffff",
    },
  }

  const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme

  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case "RETRIEVE_TOKEN":
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        }
      case "LOGIN":
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        }
      case "LOGOUT":
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isLoading: false,
        }
      case "REGISTER":
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        }
    }
  }

  const [loginState, dispatch] = React.useReducer(
    loginReducer,
    initialLoginState
  )

  const authContext = React.useMemo(
    () => ({
      signIn: async (foundUser) => {
        // setUserToken('fgkj');
        // setIsLoading(false);
        const userToken = String(foundUser[0].userToken)
        const userName = foundUser[0].username

        try {
          await AsyncStorage.setItem("userToken", userToken)
        } catch (e) {
          console.log(e)
        }
        // console.log('user token: ', userToken);
        dispatch({ type: "LOGIN", id: userName, token: userToken })
      },
      signOut: async () => {
        // setUserToken(null);
        // setIsLoading(false);
        try {
          await AsyncStorage.removeItem("userToken")
        } catch (e) {
          console.log(e)
        }
        dispatch({ type: "LOGOUT" })
      },
      signUp: () => {
        // setUserToken('fgkj');
        // setIsLoading(false);
      },
      toggleTheme: () => {
        setIsDarkTheme((isDarkTheme) => !isDarkTheme)
      },
    }),
    []
  )

  useEffect(() => {
    setTimeout(async () => {
      // setIsLoading(false);
      let userToken
      userToken = null
      try {
        userToken = await AsyncStorage.getItem("userToken")
      } catch (e) {
        console.log(e)
      }
      // console.log('user token: ', userToken);
      dispatch({ type: "RETRIEVE_TOKEN", token: userToken })
    }, 1000)
  }, [])

  if (loginState.isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    )
  }
  return (
    <PaperProvider theme={theme}>
      <AuthContext.Provider value={authContext}>
        <NavigationContainer theme={theme}>
          {loginState.userToken !== null ? <Tab /> : <Root />}
        </NavigationContainer>
      </AuthContext.Provider>
    </PaperProvider>
  )
}

export default App

/*import { StatusBar } from "expo-status-bar"
import React from "react"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import {
  DefaultTheme,
  DarkTheme,
  Provider as PaperProvider,
} from "react-native-paper"

import ChooseTodo from "./src/screens/Auth/ChooseTodo"

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: "#3498db",
    accent: "#f1c40f",
  },
  dark: true,
}

export default function App() {
  const darkMode = () => {
    return
  }
  return <ChooseTodo />
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
})

/*
    <PaperProvider theme={theme}>
      <View style={styles.container}>
        <TouchableOpacity onPress={darkMode()}>
          <Text>dark mode</Text>
        </TouchableOpacity>

        <StatusBar style="auto" />
      </View>
    </PaperProvider>
    */
