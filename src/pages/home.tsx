import { StyleSheet, View, Text, ImageBackground } from "react-native";
import React from "react";
import SearchComponent from "../components/Molecules/SearchComponent";

const Home = () => {
  return (
    <View style={styles.container}>
      <SearchComponent />
      <Text>hi</Text>
    </View>
  );
};

export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FCE6C5",
    alignItems: "center",
    justifyContent: "center",
  },
  textHome: {
    color: "#E42F45",
    fontSize: 50,
    fontWeight: "bold",
  },
  textContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  imageApp: {
    marginTop: 50,
    width: 150,
    height: 150,
    bottom: 50,
    resizeMode: "contain",
  },
});
