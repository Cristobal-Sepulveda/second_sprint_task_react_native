import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { citiesData } from "../utils/citiesData";

export default function CityDetailScreen() {
  const { name } = useLocalSearchParams();
  const cityName = Array.isArray(name) ? name.join(" ") : name;

  const city = citiesData.find(
    (city) => city.name.toLowerCase() === cityName.toLowerCase()
  );

  if (!city) {
    return (
      <View style={styles.container}>
        <Text style={styles.error}>City not found</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: city.image }} />
      <Text style={styles.name}>{city.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20,
    textAlign: "center",
  },
  description: {
    fontSize: 16,
    marginTop: 10,
    textAlign: "center",
  },
  error: {
    fontSize: 18,
    color: "red",
    textAlign: "center",
    marginTop: 20,
  },
});
