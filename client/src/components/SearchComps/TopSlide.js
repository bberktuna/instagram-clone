import React from "react"
import { FlatList, StyleSheet, Text, View } from "react-native"
import { SortUsers } from ".."
import { USERS } from "../../dummyData"

const TopSlide = () => {
  const ListHeader = () => {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
          marginVertical: 15,
        }}
      >
        <Text style={{ fontWeight: "bold", fontSize: 17, marginLeft: 13 }}>
          Recent
        </Text>
        <Text style={{ color: "#0095F6", marginRight: 15 }}>See All</Text>
      </View>
    )
  }
  return (
    <View>
      <SortUsers
        data={USERS}
        profilePicture={USERS[0].profilePicture}
        ListHeaderComponent={ListHeader}
        icon={require("../../../assets/icons/close-filled.png")}
        username={USERS[0].username}
        fullName={USERS[0].fullName}
      />
    </View>
  )
}

export default TopSlide

const styles = StyleSheet.create({})
