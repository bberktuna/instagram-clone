import React, { useState } from "react"
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native"
import { useNavigation } from "@react-navigation/native"

const SearchBar = ({ navigationScreen }) => {
  const navigation = useNavigation()

  const searchOpacityPress = ({}) => {
    navigation.navigate(navigationScreen)
  }
  return (
    <View style={styles.contianer}>
      <TouchableOpacity
        onPress={searchOpacityPress}
        style={styles.searchOpacity}
      >
        <View style={styles.insideOpacity}>
          <Image
            source={require("../../../assets/icons/tabBarIcons/search-filled.png")}
            style={styles.icon}
          />
          <Text style={styles.opacityLabel}>Search</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({
  contianer: {
    width: "100%",
    height: 55,
  },
  searchOpacity: {
    width: "90%",
    backgroundColor: "#EFEFEF",
    borderRadius: 10,
    height: "70%",
    flexDirection: "row",
    alignSelf: "center",
  },
  icon: {
    width: 26,
    height: 26,
    marginLeft: 20,
    tintColor: "#010101",
  },
  opacityLabel: {
    color: "#999999",
    marginLeft: 15,
    fontSize: 16,
  },
  insideOpacity: {
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
    flexDirection: "row",
  },
})

{
  /* <TextInput
        placeholder="Search"
        value={searchText}
        onChangeText={(text) => setSearchText(text)}
      /> */
}
