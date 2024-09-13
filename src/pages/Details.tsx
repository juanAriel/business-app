import React from "react";
import { StyleSheet, View } from "react-native";
import CardDetails from "../components/Organisms/CardDetails";
import ButtonComponent from "../components/Atoms/Button";
import { useNavigation, useRoute } from "@react-navigation/native";

const Details = () => {
  const navigation = useNavigation<any>();

  const route = useRoute();
  const { card }:any = route.params;

  const viewLocation = () => {
    navigation.navigate("Location");
  };

  const viewGallery = () => {
    navigation.navigate("Gallery");
  };

  const viewSendAssent = () => {
    navigation.navigate("Assessment");
  };

  return (
    <View style={styles.container}>
      <CardDetails title={card.title} address={card.address} price={card.price} description={card.description} rating={card.assessment}/>
      <View style={styles.containerButtons}>
        <ButtonComponent
          style={styles.button}
          title="Location"
          onPress={viewLocation}
        ></ButtonComponent>
        <ButtonComponent
          style={styles.button}
          title="Gallery"
          onPress={viewGallery}
        ></ButtonComponent>
        <ButtonComponent
          style={styles.button}
          title="Assent"
          onPress={viewSendAssent}
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
  containerButtons: {
    paddingTop: "0%",
    marginTop: "0%",
    flexDirection: "row",
    height: 100,
    width: "90%",
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
export default Details;
