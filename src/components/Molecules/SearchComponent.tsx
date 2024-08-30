import React, { useCallback, useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import TextInputComponent from "../Atoms/TextInput";
import ButtonComponent from "../Atoms/Button";

const SearchComponent: React.FC = () => {
  const [searchText, setSearchText] = useState<string>("");

  const search = useCallback(() => {
    alert("click on btn search");
  }, []);

  const TextSearch = useCallback((text: string) => {
    setSearchText(text);
  }, []);

  return (
    <View style={styles.container}>
      <TextInputComponent
        value={searchText}
        onChangeText={TextSearch}
        placeholder="Search here..."
        style={styles.input}
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
    marginBottom: 20,
  },
  input: {
    marginLeft: 10,
    marginRight: -10,
  },
});

export default SearchComponent;
