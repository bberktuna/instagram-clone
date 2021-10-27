import React from "react"

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { createStackNavigator } from "@react-navigation/stack"

//import Icon from "react-native-vector-icons/Ionicons"

import { Home } from "../screens"
import { Image, StyleSheet } from "react-native"

const BottomTab = createBottomTabNavigator()

const Tab = () => (
  <BottomTab.Navigator initialRouteName="Home" activeColor="#fff">
    <BottomTab.Screen
      name="Home"
      component={Home}
      options={{
        tabBarLabel: "Home",
        tabBarColor: "#009387",
        tabBarIcon: ({ color }) => (
          <Image
            source={require("../../assets/icons/home-filled.png")}
            style={styles.icon}
          />
        ),
      }}
    />
  </BottomTab.Navigator>
)

export default Tab

const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30,
  },
})
