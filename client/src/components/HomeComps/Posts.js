import React from "react"
import { StyleSheet, Text, View, StatusBar, FlatList } from "react-native"
import Post from "./Post"
import { USERS } from "../../dummyData"
import { CustomHeader, Stories } from ".."

const Posts = () => {
  const renderItem = ({ item }) => {
    return item?.posts[0]?.postImage ? (
      <>
        <Post
          profilePicture={item.profilePicture}
          username={item.username}
          postImage={item?.posts[0]?.postImage}
          postLikes={item?.posts[0]?.postLikes}
          postText={item?.posts[0]?.postText}
          commentNumber={item?.posts[0]?.comments?.length}
        />
      </>
    ) : null
  }
  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={USERS}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
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
  },
})
