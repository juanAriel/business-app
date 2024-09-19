import React, { useEffect, useState } from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import ButtonComponent from "../components/Atoms/Button";
import { useNavigation } from "@react-navigation/native";
import * as LocationExpo from "expo-location";

const Location = () => {
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation<any>();

  useEffect(() => {
    const getLocation = async () => {
      const { status } = await LocationExpo.requestForegroundPermissionsAsync();
      if (status === "granted") {
        const loc = await LocationExpo.getCurrentPositionAsync({});
        setLocation(loc.coords);
      } else {
        console.error("Permisos no concedidos");
      }
      setLoading(false);
    };
    getLocation();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (!location) {
    return null;
  }
  //todo replace the location of the business that was registered
  const targetLatitude = -17.3843499;
  const targetLongitude = -66.2686799;

  const Exit = () => {
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: targetLatitude,
          longitude: targetLongitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        showsUserLocation={true}
      >
        <Marker
          coordinate={{ latitude: targetLatitude, longitude: targetLongitude }}
          title="Ubicación Específica"
        />
        <Marker coordinate={location} title="Tu Ubicación" pinColor="blue" />
      </MapView>
      <View style={styles.containerButtons}>
        <ButtonComponent style={styles.button} title="Exit" onPress={Exit} />
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
    height: 100,
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
});

export default Location;
