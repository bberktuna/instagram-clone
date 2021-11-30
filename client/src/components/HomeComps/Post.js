import React from "react"
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { USERS } from "../../dummyData/USERS"
import { useNavigation } from "@react-navigation/native"

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

  return (
    <View style={styles.container}>
      <View style={styles.topView}>
        <Image source={{ uri: profilePicture }} style={styles.profilePicture} />
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
        <Image
          source={require("../../../assets/icons/homeHeader/heart-blank.png")}
          style={styles.bottomIcon}
        />
        <Image
          source={require("../../../assets/icons/postIcons/bubble-blank.png")}
          style={styles.bottomIcon}
        />
        <Image
          source={require("../../../assets/icons/postIcons/send-blank.png")}
          style={styles.bottomIcon}
        />
        <Image
          source={require("../../../assets/icons/postIcons/bookmarks-blank.png")}
          style={[styles.bottomIcon, { position: "absolute", right: 0 }]}
        />
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
    margin: 6,
  },

  profilePicture: {
    width: 35,
    height: 35,
    borderRadius: 35,
    alignSelf: "center",
  },
  usernameText: {
    fontWeight: "bold",
    marginLeft: 10,
    alignSelf: "flex-start",
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
