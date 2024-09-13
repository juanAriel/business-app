import React, { useRef } from "react";
import { ScrollView, StyleSheet } from "react-native";
import Carousel from "../Molecules/Carousel";

interface CarouselViewProps {
  data: any;
}
const CarouselView: React.FC<CarouselViewProps> = ({ data }) => {
  return (
    <ScrollView horizontal pagingEnabled style={styles.containerScrollView}>
      {data.map((item, index) => (
        <Carousel key={index} item={item.image} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  containerScrollView: {
    flex: 1,
  },
});

export default CarouselView;
