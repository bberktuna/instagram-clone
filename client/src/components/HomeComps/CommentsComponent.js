import React, { useState } from "react"
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import GradientPicture from "../GradientPicture"

const CommentsComponent = ({
  profilePicture,
  username,
  commentText,
  postedAgo,
  commentLikeCount,
}) => {
  const [isLiked, setIsLiked] = useState(false)
  const onPressCommentLike = () => {
    isLiked ? setIsLiked(false) : setIsLiked(true)
  }
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <TouchableOpacity>
          <GradientPicture
            profilePicture={profilePicture}
            pictureSizes={43}
            gradientSizes={47}
            marginLeft={10}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.mid}>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.usernameText}> {username} </Text>
          <Text> {commentText} </Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.bottomTexts}> {postedAgo} </Text>
          {commentLikeCount ? (
            <Text style={styles.bottomTexts}> {commentLikeCount} likes </Text>
          ) : null}
          <TouchableOpacity>
            <Text style={styles.bottomTexts}> Reply </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.right}>
        <TouchableOpacity onPress={onPressCommentLike}>
          <Image
            source={
              isLiked
                ? require("../../../assets/icons/homeHeader/heart-filled.png")
                : require("../../../assets/icons/homeHeader/heart-blank.png")
            }
            style={[styles.heartIcon, { tintColor: isLiked ? "red" : "gray" }]}
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default CommentsComponent

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderBottomWidth: 0.5,
    borderBottomColor: "gray",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  left: {
    flex: 1.3,
    marginVertical: 10,
  },
  mid: {
    flex: 5.7,

    justifyContent: "center",
  },
  right: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  heartIcon: {
    width: 15,
    height: 15,
  },
  usernameText: {
    fontWeight: "bold",
    marginBottom: 5,
  },
  bottomTexts: {
    color: "gray",
    fontSize: 12,
    marginRight: 15,
  },
})
