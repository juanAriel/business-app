import React from "react";
import { StyleSheet, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import IconComponent from "./Icon";

interface ButtonComponentProps {
  title?: string;
  onPress: () => void;
  style?: object;
  iconName?: string;
}
const ButtonComponent: React.FC<ButtonComponentProps> = ({
  title,
  onPress,
  style,
  iconName,
}) => {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      {iconName && <IconComponent name={iconName} />}
      {title && <Text style={styles.buttonText}>{title}</Text>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#000",
    fontSize: 16,
  },
});

export default ButtonComponent;
