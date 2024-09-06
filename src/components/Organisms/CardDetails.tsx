import React from "react";
import { StyleSheet, Text, View } from "react-native";
import LabelComponent from "../Atoms/Label";
import StarRating from "./StartRating";

const rating = 2;
const CardDetails = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerTitle}>
        <LabelComponent
          text="Name Business"
          style={styles.title}
        ></LabelComponent>
      </View>
      <View style={styles.containerInfo}>
        <LabelComponent text="Address:"></LabelComponent>
        <LabelComponent text="Price:"></LabelComponent>
        <LabelComponent text="Description:"></LabelComponent>
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
    // backgroundColor:'#fff',
    margin: 15,
    height: "10%",
  },
  containerInfo: {
    // justifyContent:'center',
    // alignItems:'center',
    // backgroundColor:'#fff',

    marginLeft: 15,
    marginRight: 15,
    height: "65%",
  },
  containerAssent: {
    justifyContent: "center",
    // backgroundColor:'#fff',
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
});

export default CardDetails;
