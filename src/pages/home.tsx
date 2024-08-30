import { StyleSheet, View } from "react-native";
import React from "react";
import SearchComponent from "../components/Molecules/SearchComponent";
import CardPremium from "../components/Organisms/CardPremium";
const cards = [
  {
    id: "1",
    title: "Business Home 1",
    description:
      "Sal de la rutina y disfruta de una exclusiva escapada romántica junto al amor de tu vida en el hotel de las estrellas.",
  },
  {
    id: "2",
    title: "Business Home 2",
    description:
      "Experimenta la mejor atención y el confort en nuestras instalaciones de lujo, diseñadas para hacerte sentir especial.",
  },
  {
    id: "3",
    title: "Business Home 3",
    description:
      "Descubre nuestras ofertas exclusivas para parejas y crea recuerdos inolvidables en un entorno elegante y acogedor.",
  },
];
const Home = () => {
  return (
    <View style={styles.container}>
      <SearchComponent />
      {cards.map((card) => (
        <CardPremium
          key={card.id}
          title={card.title}
          description={card.description}
        />
      ))}
    </View>
  );
};

export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FCE6C5",
    alignItems: "center",
    justifyContent: "center",
  },
  textHome: {
    color: "#E42F45",
    fontSize: 50,
    fontWeight: "bold",
  },
  textContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  imageApp: {
    marginTop: 50,
    width: 150,
    height: 150,
    bottom: 50,
    resizeMode: "contain",
  },
});
