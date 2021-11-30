import React from "react"
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native"
import { USERS } from "../../dummyData/USERS"

const Stories = () => {
  const renderItem = ({ item }) =>
    item.stories[0] ? (
      <View style={styles.storyContainer}>
        <TouchableOpacity style={styles.touchable} onPress={openStory}>
          <Image
            source={{ uri: item.profilePicture }}
            style={styles.profilePic}
          />
          <Text style={styles.usernameText}> {item.username} </Text>
        </TouchableOpacity>
      </View>
    ) : null
  const openStory = () => {
    return
  }
  return (
    <View style={styles.container}>
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
    marginTop: 60,
    flexDirection: "row",
  },
  storyContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  profilePic: {
    width: 71,
    height: 71,
    borderRadius: 71,
    marginLeft: 10,
    borderWidth: 2,
    borderColor: "red",
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
