import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import * as React from "react";
import styled from "styled-components/native";
import { StatusBar, StyleSheet, SafeAreaView, Text, View } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfo } from "../components/restaurant-info.component";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  margintop: ${StatusBar.currentHeight}px;
`;
const SearchContainer = styled.View`
  padding: 3px;
`;
const ListContainer = styled.View`
  flex: 1;
  padding: 16px;
  background-color: blue;
`;

export const RestaurantsScreen = () => (
  <SafeArea>
    <SearchContainer>
      <Searchbar mode={"view"} />
    </SearchContainer>
    <ListContainer>
      <RestaurantInfo />
    </ListContainer>
  </SafeArea>
);

/* const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  search: {
    padding: 3,
  },
  list: {
    flex: 1,
    padding: 16,
    backgroundColor: "blue",
  },
}); */

//const [searchQuery, setSearchQuery] = React.useState("");
// theme={{ colors: { elevation: { level3: "green" } } }}
// placeholder="Search"
// onChangeText={setSearchQuery}
// value={searchQuery}
// mode={"view"}
