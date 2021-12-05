import React, { useState } from "react"
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native"
import { CustomHeader, PressableSearchBar } from "../../components"
import { USERS } from "../../dummyData"

const Shop = () => {
  const [isRefreshing, setIsRefreshing] = useState(false)
  const _refresh = () => {
    setIsRefreshing(false)
  }
  const onRefresh = () => {
    setIsRefreshing(true)
    _refresh()
  }
  const openImage = () => {
    return
  }
  const renderItem = ({ item }) => {
    return (
      <View style={{ marginLeft: -1.5 }}>
        <TouchableOpacity onPress={openImage}>
          <Image
            source={{ uri: USERS[0].posts[0].postImage }}
            style={styles.userPosts}
          />
        </TouchableOpacity>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <CustomHeader
        headerLeftLabel="Shop"
        icon3={require("../../../assets/burgermenu.png")}
        size3={26}
        icon2={require("../../../assets/icons/postIcons/bookmarks-blank.png")}
        size2={26}
        marginHorizontal3={20}
      />
      <PressableSearchBar
        navigationScreen="DetailedShop"
        inputLabel="Search shops"
        marginTop={55}
      />
      <View style={styles.scrollBar}>
        <ScrollView
          horizontal
          style={styles.scrollView}
          showsHorizontalScrollIndicator={false}
        >
          <View style={styles.outOpacity}>
            <TouchableOpacity style={styles.boxOpacity}>
              <Text style={styles.boxText}>Shops</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.outOpacity}>
            <TouchableOpacity style={styles.boxOpacity}>
              <Text style={styles.boxText}>Videos</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.outOpacity}>
            <TouchableOpacity style={styles.boxOpacity}>
              <Text style={styles.boxText}>Editors' picks</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.outOpacity}>
            <TouchableOpacity style={styles.boxOpacity}>
              <Text style={styles.boxText}>Collections</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.outOpacity}>
            <TouchableOpacity style={styles.boxOpacity}>
              <Text style={styles.boxText}>Guides</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
        <View
          style={{
            height: height,
            width: width,
            marginLeft: -15,
          }}
        >
          <FlatList
            showsVerticalScrollIndicator={false}
            data={USERS}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            numColumns={2}
            onRefresh={onRefresh}
            refreshing={isRefreshing}
          />
        </View>
      </View>
    </View>
  )
}

export default Shop
const width = Dimensions.get("window").width
const height = Dimensions.get("window").height
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  scrollView: {},
  scrollBar: {
    height: 55,
    marginLeft: 15,
  },
  outOpacity: {
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 5,
    marginTop: -5,
  },
  boxOpacity: {
    borderWidth: 0.5,
    borderColor: "#999999",
    borderRadius: 10,
    backgroundColor: "white",
    width: "100%",
    height: "80%",
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  boxText: {
    fontWeight: "bold",
    fontSize: 15,
  },
  userPosts: {
    width: width / 2,
    height: height / 4,
    marginBottom: 1.5,
    marginRight: 3,
  },
})
