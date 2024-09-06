import React from "react";
import { StyleSheet, View } from "react-native";
import MapView from "react-native-maps";
import ButtonComponent from "../components/Atoms/Button";
import { useNavigation } from "@react-navigation/native";

const Location = () => {
  const navigation = useNavigation<any>();
  const Exit = () => {
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <MapView style={styles.map} />
      <View style={styles.containerButtons}>
        <ButtonComponent style={styles.button} title="exit" onPress={Exit} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FCE6C5",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  map: {
    width: "90%",
    height: "80%",
    borderWidth: 2,
    borderColor: "#000",
  },
  containerButtons: {
    paddingTop: "0%",
    marginTop: "0%",
    flexDirection: "row",
    height: 100,
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#E42F45",
    height: "50%",
    justifyContent: "center",
    width: 150,
    margin: 5,
    borderWidth: 2,
    borderColor: "#000",
  },
});
export default Location;
