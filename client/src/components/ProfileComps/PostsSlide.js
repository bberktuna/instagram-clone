import React from "react"
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from "react-native"
import { USERS } from "../../dummyData"

const PostsSlide = ({ squareImage }) => {
  const openImage = () => {
    return
  }

  const [isRefreshing, setIsRefreshing] = useState(false)
  const _refresh = () => {
    setIsRefreshing(false)
  }
  const onRefresh = () => {
    setIsRefreshing(true)
    _refresh()
  }

  const renderItem = ({ item }) => {
    return (
      <View>
        <TouchableOpacity onPress={openImage}>
          <Image source={{ uri: squareImage }} style={styles.userPosts} />
        </TouchableOpacity>
      </View>
    )
  }
  return (
    <View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={USERS}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={3}
        onRefresh={onRefresh}
        refreshing={isRefreshing}
      />
    </View>
  )
}

export default PostsSlide

const width = Dimensions.get("window").width
const height = Dimensions.get("window").height

const styles = StyleSheet.create({
  userPosts: {
    width: width / 3,
    height: height / 6,
  },
})
