import React, { useState } from "react"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import {
  AccountsSlide,
  AudioSlide,
  PlacesSlide,
  SearchBar,
  TagsSlide,
  TopSlide,
} from "../../components"

const DetailedSearch = () => {
  const [slideState, setUseSlideState] = useState({
    top: true,
    accounts: false,
    audio: false,
    tags: false,
    places: false,
  })
  const { top, accounts, audio, tags, places } = slideState

  const opTopSlide = () => {
    setUseSlideState({
      top: true,
      accounts: false,
      audio: false,
      tags: false,
      places: false,
    })
  }

  const opAccountsSlide = () => {
    setUseSlideState({
      top: false,
      accounts: true,
      audio: false,
      tags: false,
      places: false,
    })
  }

  const opAudioSlide = () => {
    setUseSlideState({
      top: false,
      accounts: false,
      audio: true,
      tags: false,
      places: false,
    })
  }
  const opTagsSlide = () => {
    setUseSlideState({
      top: false,
      accounts: false,
      audio: false,
      tags: true,
      places: false,
    })
  }
  const opPlacesSlide = () => {
    setUseSlideState({
      top: false,
      accounts: false,
      audio: false,
      tags: false,
      places: true,
    })
  }

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <SearchBar />
      <View style={styles.searchSlides}>
        <TouchableOpacity
          onPress={opTopSlide}
          style={[
            styles.slideOpacity,
            top && { borderBottomWidth: 1.5, borderColor: "black" },
          ]}
        >
          <Text style={[styles.slideText, top && { color: "black" }]}>Top</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={opAccountsSlide}
          style={[
            styles.slideOpacity,
            accounts && { borderBottomWidth: 1.5, borderColor: "black" },
          ]}
        >
          <Text style={[styles.slideText, accounts && { color: "black" }]}>
            Accounts
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={opAudioSlide}
          style={[
            styles.slideOpacity,
            audio && { borderBottomWidth: 1.5, borderColor: "black" },
          ]}
        >
          <Text style={[styles.slideText, audio && { color: "black" }]}>
            Audio
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={opTagsSlide}
          style={[
            styles.slideOpacity,
            tags && { borderBottomWidth: 1.5, borderColor: "black" },
          ]}
        >
          <Text style={[styles.slideText, tags && { color: "black" }]}>
            Tags
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={opPlacesSlide}
          style={[
            styles.slideOpacity,
            places && { borderBottomWidth: 1.5, borderColor: "black" },
          ]}
        >
          <Text style={[styles.slideText, places && { color: "black" }]}>
            Places
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        {top && <TopSlide />}
        {accounts && <AccountsSlide />}
        {audio && <AudioSlide />}
        {tags && <TagsSlide />}
        {places && <PlacesSlide />}
      </View>
    </View>
  )
}

export default DetailedSearch

const styles = StyleSheet.create({
  searchSlides: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  slideOpacity: {
    borderBottomWidth: 0.5,
    borderColor: "#999999",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  slideText: {
    marginBottom: 10,
    fontWeight: "bold",
    color: "#999999",
  },
})
