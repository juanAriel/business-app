import React from "react";
import LabelComponent from "../Atoms/Label";
import Title from "../Molecules/Title";
import { StyleSheet, View } from "react-native";

interface CardPremiumProps {
  title: string;
  description: string;
}

const CardPremium: React.FC<CardPremiumProps> = ({ title, description }) => {
  return (
    <View style={styles.mainContainer}>
      <Title text={title} />
      <View style={styles.container}>
        <LabelComponent style={styles.description} text={description} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#E42F45",
    borderRadius: 10,
    width: "90%",
    height: "20%",
    padding: 10,
    paddingRight: 25,
    paddingLeft: 25,
    margin: 10,
    borderWidth: 2,
    borderColor: "#000",
  },
  container: {
    justifyContent: "center",
    height: "70%",
  },
  description: {
    color: "#fff",
    textAlign: "center",
  },
});
export default CardPremium;
