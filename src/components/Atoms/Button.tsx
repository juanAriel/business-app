import React from "react";
import { StyleSheet, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

interface ButtonComponentProps {
  title: string;
  onPress: () => void;
}
const ButtonComponent: React.FC<ButtonComponentProps> = ({
  title,
  onPress,
}) => {
  return (
    <TouchableOpacity>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#007bff",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default ButtonComponent;
