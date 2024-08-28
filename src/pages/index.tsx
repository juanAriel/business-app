import { StyleSheet, View, Text, ImageBackground } from "react-native";
import React from "react";

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.textHome}> welcome </Text>
        <Text style={styles.textHome}> to </Text>
        <Text style={styles.textHome}> Business </Text>
      </View>
      <ImageBackground
        imageStyle={{ borderRadius: 250 }}
        style={styles.imageApp}
        source={require("../../assets/images/welcome.png")}
      />
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
