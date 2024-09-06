import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ButtonComponent from "../components/Atoms/Button";
import TextInputComponent from "../components/Atoms/TextInput";
import StarRating from "../components/Organisms/StartRating";
import { useNavigation } from "@react-navigation/native";

interface AssessmentProps {
  descriptionText: string;
}
const Assessment: React.FC<AssessmentProps> = ({ descriptionText }) => {
  const navigation = useNavigation<any>();
  const send = () => {
    navigation.navigate("Home");
  };
  return (
    <View style={styles.container}>
      <View style={styles.containerText}>
        <Text>details here</Text>
        <TextInputComponent
          value={descriptionText}
          placeholder="here your comment and assessment of business..."
          style={styles.input}
        />
      </View>
      <View style={styles.containerAssessment}>
        <Text>Assessment here</Text>
        <StarRating />
      </View>
      <View style={styles.containerButtons}>
        <ButtonComponent style={styles.button} title="send" onPress={send} />
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
    height: "50%",
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
    alignItems: "center",
    padding: 16,
  },
  input: {
    backgroundColor: "#e42f45",
    width: "100%",
    height: "80%",
    padding: 15,
    textAlignVertical: "top",
    borderWidth: 1,
  },
  containerAssessment: {
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
  },
});
export default Assessment;
