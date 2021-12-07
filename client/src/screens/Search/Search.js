import React, { useState } from "react"
import {
  Dimensions,
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native"
import { FlatList } from "react-native-gesture-handler"
import { OpenImage, PressableSearchBar } from "../../components"
import { USERS } from "../../dummyData"
import { useNavigation } from "@react-navigation/native"

const Search = () => {
  const navigation = useNavigation()

  const renderItem = ({ item }) => {
    return (
      <View style={styles.flatListStyle}>
        <TouchableOpacity onPress={openImage}>
          <Image
            source={{ uri: USERS[0].posts[0].postImage }}
            style={styles.userPosts}
          />
        </TouchableOpacity>
      </View>
    )
  }
  const openImage = () => {
    navigation.navigate("OpenImage")
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
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "white",
        marginHorizontal: -1.5,
      }}
    >
      <FlatList
        ListHeaderComponent={
          <PressableSearchBar
            navigationScreen="DetailedSearch"
            inputLabel="Search"
          />
        }
        showsVerticalScrollIndicator={false}
        data={USERS}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={3}
        onRefresh={onRefresh}
        refreshing={isRefreshing}
      />
    </SafeAreaView>
  )
}

export default Search

const width = Dimensions.get("window").width
const height = Dimensions.get("window").height

const styles = StyleSheet.create({
  userPosts: {
    width: width / 3,
    height: height / 6,
  },
  flatListStyle: {
    margin: 1.5,
  },
})
