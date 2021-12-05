import React, { useState } from "react"
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native"
import { Stories, TopProfile } from ".."
import { USERS } from "../../dummyData"

const ProfilePosts = ({ flex }) => {
  const [screen, setScreen] = useState({
    postsFlat: true,
    reelsFlat: false,
    taggedFlat: false,
  })
  const { postsFlat, reelsFlat, taggedFlat } = screen
  const onPostsPress = () => {
    setScreen({
      postsFlat: true,
      reelsFlat: false,
      taggedFlat: false,
    })
  }
  const onReelsPress = () => {
    setScreen({
      postsFlat: false,
      reelsFlat: true,
      taggedFlat: false,
    })
  }

  const onTaggedPress = () => {
    setScreen({
      postsFlat: false,
      reelsFlat: false,
      taggedFlat: true,
    })
  }

  const SlideIcons = () => {
    return (
      <View style={styles.topIcons}>
        <TouchableOpacity
          onPress={onPostsPress}
          style={[styles.opacityStyle, postsFlat && { borderBottomWidth: 1 }]}
        >
          <Image
            source={require("../../../assets/icons/profile/grid-blank.png")}
            style={[styles.icon, postsFlat && { tintColor: "black" }]}
          />
        </TouchableOpacity>

        {USERS[0].reels[1] && (
          <TouchableOpacity
            onPress={onReelsPress}
            style={[styles.opacityStyle, reelsFlat && { borderBottomWidth: 1 }]}
          >
            <Image
              source={require("../../../assets/icons/profile/play-blank.png")}
              style={[styles.icon, reelsFlat && { tintColor: "black" }]}
            />
          </TouchableOpacity>
        )}

        <TouchableOpacity
          onPress={onTaggedPress}
          style={[styles.opacityStyle, taggedFlat && { borderBottomWidth: 1 }]}
        >
          <Image
            source={require("../../../assets/icons/profile/tag-blank.png")}
            style={[styles.icon, taggedFlat && { tintColor: "black" }]}
          />
        </TouchableOpacity>
      </View>
    )
  }

  const renderItem = ({ item }) => {
    return (
      <View style={{ margin: 1.5 }}>
        <TouchableOpacity onPress={openImage}>
          <Image
            source={{ uri: USERS[0].posts[0].postImage }}
            style={styles.userPosts}
          />
        </TouchableOpacity>
      </View>
    )
  }

  const openImage = () => {
    return
  }

  const [isRefreshing, setIsRefreshing] = useState(false)
  const _refresh = () => {
    setIsRefreshing(false)
  }
  const onRefresh = () => {
    setIsRefreshing(true)
    _refresh()
  }
  return (
    <View style={{ flex: flex, marginHorizontal: -1.5 }}>
      <View>
        {postsFlat && (
          <FlatList
            ListHeaderComponent={
              <>
                <TopProfile
                  profilePicture={USERS[0].profilePicture}
                  totalPosts={USERS[0].posts.length}
                  followers={USERS[0].followers.length}
                  following={USERS[0].following.length}
                  fullName={USERS[0].fullName}
                  profileBio={USERS[0].profileBio}
                />
                {USERS[0].storyHistory[0] ? <Stories marginTop={20} /> : null}

                <SlideIcons />
              </>
            }
            showsVerticalScrollIndicator={false}
            data={USERS}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            numColumns={3}
            onRefresh={onRefresh}
            refreshing={isRefreshing}
          />
        )}
        {reelsFlat && (
          <FlatList
            ListHeaderComponent={
              <View>
                <TopProfile
                  profilePicture={USERS[0].profilePicture}
                  totalPosts={USERS[0].posts.length}
                  followers={USERS[0].followers.length}
                  following={USERS[0].following.length}
                  fullName={USERS[0].fullName}
                  profileBio={USERS[0].profileBio}
                />
                <SlideIcons />
              </View>
            }
            showsVerticalScrollIndicator={false}
            data={USERS}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            numColumns={3}
            onRefresh={onRefresh}
            refreshing={isRefreshing}
          />
        )}
        {taggedFlat && (
          <FlatList
            ListHeaderComponent={
              <View>
                <TopProfile
                  profilePicture={USERS[0].profilePicture}
                  totalPosts={USERS[0].posts.length}
                  followers={USERS[0].followers.length}
                  following={USERS[0].following.length}
                  fullName={USERS[0].fullName}
                  profileBio={USERS[0].profileBio}
                />
                <SlideIcons />
              </View>
            }
            showsVerticalScrollIndicator={false}
            data={USERS}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            numColumns={3}
            onRefresh={onRefresh}
            refreshing={isRefreshing}
          />
        )}
      </View>
    </View>
  )
}

export default ProfilePosts

const width = Dimensions.get("window").width
const height = Dimensions.get("window").height

const styles = StyleSheet.create({
  topIcons: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 15,
  },
  icon: {
    width: 28,
    height: 28,
    marginBottom: 7,
    tintColor: "gray",
  },

  userPosts: {
    width: width / 3,
    height: height / 6,
  },
  opacityStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
})
