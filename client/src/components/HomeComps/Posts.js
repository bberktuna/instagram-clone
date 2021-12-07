import React, { Fragment, useState } from "react"
import { StyleSheet, Text, View, StatusBar, FlatList } from "react-native"
import { USERS } from "../../dummyData"
import { Post, Stories } from "../../components"

const Posts = () => {
  const renderItem = ({ item }) => {
    return item?.posts[0]?.postImage ? (
      <Fragment>
        <Post
          profilePicture={item.profilePicture}
          username={item.username}
          postImage={item?.posts[0]?.postImage}
          postLikes={item?.posts[0]?.postLikedBy[0]?.length}
          postText={item?.posts[0]?.postText}
          commentNumber={item?.posts[0]?.comments?.length}
        />
      </Fragment>
    ) : null
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
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={<Stories marginTop={60} borderBottomWidth={0.5} />}
        showsVerticalScrollIndicator={false}
        data={USERS}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        onRefresh={onRefresh}
        refreshing={isRefreshing}
      />
    </View>
  )
}

export default Posts

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    borderTopWidth: 1,
    borderColor: "#DBDBDB",
    backgroundColor: "white",
  },
})
