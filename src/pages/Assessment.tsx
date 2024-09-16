import React, { useState } from "react";
import { KeyboardAvoidingView, StyleSheet, View } from "react-native";
import ButtonComponent from "../components/Atoms/Button";
import TextInputComponent from "../components/Atoms/TextInput";
import StarRating from "../components/Organisms/StartRating";
import { useNavigation } from "@react-navigation/native";
import LabelComponent from "../components/Atoms/Label";

interface AssessmentProps {
  descriptionText: string;
}
const Assessment: React.FC<AssessmentProps> = ({ descriptionText }) => {
  const [rating, setRating] = useState<number>(0);
  const navigation = useNavigation<any>();

  const send = () => {
    navigation.navigate("Home");
  };
  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.containerText}>
        <LabelComponent text="Details here" style={styles.titleDetail} />
        <TextInputComponent
          value={descriptionText}
          placeholder="here your comment and assessment of business..."
          style={styles.input}
        />
      </View>
      <View style={styles.containerAssessment}>
        {/* <LabelComponent text="Assessment here" style={styles.titleAssessment}/> */}
        <StarRating
          rating={rating}
          editable={true}
          onRatingChange={setRating}
        />
      </View>
      <View style={styles.containerButtons}>
        <ButtonComponent style={styles.button} title="send" onPress={send} />
      </View>
    </KeyboardAvoidingView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FCE6C5",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  map: {
    width: "90%",
    height: "80%",
    borderWidth: 2,
    borderColor: "#000",
  },
  containerButtons: {
    paddingTop: "0%",
    marginTop: "0%",
    flexDirection: "row",
    height: "15%",
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#E42F45",
    height: 50,
    justifyContent: "center",
    width: 150,
    margin: 5,
    borderWidth: 2,
    borderColor: "#000",
  },
  containerText: {
    width: "90%",
    height: 300,
    justifyContent: "center",
    alignItems: "flex-start",
    padding: 16,
  },
  input: {
    backgroundColor: "#e42f45",
    width: "100%",
    height: "80%",
    padding: 15,
    textAlignVertical: "top",
    borderWidth: 2,
    borderRadius: 10,
  },
  containerAssessment: {
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
  },
  titleDetail: {
    color: "#000",
    fontSize: 25,
    fontFamily: "Roboto",
    fontWeight: 800,
  },
  titleAssessment: {
    color: "#000",
    fontSize: 25,
    fontFamily: "Roboto",
    fontWeight: 800,
  },
});
export default Assessment;
