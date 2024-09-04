import React from "react";
import { StyleSheet, View } from "react-native";
import Title from "../Molecules/Title";
interface CardProps {
  title: string;
}
const Card: React.FC<CardProps> = ({ title }) => {
  return (
    <View style={styles.mainContainer}>
      <Title text={title} />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#E42F45",
    borderRadius: 10,
    width: "90%",
    padding: 10,
    paddingRight: 25,
    paddingLeft: 25,
    margin: 10,
    borderWidth: 2,
    borderColor: "#000",
  },
});

export default Card;
