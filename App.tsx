import { NavigationContainer } from "@react-navigation/native";
import React, { useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Welcome from "./src/pages/welcome";
import Home from "./src/pages/home";
import DetailsScreen from "./src/pages/Details";
import LocationScreen from "./src/pages/Location";
import AssessmentScreen from "./src/pages/Assessment";
import GalleryScreen from "./src/pages/Gallery"

const Stack = createStackNavigator();

const WelcomeScreen = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("Home");
    }, 2000);
    return () => clearTimeout(timer);
  }, [navigation]);
  return <Welcome />;
};

const HomeScreen = () => {
  return <Home />;
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Location" component={LocationScreen} />
        <Stack.Screen name="Gallery" component={GalleryScreen} />
        <Stack.Screen name="Assessment" component={AssessmentScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
