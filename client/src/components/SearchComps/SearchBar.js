import React, { useState } from "react"
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableOpacityBase,
  View,
} from "react-native"
import { useNavigation } from "@react-navigation/native"

const SearchBar = ({ screen }) => {
  const [searchText, setSearchText] = useState("")
  const navigation = useNavigation()

  return (
    <View style={styles.contianer}>
      <View style={styles.iconAndInput}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ height: 55 }}
        >
          <Image
            source={require("../../../assets/icons/profile/back.png")}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TextInput
          placeholder="Search"
          placeholderTextColor="#999999"
          value={searchText}
          onChangeText={(text) => setSearchText(text)}
          style={styles.textInputStyles}
        />
      </View>
    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({
  contianer: {
    width: "100%",
    height: 55,
    backgroundColor: "white",
  },
  textInputStyles: {
    width: "80%",
    backgroundColor: "#EFEFEF",
    borderRadius: 10,
    height: "70%",
    marginLeft: 10,
    paddingLeft: 20,
    fontSize: 16,
  },
  icon: {
    width: 27,
    height: 27,
    tintColor: "#010101",
    marginTop: 5,
  },

  iconAndInput: {
    flexDirection: "row",
    justifyContent: "center",

    alignSelf: "center",
  },
})
