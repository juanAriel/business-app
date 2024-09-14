import React, { useRef } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import Carousel from "../Molecules/Carousel";

interface CarouselViewProps {
  data: any;
}
const CarouselView: React.FC<CarouselViewProps> = ({ data }) => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal pagingEnabled>
        {data.map((item, index) => (
          <Carousel key={index} item={item.image} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "50%",
  },
});

export default CarouselView;
