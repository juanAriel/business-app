import React from "react";
import { View, StyleSheet } from "react-native";
import IconComponent from "../Atoms/Icon";
// import Icon from 'react-native-vector-icons/FontAwesome';

const StarRating = ({ rating, maxStars = 5 }) => {
  return (
    <View style={styles.container}>
      {[...Array(maxStars)].map((_, index) => (
        <IconComponent
          key={index}
          name={index < rating ? "star" : "star-o"}
          size={30}
          color={index < rating ? "gold" : "black"}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    // backgroundColor:'blue',
    // flexWrap:'wrap-reverse',
  },
});

export default StarRating;
