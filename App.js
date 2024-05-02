import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import * as React from "react";
import { StatusBar, StyleSheet, SafeAreaView, Text, View } from "react-native";
import { Searchbar } from "react-native-paper";

export default function App() {
  const [searchQuery, setSearchQuery] = React.useState("");

  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.search}>
          <Searchbar
            theme={{ colors: { elevation: { level3: "green" } } }}
            placeholder="Search"
            onChangeText={setSearchQuery}
            value={searchQuery}
            mode={"view"}
          />
        </View>
        <View style={styles.list}>
          <Text>list</Text>
        </View>
      </SafeAreaView>
      <ExpoStatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  search: {
    padding: 3,
    backgroundColor: "green",
  },
  list: {
    flex: 1,
    padding: 16,
    backgroundColor: "blue",
  },
});
