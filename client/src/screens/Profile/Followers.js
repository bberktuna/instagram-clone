import React, { useState } from "react"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import {
  CustomHeader,
  CustomIcon,
  PressableSearchBar,
  SortUsers,
} from "../../components"

const Followers = ({ route, navigation }) => {
  const {
    username,
    followersCount,
    followingCount,
    followers,
    following,
    data,
    profilePicture,
    fullName,
  } = route.params
  const [isFollowers, setIsFollowers] = useState(true)

  const followersPress = () => {
    setIsFollowers(true)
  }

  const followingPress = () => {
    setIsFollowers(false)
  }

  const SortHeader = () => {
    return (
      <TouchableOpacity>
        <View
          style={{
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: "row",
            marginHorizontal: 15,
            marginTop: 12,
            marginBottom: 10,
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontSize: 15 }}>Sorted by</Text>
            <Text style={{ fontWeight: "bold", fontSize: 16, marginLeft: 5 }}>
              Default
            </Text>
          </View>
          <View
            style={{
              borderWidth: 2,
              borderRadius: 16,
              padding: 3,
            }}
          >
            <CustomIcon
              source={require("../../../assets/icons/profile/sort.png")}
              size={11.5}
            />
          </View>
        </View>
      </TouchableOpacity>
    )
  }
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <CustomHeader
        headerLeftLabel={username}
        label={true}
        isLeftIcon1={true}
        leftIcon1={require("../../../assets/icons/profile/back.png")}
        leftIcon1OnPress={() => navigation.goBack()}
      />

      <View style={styles.topIcons}>
        <TouchableOpacity
          onPress={followersPress}
          style={[
            styles.opacityStyle,
            isFollowers ? { borderBottomWidth: 2 } : null,
          ]}
        >
          <Text style={[styles.countText, isFollowers && { color: "black" }]}>
            {followersCount} Followers
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={followingPress}
          style={[
            styles.opacityStyle,
            isFollowers ? null : { borderBottomWidth: 2 },
          ]}
        >
          <Text style={[styles.countText, !isFollowers && { color: "black" }]}>
            {followingCount} Following
          </Text>
        </TouchableOpacity>
      </View>

      {isFollowers ? (
        <SortUsers
          ListHeaderComponent={
            <PressableSearchBar inputLabel="Search" marginTop={12} />
          }
          data={data}
          profilePicture={profilePicture}
          username={username}
          fullName={fullName}
          button1={true}
          icon={false}
          buttonText="Remove"
          size={20}
          tintColor="#999999"
          buttonWidth={70}
        />
      ) : (
        <SortUsers
          buttonText="Following"
          ListHeaderComponent={
            <>
              <PressableSearchBar inputLabel="Search" marginTop={12} />
              <SortHeader />
            </>
          }
          data={data}
          profilePicture={profilePicture}
          username={username}
          fullName={fullName}
          button1={true}
          icon={require("../../../assets/icons/postIcons/menu-vertical.png")}
          size={22}
          tintColor="black"
          buttonWidth={110}
        />
      )}
    </View>
  )
}

export default Followers

const styles = StyleSheet.create({
  opacityStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 0.5,
    borderColor: "#999999",
  },

  topIcons: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 55,
  },
  countText: {
    fontWeight: "bold",
    fontSize: 15,
    color: "#999999",
    marginTop: 15,
    marginBottom: 10,
  },
})
