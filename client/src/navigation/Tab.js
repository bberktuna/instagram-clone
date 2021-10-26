import React from "react"

import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs"
import { createStackNavigator } from "@react-navigation/stack"

//import Icon from "react-native-vector-icons/Ionicons"

import Home from "../screens"
import { Image, StyleSheet } from "react-native"

const HomeStack = createStackNavigator()

const BottomTab = createMaterialBottomTabNavigator()

const Tab = () => (
  <BottomTab.Navigator initialRouteName="Home" activeColor="#fff">
    <BottomTab.Screen
      name="Home"
      component={HomeStackScreen}
      options={{
        tabBarLabel: "Home",
        tabBarColor: "#009387",
        tabBarIcon: ({ color }) => (
          // <Icon name="ios-home" color={color} size={26} />
          <Image
            source={require("../../assets/icons/home-filled")}
            style={styles.icon}
          />
        ),
      }}
    />
  </BottomTab.Navigator>
)

export default Tab

const HomeStackScreen = ({ navigation }) => (
  <HomeStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#009387",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <HomeStack.Screen
      name="Home"
      component={Home}
      options={{
        title: "Overview",
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#009387"
            onPress={() => navigation.openDrawer()}
          ></Icon.Button>
        ),
      }}
    />
  </HomeStack.Navigator>
)

const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30,
  },
})
