import React from "react";
import { View, StyleSheet } from "react-native";
import TextInputComponent from "../Atoms/TextInput";
import ButtonComponent from "../Atoms/Button";

interface SearchComponentProps {
  searchText: string;
  onSearchText: (text: string) => void;
  onSearch: () => void;
}
const SearchComponent: React.FC<SearchComponentProps> = ({
  searchText,
  onSearchText,
  onSearch,
}) => {
  return (
    <View style={styles.container}>
      <TextInputComponent
        value={searchText}
        onChangeText={onSearchText}
        placeholder="Search here..."
        style={styles.input}
      />
      <ButtonComponent onPress={onSearch} iconName="search" />
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
    marginRight: -35,
  },
});

export default SearchComponent;
