import React from "react"
import { ScrollView, StyleSheet, Text, View } from "react-native"
import {
  CustomHeader,
  ProfilePosts,
  Stories,
  TopProfile,
} from "../../components"
import { USERS } from "../../dummyData"

const Profile = () => {
  console.log(USERS[0].posts.length)
  console.log(USERS[0].posts[0].postImage)

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <CustomHeader
        isLeftIcon1={true}
        leftIcon1={require("../../../assets/icons/profile/back.png")}
        headerLeftLabel={USERS[0].username}
        icon3={require("../../../assets/icons/postIcons/menu-vertical.png")}
      />

      <ProfilePosts />
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({})
