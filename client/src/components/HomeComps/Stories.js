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

const Stories = ({ marginTop, borderBottomWidth, showYourStory = true }) => {
  const yourStory = () => {
    return (
      <TouchableOpacity>
        <Image
          source={require("../../../assets/empty-profile.jpg")}
          style={styles.yourStory}
        />
        <Image
          source={require("../../../assets/radius-plus-filled.png")}
          style={styles.radiusPlus}
        />

        <Text style={styles.yourStoryText}>Your Story</Text>
      </TouchableOpacity>
    )
  }
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
    <View
      style={[
        styles.container,
        {
          marginTop: marginTop,
          borderBottomWidth: borderBottomWidth,
          borderColor: "gray",
        },
      ]}
    >
      <FlatList
        ListHeaderComponent={showYourStory && yourStory}
        data={USERS}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ marginBottom: 10 }}
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
  yourStory: {
    width: 75,
    height: 75,
    marginLeft: 15,
  },
  yourStoryText: {
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
    marginLeft: 15,
    fontSize: 12,
    marginTop: 3,
  },
  radiusPlus: {
    tintColor: "#0095F6",
    width: 20,
    height: 20,
    position: "absolute",
    right: 5,
    bottom: 20,
  },
})
