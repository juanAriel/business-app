import React from "react";
import {
  FlatList,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import LabelComponent from "../Atoms/Label";

interface SelectProps {
  options: string[];
  selectedOption: string;
  onSelect: (option: string) => void;
}
const Select: React.FC<SelectProps> = ({
  options,
  selectedOption,
  onSelect,
}) => {
  const [isModalVisible, setModalVisible] = React.useState<boolean>(false);

  const handleSelect = (option: string) => {
    onSelect(option);
    setModalVisible(false);
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setModalVisible(true)}
      >
        <LabelComponent
          text={selectedOption || "Select an option"}
          style={styles.buttonText}
        />
      </TouchableOpacity>

      <Modal
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <FlatList
              data={options}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <View>
                  <TouchableOpacity
                    style={styles.option}
                    onPress={() => handleSelect(item)}
                  >
                    <Text style={styles.optionText}>{item}</Text>
                  </TouchableOpacity>
                </View>
              )}
              ItemSeparatorComponent={() => <View style={styles.separator} />} // Línea separadora entre los items
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    width: "90%",
  },
  button: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 8,
    backgroundColor: "rgba(234,66,89,0.6)",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(234,66,89,0.4)",
  },
  modalContent: {
    width: "70%",
    backgroundColor: "#EA4259",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#000",
    borderRadius: 15,
    overflow: "hidden",
  },
  option: {
    padding: 10,
  },
  optionText: {
    fontSize: 16,
  },
  separator: {
    height: 1,
    width: 250,
    backgroundColor: "#000",
    marginVertical: 4,
  },
});

export default Select;
