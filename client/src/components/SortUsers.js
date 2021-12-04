import React, { useState } from "react"
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native"
import { GradientPicture } from "."

const SortUsers = ({
  ListHeaderComponent,
  data,
  profilePicture,
  button1 = false,
  button2 = false,
  icon = true,
  username,
  fullName,
}) => {
  const renderItem = ({ item }) => {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.left}>
          <View style={{ flexDirection: "row" }}>
            <GradientPicture
              profilePicture={profilePicture}
              gradientSizes={55}
              pictureSizes={51}
              marginLeft={15}
            />
            <View style={{ flexDirection: "column", marginLeft: 15 }}>
              <Text style={styles.usernameText}>{username} </Text>
              <Text style={styles.fullNameText}>{fullName} </Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.right}>
          {button1 && <View></View>}
          {button2 && <View></View>}
          {icon && <Image source={icon} style={styles.icon} />}
        </TouchableOpacity>
      </View>
    )
  }
  const [isRefreshing, setIsRefreshing] = useState(false)
  const _refresh = () => {
    setIsRefreshing(false)
  }
  const onRefresh = () => {
    setIsRefreshing(true)
    _refresh()
  }
  return (
    <View>
      <FlatList
        ListHeaderComponent={ListHeaderComponent}
        showsVerticalScrollIndicator={false}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        onRefresh={onRefresh}
        refreshing={isRefreshing}
      />
    </View>
  )
}

export default SortUsers

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "50%",
    flexDirection: "row",
    marginVertical: 7,
  },
  left: {
    flex: 9,
    flexDirection: "row",
  },

  right: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    width: 12,
    height: 12,
    tintColor: "#999999",
  },
  usernameText: {
    fontWeight: "bold",
  },
  fullNameText: {
    color: "#999999",
  },
})
