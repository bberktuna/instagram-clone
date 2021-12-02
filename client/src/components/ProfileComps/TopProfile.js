import React from "react"
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native"
import GradientPicture from "../GradientPicture"
import Button from "../../components/Button"

const TopProfile = ({
  flex,
  profilePicture,
  totalPosts,
  followers,
  following,
  postsPress,
  followersPress,
  followingPress,
  fullName,
  profileBio,
}) => {
  return (
    <View style={[styles.container, { flex: flex }]}>
      <View style={styles.erste}>
        <GradientPicture
          profilePicture={profilePicture}
          gradientSizes={90}
          pictureSizes={86}
        />
        <TouchableOpacity onPress={postsPress}>
          <Text style={styles.numbers}> {totalPosts}</Text>
          <Text>Posts</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={followersPress}>
          <Text style={styles.numbers}> {followers}</Text>
          <Text>Followers</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={followingPress}>
          <Text style={styles.numbers}> {following}</Text>
          <Text>Following</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.nameAndBio}>
        <Text style={{ fontWeight: "bold" }}> {fullName} </Text>
        <Text> {profileBio} </Text>
      </View>
      <View style={styles.buttonsView}>
        <Button
          buttonText="Follow"
          backgroundColor="#0095F6"
          textColor="white"
          width={160}
          height={35}
          borderRadius={5}
        />
        <Button
          buttonText="Message"
          backgroundColor="white"
          textColor="black"
          width={160}
          height={35}
          borderRadius={5}
          borderWidth={0.5}
          borderColor="gray"
          marginHorizontal={6}
        />
        <Button
          width={35}
          height={35}
          isButtonText={false}
          iconWidth={14}
          iconHeight={14}
          borderWidth={0.5}
          borderColor="gray"
          borderRadius={3}
          iconSource={require("../../../assets/icons/profile/down-arrow.png")}
        />
      </View>
    </View>
  )
}

export default TopProfile

const width = Dimensions.get("window").width
const height = Dimensions.get("window").height

const styles = StyleSheet.create({
  container: {
    marginTop: 55,
    height: 300,
    marginHorizontal: 15,
  },
  erste: {
    flex: 0.5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  nameAndBio: {
    flex: 0.3,
  },
  buttonsView: {
    flex: 0.2,

    flexDirection: "row",
  },
  numbers: {
    justifyContent: "center",
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: 18,
  },
})
