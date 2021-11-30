import React from "react"
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  FlatList,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native"
import { GradientPicture } from ".."
import { USERS } from "../../dummyData/USERS"

const Stories = ({ marginTop }) => {
  const renderItem = ({ item }) =>
    item.stories[0] ? (
      <View style={styles.storyContainer}>
        <TouchableOpacity style={styles.touchable} onPress={openStory}>
          <GradientPicture
            profilePicture={item.profilePicture}
            gradientSizes={75}
            pictureSizes={71}
            marginLeft={10}
          />

          <Text style={styles.usernameText}> {item.username} </Text>
        </TouchableOpacity>
      </View>
    ) : null
  const openStory = () => {
    return
  }
  return (
    <View style={[styles.container, { marginTop: marginTop }]}>
      <FlatList
        data={USERS}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}

export default Stories

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "white",
  },
  storyContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  profilePic: {
    width: 71,
    height: 71,
    borderRadius: 71,
    borderWidth: 3,
    borderColor: "white",
    marginTop: 2,
    marginLeft: 2,
  },
  usernameText: {
    fontSize: 12,
    marginLeft: 20,
    marginTop: 3,
  },
  storyImage: {
    width: "100%",
    height: "100%",
  },
})
