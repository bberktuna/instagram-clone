import React from "react"

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { createStackNavigator } from "@react-navigation/stack"

import { Image, StyleSheet, TouchableOpacity, View } from "react-native"
import {
  Home,
  Search,
  Reels,
  Shop,
  Profile,
  Comments,
  DetailedSearch,
  DetailedShop,
} from "../screens"
import { OpenImage } from "../components"

const BottomTab = createBottomTabNavigator()

const Tab = () => (
  <BottomTab.Navigator
    initialRouteName="Home"
    screenOptions={{
      tabBarShowLabel: false,
      headerShown: false,
    }}
  >
    <BottomTab.Screen
      name="HomeStack"
      component={HomeStack}
      options={{
        tabBarIcon: ({ focused }) => (
          <Image
            source={
              focused
                ? require("../../assets/icons/tabBarIcons/home-filled.png")
                : require("../../assets/icons/tabBarIcons/home-blank.png")
            }
            style={styles.icon}
          />
        ),
      }}
    />
    <BottomTab.Screen
      name="SearchStack"
      component={SearchStack}
      options={{
        tabBarIcon: ({ focused }) => (
          <Image
            source={
              focused
                ? require("../../assets/icons/tabBarIcons/search-filled.png")
                : require("../../assets/icons/tabBarIcons/search-blank.png")
            }
            style={[styles.icon, { width: 30, height: 30 }]}
          />
        ),
      }}
    />
    <BottomTab.Screen
      name="Reels"
      component={Reels}
      options={{
        tabBarIcon: ({ focused }) => (
          <Image
            source={require("../../assets/icons/tabBarIcons/reels-filled.png")}
            style={[styles.icon, { width: 23, height: 23 }]}
          />
        ),
      }}
    />
    <BottomTab.Screen
      name="ShopStack"
      component={ShopStack}
      options={{
        tabBarIcon: ({ focused }) => (
          <Image
            source={
              focused
                ? require("../../assets/icons/tabBarIcons/shop-filled.png")
                : require("../../assets/icons/tabBarIcons/shop-blank.png")
            }
            style={styles.icon}
          />
        ),
      }}
    />
    <BottomTab.Screen
      name="ProfileStack"
      component={ProfileStack}
      options={{
        tabBarIcon: ({ focused }) => (
          <Image
            source={require("../../assets/empty-profile.jpg")}
            style={focused ? styles.focusedProfile : styles.icon}
          />
        ),
      }}
    />
  </BottomTab.Navigator>
)

export default Tab

const _HomeStack = createStackNavigator()
const _SearchStack = createBottomTabNavigator()
const _ProfileStack = createBottomTabNavigator()
const _ReelsStack = createBottomTabNavigator()
const _ShopStack = createBottomTabNavigator()

const HomeStack = () => {
  return (
    <_HomeStack.Navigator>
      <_HomeStack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <_HomeStack.Screen
        name="Comments"
        component={Comments}
        options={{ headerShown: false, tabBarStyle: { display: "none" } }}
      />
    </_HomeStack.Navigator>
  )
}

const SearchStack = () => {
  return (
    <_SearchStack.Navigator>
      <_SearchStack.Screen
        name="Search"
        component={Search}
        options={{ headerShown: false, tabBarStyle: { display: "none" } }}
      />
      <_SearchStack.Screen
        name="DetailedSearch"
        component={DetailedSearch}
        options={{ headerShown: false, tabBarStyle: { display: "none" } }}
      />
      <_SearchStack.Screen
        name="OpenImage"
        component={OpenImage}
        options={{ headerShown: false, tabBarStyle: { display: "none" } }}
      />
    </_SearchStack.Navigator>
  )
}

const ReelsStack = () => {
  return (
    <_ReelsStack.Navigator>
      <_ReelsStack.Screen name="Reels" component={Reels} />
    </_ReelsStack.Navigator>
  )
}

const ShopStack = () => {
  return (
    <_ShopStack.Navigator>
      <_ShopStack.Screen
        name="Shop"
        component={Shop}
        options={{ headerShown: false, tabBarStyle: { display: "none" } }}
      />
      <_ShopStack.Screen
        name="DetailedShop"
        component={DetailedShop}
        options={{ headerShown: false, tabBarStyle: { display: "none" } }}
      />
    </_ShopStack.Navigator>
  )
}

const ProfileStack = () => {
  return (
    <_ProfileStack.Navigator>
      <_ProfileStack.Screen
        name="Profile"
        component={Profile}
        options={{ tabBarStyle: { display: "none" }, headerShown: false }}
      />
    </_ProfileStack.Navigator>
  )
}

const styles = StyleSheet.create({
  icon: {
    width: 27,
    height: 27,
  },
  homeHeaderRight: {
    flexDirection: "row",
  },
  homeHeaderRightIcon: {
    width: 27,
    height: 27,
    marginHorizontal: 8,
  },
  instagramLogo: {
    width: 27,
    resizeMode: "contain",
    height: 100,
  },
  focusedProfile: {
    width: 27,
    height: 27,
    borderWidth: 2,
    borderRadius: 26,
    borderColor: "black",
  },
})
