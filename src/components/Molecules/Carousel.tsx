import React from "react";
import { View, StyleSheet, ImageSourcePropType } from "react-native";
import ImageComponent from "../Atoms/Image";

interface CarouselProps {
  item: any;
}

const Carousel: React.FC<CarouselProps> = ({ item }) => {
  return (
    <View style={styles.container}>
      <ImageComponent source={item} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 21,
    backgroundColor: "red",
    height: "50%",
  },
  image: {
    width: 350,
    height: 250,
    borderRadius: 10,
  },
});

export default Carousel;
