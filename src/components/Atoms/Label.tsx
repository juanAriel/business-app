import React from "react";
import { StyleSheet, Text } from "react-native";
interface LabelComponentProps {
  text: string;
  style?: object;
}
const LabelComponent: React.FC<LabelComponentProps> = ({ text, style }) => {
  return <Text style={[styles.label, style]}>{text}</Text>;
};

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: "#000",
    textAlign: "left",
  },
});

export default LabelComponent;
