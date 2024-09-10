import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import IconComponent from "../Atoms/Icon";

interface StarRatingProps {
  rating?: number;
  editable?: boolean;
  onRatingChange?: (rating: number) => void;
}
const StarRating: React.FC<StarRatingProps> = ({
  rating = 0,
  editable = false,
  onRatingChange,
}) => {
  const [currentRating, setCurrentRating] = useState<number>(rating);
  const maxStars = 5;

  const handleStarPress = (index: number) => {
    if (editable && onRatingChange) {
      setCurrentRating(index + 1);
      onRatingChange(index + 1);
    }
  };

  return (
    <View style={styles.container}>
      {[...Array(maxStars)].map((_, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => handleStarPress(index)}
          disabled={!editable}
        >
          <IconComponent
            name={index < currentRating ? "star" : "star-o"}
            size={30}
            color={index < currentRating ? "gold" : "black"}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
  },
});

export default StarRating;
