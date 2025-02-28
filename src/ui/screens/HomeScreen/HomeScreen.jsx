import React from "react";
import HomeScreenHeader from "./components/HomeScreenHeader";
import CustomCarousel from "./components/CustomCarousel";
import { citiesData } from "../../../utils/citiesData";
import { View, Button } from "react-native";
import useUserActions from "../../../store/hooks/useUserActions";
import { removeUser } from "../../../utils/storage";

export default function HomeScreen() {
  const { logout } = useUserActions();

  return (
    <View>
      <HomeScreenHeader
        title="MyTinerary"
        subtitle="Find your perfect travel itinerary"
      />
      <CustomCarousel cities={citiesData} />
      <Button
        title="Cerrar Sesión"
        onPress={() => {
          removeUser();
          logout();
        }}
      />
    </View>
  );
}
