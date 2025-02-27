import React from "react";
import Hero from "../../components/Hero/Hero";
import CustomCarousel from "../../components/Carousel/CustomCarousel";
import { citiesData } from "../../../utils/citiesData";
import { View, Button } from "react-native";
import useUserActions from "../../../store/hooks/useUserActions";

function HomeScreen() {
  const { userReducer, logout } = useUserActions();

  return (
    <View>
      <Hero title="MyTinerary" subtitle="Find your perfect travel itinerary" />
      <CustomCarousel cities={citiesData} />
      <Button title="Cerrar" onPress={() => logout()} />
    </View>
  );
}

export default HomeScreen;
