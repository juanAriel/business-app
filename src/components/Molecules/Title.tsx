import React, { useCallback } from "react";
import LabelComponent from "../Atoms/Label";
import { StyleSheet, View } from "react-native";
import ButtonComponent from "../Atoms/Button";

interface TitleProps {
  text: string;
  style?: object;
}

const Title: React.FC<TitleProps> = ({ text }) => {
  const viewDetails = useCallback(() => {
    alert("click in view more");
  }, []);

  return (
    <View style={styles.containerTitle}>
      <LabelComponent text={text} style={styles.title}></LabelComponent>
      <ButtonComponent onPress={viewDetails} iconName="eye" />
    </View>
  );
};
const styles = StyleSheet.create({
  containerTitle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    color: "#000",
    fontSize: 25,
    fontFamily: "Roboto",
    fontWeight: 800,
  },
});
export default Title;
