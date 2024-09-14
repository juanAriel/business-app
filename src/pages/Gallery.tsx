import React from "react";
import { StyleSheet, View } from "react-native";
import LabelComponent from "../components/Atoms/Label";
import CarouselView from "../components/Organisms/CarouselView";
import { useNavigation, useRoute } from "@react-navigation/native";
import ButtonComponent from "../components/Atoms/Button";

const data = [
  {
    title: "Item 1",
    image: require("../../assets/images/bussines/image-1.jpg"),
  },
  {
    title: "Item 2",
    image: require("../../assets/images/bussines/image-2.jpg"),
  },
  {
    title: "Item 3",
    image: require("../../assets/images/bussines/image-3.jpeg"),
  },
  {
    title: "Item 4",
    image: require("../../assets/images/bussines/image-1.jpg"),
  },
];

const Gallery = () => {
  const route = useRoute();
  const { card }: any = route.params;

  const navigation = useNavigation<any>();
  const Exit = () => {
    navigation.navigate("Home");
  };
  return (
    <View style={styles.container}>
      <View style={styles.containerTitle}>
        <LabelComponent text={card.title} style={styles.title} />
      </View>

      <CarouselView data={data} />

      <View style={styles.containerButtons}>
        <ButtonComponent
          style={styles.button}
          title="Exit"
          onPress={Exit}
        ></ButtonComponent>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FCE6C5",
    alignItems: "center",
    justifyContent: "center",
  },
  containerTitle: {
    justifyContent: "center",
    alignItems: "center",
    height: "10%",
  },
  title: {
    color: "#000",
    fontSize: 25,
    fontFamily: "Roboto",
    fontWeight: 800,
  },
  containerButtons: {
    paddingTop: "0%",
    marginTop: "0%",
    flexDirection: "row",
    height: 100,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#E42F45",
    height: "50%",
    justifyContent: "center",
    width: 110,
    margin: 5,
    borderWidth: 2,
    borderColor: "#000",
  },
});
export default Gallery;
