import React, { useState } from "react"
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native"
import { CustomTextInput, GradientPicture } from "."

const CustomFooter = ({ footerPicture }) => {
  const [commentText, setCommentText] = useState("")
  return (
    <View style={styles.container}>
      <View style={{ flex: 1.3 }}>
        <Image source={footerPicture} style={styles.footerPicture} />
      </View>

      <View style={{ flex: 5.7 }}>
        <TextInput
          placeholder="Add a comment..."
          value={commentText}
          onChangeText={(text) => setCommentText(text)}
        />
      </View>
      <View style={{ flex: 1 }}>
        <TouchableOpacity style={styles.postOpacity}>
          <Text style={{ color: commentText ? "#3CADF8" : "#BFE5FC" }}>
            Post
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default CustomFooter

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderTopWidth: 0.5,
    borderColor: "gray",
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  footerPicture: {
    width: 42,
    height: 42,
    borderRadius: 47,
    marginVertical: 5,
    marginLeft: 10,
  },
})
