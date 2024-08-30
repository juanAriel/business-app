import React from "react";
import { TextInput as Input, StyleSheet } from "react-native";

interface TextInputComponentProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  style?: object;
}

const TextInputComponent: React.FC<TextInputComponentProps> = ({
  value,
  onChangeText,
  placeholder,
  style
}) => {
  return (
    <Input
      style={[styles.input, style]}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    width: "85%",
  },
});

export default TextInputComponent;
