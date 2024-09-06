import { StyleSheet, View, Text } from "react-native";
import React, { useCallback, useState } from "react";
import SearchComponent from "../components/Molecules/SearchComponent";
import CardPremium from "../components/Organisms/CardPremium";
import Card from "../components/Organisms/Card";
import Select from "../components/Molecules/Select";
import { useNavigation } from "@react-navigation/native";

const cards = [
  {
    id: "1",
    title: "Business Home 1",
    price: 200,
    assessment: 4.5,
    description:
      "Sal de la rutina y disfruta de una exclusiva escapada romántica junto al amor de tu vida en el hotel de las estrellas.",
  },
  {
    id: "2",
    title: "Business Home 2",
    price: 150,
    assessment: 5.8,
    description:
      "Experimenta la mejor atención y el confort en nuestras instalaciones de lujo, diseñadas para hacerte sentir especial.",
  },
  {
    id: "3",
    title: "Business Home 3",
    price: 300,
    assessment: 5.0,
    description:
      "Descubre nuestras ofertas exclusivas para parejas y crea recuerdos inolvidables en un entorno elegante y acogedor.",
  },
];

const Home = () => {
  const navigation = useNavigation<any>();

  const [searchText, setSearchText] = useState<string>("");
  const [sortOption, setSortOption] = useState<string>("");

  const handleSearchTextChange = useCallback((text: string) => {
    setSearchText(text);
  }, []);

  const handleSortOptionChange = useCallback((option: string) => {
    setSortOption(option);
  }, []);

  const filteredCards = cards.filter((card) =>
    card.title.toLowerCase().includes(searchText.toLowerCase())
  );

  const viewDetails = () => {
    navigation.navigate("Details");
  };

  const sortedFilteredCards = [...filteredCards].sort((a, b) => {
    switch (sortOption) {
      case "Name (A-Z)":
        return a.title.localeCompare(b.title);
      case "Price (High-Low)":
        return b.price - a.price;
      case "Assessment (High-Low)":
        return b.assessment - a.assessment;
      default:
        return 0;
    }
  });

  return (
    <View style={styles.container}>
      <SearchComponent
        searchText={searchText}
        onSearchText={handleSearchTextChange}
        onSearch={() => {}}
      />

      {searchText && (
        <Select
          options={["Name (A-Z)", "Price (High-Low)", "Assessment (High-Low)"]}
          selectedOption={sortOption}
          onSelect={handleSortOptionChange}
        />
      )}

      {searchText === "" ? (
        cards.map((card) => (
          <CardPremium
            key={card.id}
            title={card.title}
            description={card.description}
            onPress={viewDetails}
          />
        ))
      ) : sortedFilteredCards.length > 0 ? (
        sortedFilteredCards.map((card) => (
          <Card key={card.id} title={card.title} onPress={viewDetails} />
        ))
      ) : (
        <Text>No results found</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FCE6C5",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Home;
