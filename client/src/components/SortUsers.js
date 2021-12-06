import React, { useState } from "react"
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native"
import { Button, GradientPicture } from "."

const SortUsers = ({
  ListHeaderComponent,
  data,
  profilePicture,
  button1 = false,
  button2 = false,
  icon = true,
  username,
  fullName,
  buttonText,
  backgroundColor,
  textColor,
  buttonWidth,
  buttonHeight,
  borderRadius,
  size,
  tintColor,
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
        <View style={styles.right}>
          <TouchableOpacity>
            {button1 && (
              <Button
                buttonText={buttonText}
                backgroundColor="white"
                textColor="black"
                width={buttonWidth}
                height={28}
                borderRadius={5}
                borderWidth={0.5}
                borderColor="gray"
                marginHorizontal={10}
              />
            )}
          </TouchableOpacity>
          <TouchableOpacity>
            {icon && (
              <Image
                source={icon}
                style={{
                  width: size,
                  height: size,
                  tintColor: tintColor,
                  marginBottom: 10,
                }}
              />
            )}
          </TouchableOpacity>
        </View>
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
    flex: 6,
    flexDirection: "row",
  },

  right: {
    flex: 4,
    justifyContent: "flex-end",
    alignItems: "center",
    flexDirection: "row",
  },
  icon: {},
  usernameText: {
    fontWeight: "bold",
  },
  fullNameText: {
    color: "#999999",
  },
})
