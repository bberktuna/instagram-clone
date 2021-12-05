import React from "react"
import { CustomIcon, GradientPicture } from "./../../components/"

import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  ImageBackground,
  TouchableOpacity,
  Image,
} from "react-native"
import { USERS } from "../../dummyData"

const Reels = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="black" />

      <ImageBackground
        source={require("../../../assets/reels.jpeg")}
        style={styles.reelsVideo}
      >
        <View style={styles.header}>
          <Text style={styles.headerLabel}>Reels</Text>
          <CustomIcon
            source={require("../../../assets/camera.png")}
            size={28}
            tintColor="white"
          />
        </View>
        <View style={styles.screen}>
          <View style={styles.left}>
            <View
              style={{
                flexDirection: "row",
                marginBottom: 5,
                alignItems: "center",
              }}
            >
              <TouchableOpacity>
                <Image
                  source={{ uri: USERS[0].profilePicture }}
                  style={styles.profilePicture}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.usernameText}> {USERS[0].username} •</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.followText}>Follow</Text>
              </TouchableOpacity>
            </View>
            <View style={{ marginBottom: 20 }}>
              <Text style={styles.descAndAudioText}>
                reels descriptionnn ...
              </Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <CustomIcon
                  source={require("../../../assets/audio.png")}
                  size={14}
                  tintColor="white"
                  marginRight={5}
                />
                <Text style={styles.descAndAudioText}>
                  status_forever77 • STATUS_FOREVER77
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.right}>
            <CustomIcon
              source={require("../../../assets/icons/homeHeader/heart-blank.png")}
              size={34}
              tintColor="white"
            />
            <Text style={styles.iconText}> 3364 </Text>
            <CustomIcon
              source={require("../../../assets/icons/postIcons/bubble-blank.png")}
              size={34}
              tintColor="white"
            />
            <Text style={styles.iconText}> 27 </Text>
            <CustomIcon
              source={require("../../../assets/icons/postIcons/send-blank.png")}
              size={26}
              tintColor="white"
              marginBottom={20}
            />
            <CustomIcon
              source={require("../../../assets/icons/postIcons/menu-vertical.png")}
              size={28}
              tintColor="white"
              marginBottom={20}
            />
            <Image
              source={require("../../../assets/reels.jpeg")}
              style={styles.musicIcon}
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  )
}

export default Reels

const styles = StyleSheet.create({
  container: { backgroundColor: "black" },
  reelsVideo: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  header: {
    flex: 0.08,
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 15,
    alignItems: "center",
  },
  screen: {
    flex: 0.92,

    flexDirection: "row",
  },

  headerLabel: {
    color: "white",
    fontWeight: "bold",
    fontSize: 23,
  },
  left: {
    flex: 0.85,
    justifyContent: "flex-end",
    marginLeft: 12,
  },
  right: {
    flex: 0.15,

    justifyContent: "flex-end",
    alignItems: "center",
  },
  profilePicture: {
    width: 36,
    height: 36,
    borderRadius: 20,
  },
  usernameText: {
    fontWeight: "bold",
    color: "white",
    fontSize: 15,
    marginLeft: 8,
  },
  descAndAudioText: {
    color: "white",
    marginVertical: 5,
  },
  musicIcon: {
    width: 34,
    height: 34,
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 5,
    marginBottom: 25,
  },
  iconText: {
    color: "white",
    marginBottom: 15,
    fontSize: 12,
  },
  followText: {
    marginLeft: 5,
    color: "white",
    fontWeight: "700",
  },
})
