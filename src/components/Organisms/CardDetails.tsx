import React from "react";
import { StyleSheet, View } from "react-native";
import LabelComponent from "../Atoms/Label";
import StarRating from "./StartRating";

interface CardDetailsProps {
  title: string;
  address: string;
  price: number;
  description: string;
  rating: number;
}

const CardDetails: React.FC<CardDetailsProps> = ({
  title,
  address,
  price,
  description,
  rating,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerTitle}>
        <LabelComponent text={title} style={styles.title}></LabelComponent>
      </View>
      <View style={styles.containerInfo}>
        <LabelComponent style={styles.containerInfoTitle} text="Address:" />
        <LabelComponent text={address} />

        <LabelComponent style={styles.containerInfoTitle} text="Price:" />
        <LabelComponent text={`${price}`} />

        <LabelComponent style={styles.containerInfoTitle} text="Description:" />
        <LabelComponent text={description} />
      </View>
      <View style={styles.containerAssent}>
        <StarRating rating={rating} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E42F45",
    height: "70%",
    width: "90%",
    borderRadius: 5,

    borderWidth: 2,
    borderColor: "#000",
  },
  containerTitle: {
    justifyContent: "center",
    alignItems: "center",
    margin: 15,
    height: "10%",
  },
  containerInfo: {
    marginLeft: 15,
    marginRight: 15,
    height: "65%",
  },
  containerAssent: {
    justifyContent: "center",
    alignItems: "center",
    height: "10%",
    margin: 15,
  },
  title: {
    color: "#000",
    fontSize: 25,
    fontFamily: "Roboto",
    fontWeight: 800,
  },
  containerInfoTitle: {
    fontWeight: "bold",
    fontSize: 20,
  },
});

export default CardDetails;
