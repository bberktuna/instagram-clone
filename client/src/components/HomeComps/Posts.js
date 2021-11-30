import React, { Fragment } from "react"
import { StyleSheet, Text, View, StatusBar, FlatList } from "react-native"
import Post from "./Post"
import { USERS } from "../../dummyData"
import Stories from "./Stories"

const Posts = () => {
  const renderItem = ({ item }) => {
    return item?.posts[0]?.postImage ? (
      <Fragment>
        <Post
          profilePicture={item.profilePicture}
          username={item.username}
          postImage={item?.posts[0]?.postImage}
          postLikes={item?.posts[0]?.postLikes}
          postText={item?.posts[0]?.postText}
          commentNumber={item?.posts[0]?.comments?.length}
        />
      </Fragment>
    ) : null
  }
  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={<Stories marginTop={60} />}
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
    backgroundColor: "white",
  },
})
