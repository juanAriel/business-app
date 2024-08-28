import React from "react";
import { StyleSheet, Text } from "react-native";
interface LabelComponentProps {
  text: string;
}
const LabelComponent: React.FC<LabelComponentProps> = ({ text }) => {
  return <Text style={styles.label}>{text}</Text>;
};

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: "#333",
  },
});

export default LabelComponent;
