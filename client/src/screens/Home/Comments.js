import React, { useState } from "react"
import { StyleSheet, Text, View, FlatList } from "react-native"
import { CustomFooter, CustomHeader, GradientPicture } from "../../components"
import { CommentsComponent } from "../../components/"
import { USERS } from "../../dummyData"

const Comments = ({ navigation }) => {
  const renderItem = ({ item }) => {
    return item?.posts[0]?.comments[0] ? (
      <>
        <CommentsComponent
          profilePicture={USERS[0].profilePicture}
          username={USERS[0].posts[0].comments[0].username}
          commentText="asd"
          postedAgo="30sn"
          commentLikeCount={USERS[0].posts[0].comments[0].commentLikes}
        />
      </>
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
  const headerComponent = () => {
    return <View></View>
  }
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <CustomHeader
        isLeftIcon1={true}
        headerLeftLabel="Comments"
        leftIcon1={require("../../../assets/icons/profile/back.png")}
        leftIcon1OnPress={() => navigation.goBack()}
        icon3={require("../../../assets/icons/postIcons/send-blank.png")}
      />
      <FlatList
        ListHeaderComponent={headerComponent}
        showsVerticalScrollIndicator={false}
        data={USERS}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        onRefresh={onRefresh}
        refreshing={isRefreshing}
        style={{ marginTop: 60 }}
      />
      <CustomFooter
        footerPicture={require("../../../assets/empty-profile.jpg")}
      />
    </View>
  )
}

export default Comments

const styles = StyleSheet.create({})
