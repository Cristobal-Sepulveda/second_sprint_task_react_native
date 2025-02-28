import React, { useState, useEffect } from "react";
import {
  View,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  TextInput,
} from "react-native";
import axios from "axios";
import CityCard from "./components/CityCard";

export const CitiesScreen = () => {
  const [cities, setCities] = useState([]);
  const [filteredCities, setFilteredCities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    axios.get <
      ApiResponse >
      "https://mytinerary-server.onrender.com/api/cities"
        .then((response) => {
          const fetchedCities = response.data.data;
          setCities(fetchedCities);
          setFilteredCities(fetchedCities);
        })
        .catch((error) => {
          console.error("Error fetching cities:", error);
        })
        .finally(() => {
          setLoading(false);
        });
  }, []);

  const handleSearch = (text) => {
    setSearchText(text);
    const filtered = cities.filter((city) =>
      city.name.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredCities(filtered);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Busca una ciudad..."
        value={searchText}
        onChangeText={handleSearch}
      />
      {loading ? (
        <ActivityIndicator style={styles.loadingView} size="large" />
      ) : (
        <FlatList
          data={filteredCities}
          keyExtractor={(item, index) => `${item.name}-${index}`}
          renderItem={({ item }) => <CityCard city={item} />}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
  },
  loadingView: {
    color: "#0000ff",
    marginTop: 20,
  },
  searchInput: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 8,
    borderRadius: 5,
  },
});

export default CitiesScreen;
