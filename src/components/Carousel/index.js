import React from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import Carousel from "react-native-reanimated-carousel";

const { width } = Dimensions.get("window");

const CarouselCities = ({ cities }) => {
  return (
    <View style={styles.container}>
      <Carousel
        loop
        autoPlay={true}
        width={width}
        height={250}
        data={cities}
        scrollAnimationDuration={2000}
        renderItem={({ item }) => (
          <View style={styles.carouselItem}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.cityName}>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  carouselItem: {
    alignItems: "center",
  },
  image: {
    width: 300,
    height: 200,
  },
  cityName: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 4,
  },
});

export default CarouselCities;