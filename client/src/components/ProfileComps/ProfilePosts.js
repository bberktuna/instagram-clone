import React, { useState } from "react"
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import PostsSlide from "./PostsSlide"
import ReelsSlide from "./ReelsSlide"
import TaggedSlide from "./TaggedSlide"

const ProfilePosts = ({ flex, squareImage }) => {
  const [screen, setScreen] = useState({
    postsFlat: true,
    reelsFlat: false,
    taggedFlat: false,
    postsBDW: 1,
    postsIC: "black",
  })
  const {
    postsFlat,
    reelsFlat,
    taggedFlat,
    postsBDW,
    reelsBDW,
    taggedBDW,
    postsIC,
    reelsIC,
    taggedIC,
  } = screen
  const onPostsPress = () => {
    setScreen({
      postsFlat: true,
      reelsFlat: false,
      taggedFlat: false,
      postsBDW: 1,
      reelsBDW: 0,
      taggedBDW: 0,
      postsIC: "black",
      reelsIC: "gray",
      taggedIC: "gray",
    })
  }
  const onReelsPress = () => {
    setScreen({
      postsFlat: false,
      reelsFlat: true,
      taggedFlat: false,
      postsBDW: 0,
      reelsBDW: 1,
      taggedBDW: 0,
      postsIC: "gray",
      reelsIC: "black",
      taggedIC: "gray",
    })
  }

  const onTaggedPress = () => {
    setScreen({
      postsFlat: false,
      reelsFlat: false,
      taggedFlat: true,
      postsBDW: 0,
      reelsBDW: 0,
      taggedBDW: 1,
      postsIC: "gray",
      reelsIC: "gray",
      taggedIC: "black",
    })
  }

  return (
    <View style={{ flex: flex }}>
      <View style={styles.topIcons}>
        <TouchableOpacity
          onPress={onPostsPress}
          style={{ borderBottomWidth: postsBDW }}
        >
          <Image
            source={require("../../../assets/icons/profile/grid-blank.png")}
            style={[styles.icon, { tintColor: postsIC }]}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onReelsPress}
          style={{ borderBottomWidth: reelsBDW }}
        >
          <Image
            source={require("../../../assets/icons/profile/play-blank.png")}
            style={[styles.icon, { tintColor: reelsIC }]}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onTaggedPress}
          style={{ borderBottomWidth: taggedBDW }}
        >
          <Image
            source={require("../../../assets/icons/profile/tag-blank.png")}
            style={[styles.icon, { tintColor: taggedIC }]}
          />
        </TouchableOpacity>
      </View>
      <View>
        {postsFlat ? <PostsSlide squareImage={squareImage} /> : null}
        {reelsFlat ? <ReelsSlide /> : null}
        {taggedFlat ? <TaggedSlide /> : null}
      </View>
    </View>
  )
}

export default ProfilePosts

const styles = StyleSheet.create({
  topIcons: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 15,
  },
  icon: {
    width: 28,
    height: 28,
    marginHorizontal: 50,
    marginBottom: 7,
  },
})
