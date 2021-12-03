import React, { useState } from "react"
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { USERS } from "../../dummyData/USERS"
import { useNavigation } from "@react-navigation/native"
import { GradientPicture } from ".."

const Post = ({
  profilePicture,
  route,
  username,
  postImage,
  postLikes,
  postText,
  commentNumber,
}) => {
  const navigation = useNavigation()
  const [isPostLiked, setIsPostLiked] = useState(false)
  const [isBookmarked, setIsBookmarked] = useState(false)
  const onPostLike = () => {
    setIsPostLiked(isPostLiked ? false : true)
  }
  const onPressComments = () => {
    navigation.navigate("Comments")
  }
  const onPressBookmarks = () => {
    setIsBookmarked(isBookmarked ? false : true)
  }

  return (
    <View style={styles.container}>
      <View style={styles.topView}>
        <GradientPicture
          profilePicture={profilePicture}
          gradientSizes={38}
          pictureSizes={34}
          marginLeft={5}
        />
        <Text style={styles.usernameText}> {username} </Text>

        <Image
          source={require("../../../assets/icons/postIcons/menu-vertical.png")}
          style={styles.dotIcon}
        />
      </View>
      <View style={styles.midView}>
        {postImage ? (
          <Image source={{ uri: postImage }} style={styles.postImage} />
        ) : null}
      </View>
      <View style={styles.bottomView}>
        <TouchableOpacity onPress={onPostLike}>
          <Image
            source={
              isPostLiked
                ? require("../../../assets/icons/homeHeader/heart-filled.png")
                : require("../../../assets/icons/homeHeader/heart-blank.png")
            }
            style={[
              styles.bottomIcon,
              { tintColor: isPostLiked ? "#ED4855" : "black" },
            ]}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={onPressComments}>
          <Image
            source={require("../../../assets/icons/postIcons/bubble-blank.png")}
            style={styles.bottomIcon}
          />
        </TouchableOpacity>
        <Image
          source={require("../../../assets/icons/postIcons/send-blank.png")}
          style={styles.bottomIcon}
        />
        <TouchableOpacity
          style={{ position: "absolute", right: 0 }}
          onPress={onPressBookmarks}
        >
          <Image
            source={
              isBookmarked
                ? require("../../../assets/icons/postIcons/bookmarks-filled.png")
                : require("../../../assets/icons/postIcons/bookmarks-blank.png")
            }
            style={[styles.bottomIcon]}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.extraView}>
        <TouchableOpacity>
          <Text style={styles.postLikesText}> {postLikes} likes </Text>
        </TouchableOpacity>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity>
            <Text style={styles.usernameAndPostText}> {username} </Text>
          </TouchableOpacity>
          <Text> {postText} </Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("Comments")}>
          <Text style={styles.commentNumber}>
            View all {commentNumber} comments
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Post

const styles = StyleSheet.create({
  container: { flex: 1, width: "100%", height: 550 },
  topView: {
    borderColor: "red",
    flex: 0.07,
    flexDirection: "row",
    margin: 8,
  },

  usernameText: {
    fontWeight: "bold",
    marginLeft: 7,
    alignSelf: "center",
    fontSize: 13.5,
  },
  dotIcon: {
    width: 22,
    height: 22,
    position: "absolute",
    right: 0,
    alignSelf: "center",
  },
  midView: {
    borderColor: "yellow",
    flex: 0.7,
  },
  postImage: {
    width: "100%",
    height: "100%",
  },
  bottomView: {
    borderColor: "green",
    flex: 0.07,
    flexDirection: "row",
    alignItems: "center",
  },
  bottomIcon: {
    height: 27,
    width: 27,
    marginHorizontal: 8,
  },
  extraView: {
    flex: 0.16,
    marginHorizontal: 8,
  },
  postLikesText: {
    fontWeight: "bold",
  },
  usernameAndPostText: {
    fontWeight: "bold",
  },
  commentNumber: {
    color: "grey",
    marginLeft: 2,
  },
})
