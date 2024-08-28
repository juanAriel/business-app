import React from "react";
import { Image, ImageStyle, StyleSheet } from "react-native";

interface ImageComponentProps {
  source: any;
  style?: ImageStyle;
}

const ImageComponent: React.FC<ImageComponentProps> = ({ source, style }) => {
  return <Image source={source} style={[styles.image, style]} />;
};
const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
    resizeMode: "cover",
  },
});
export default ImageComponent;
