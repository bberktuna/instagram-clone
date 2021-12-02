import React from "react"
import { StyleSheet, Text, View } from "react-native"
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
      <TopProfile
        flex={3}
        profilePicture={USERS[0].profilePicture}
        totalPosts={USERS[0].posts.length}
        followers={USERS[0].followers.length}
        following={USERS[0].following.length}
        fullName={USERS[0].fullName}
        profileBio={USERS[0].profileBio}
      />
      {USERS[0].stories[0] ? <Stories marginTop={20} /> : null}

      <ProfilePosts flex={5} squareImage={USERS[0].posts[0].postImage} />
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({})
