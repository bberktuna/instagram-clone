import React from "react"

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { createStackNavigator } from "@react-navigation/stack"

//import Icon from "react-native-vector-icons/Ionicons"

import { Image, StyleSheet, TouchableOpacity, View } from "react-native"
import { Home, Search, Reels, Shop, Profile } from "../screens"

const BottomTab = createBottomTabNavigator()

const Tab = () => (
  <BottomTab.Navigator
    initialRouteName="Home"
    screenOptions={{ tabBarShowLabel: false, headerShown: false }}
  >
    <BottomTab.Screen
      name="Home"
      component={Home}
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

        // headerRight: ({}) => (
        //   <View style={styles.homeHeaderRight}>
        //     <TouchableOpacity>
        //       <Image
        //         source={require("../../assets/icons/homeHeader/plus-blank.png")}
        //         style={styles.homeHeaderRightIcon}
        //       />
        //     </TouchableOpacity>

        //     <TouchableOpacity>
        //       <Image
        //         source={require("../../assets/icons/homeHeader/heart-blank.png")}
        //         style={styles.homeHeaderRightIcon}
        //       />
        //     </TouchableOpacity>

        //     <TouchableOpacity>
        //       <Image
        //         source={require("../../assets/icons/homeHeader/messenger-blank.png")}
        //         style={styles.homeHeaderRightIcon}
        //       />
        //     </TouchableOpacity>
        //   </View>
        // ),
        // headerLeft: () => (
        //   <TouchableOpacity>
        //     <Image
        //       source={require("../../assets/icons/homeHeader/instagram-logo.png")}
        //       style={styles.instagramLogo}
        //     />
        //   </TouchableOpacity>
        // ),
      }}
    />
    <BottomTab.Screen
      name="Search"
      component={Search}
      options={{
        tabBarIcon: ({ focused }) => (
          <Image
            source={
              focused
                ? require("../../assets/icons/tabBarIcons/search-filled.png")
                : require("../../assets/icons/tabBarIcons/search-blank.png")
            }
            style={styles.icon}
          />
        ),
      }}
    />
    <BottomTab.Screen
      name="Reels"
      component={Reels}
      options={{
        tabBarIcon: () => (
          <Image
            source={require("../../assets/icons/tabBarIcons/reels.png")}
            style={styles.icon}
          />
        ),
      }}
    />
    <BottomTab.Screen
      name="Shop"
      component={Shop}
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
      name="Profile"
      component={Profile}
      options={{
        tabBarIcon: ({ focused }) => (
          <Image
            source={require("../../assets/icons/user.png")}
            style={styles.icon}
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
      <_HomeStack.Screen name="Home" component={Home} />
    </_HomeStack.Navigator>
  )
}

const SearchStack = () => {
  return (
    <_SearchStack.Navigator>
      <_SearchStack.Screen name="Search" component={Search} />
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
      <_ShopStack.Screen name="Shop" component={Shop} />
    </_ShopStack.Navigator>
  )
}

const ProfileStack = () => {
  return (
    <_ProfileStack.Navigator>
      <_ProfileStack.Screen name="Profile" component={Profile} />
    </_ProfileStack.Navigator>
  )
}

const styles = StyleSheet.create({
  icon: {
    width: 25,
    height: 25,
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
})
