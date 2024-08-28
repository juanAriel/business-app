import React from "react";
import { StyleSheet } from "react-native";
import { Icon } from "react-native-vector-icons";
interface IconComponentProps {
  name: string;
  size?: number;
  color?: string;
  style?: object;
}
const IconComponent: React.FC<IconComponentProps> = ({
  name,
  size,
  color,
  style,
}) => {
  return (
    <Icon name={name} size={size} color={color} style={[styles.icon, style]} />
  );
};

const styles = StyleSheet.create({
  icon: {},
});

export default IconComponent;
