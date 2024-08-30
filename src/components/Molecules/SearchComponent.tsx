import React from "react";
import { Text, View, StyleSheet } from "react-native";
import TextInputComponent from "../Atoms/TextInput";
import ButtonComponent from "../Atoms/Button";

const SearchComponent: React.FC = () => {
  const search = () => {
    alert("Hola mundo");
  };

  const TextSearch = () => {};

  return (
    <View style={styles.container}>
      <TextInputComponent
        value=""
        onChangeText={TextSearch}
        placeholder="Type something..."
      />
      <ButtonComponent onPress={search} iconName="search" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 5,
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    borderRadius: 50,
    width: "90%",
    borderWidth: 1,
    borderColor: "#000",
  },
});

export default SearchComponent;
