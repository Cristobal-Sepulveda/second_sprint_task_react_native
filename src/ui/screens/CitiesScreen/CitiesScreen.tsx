import { View, FlatList, StyleSheet } from "react-native";
import { citiesData } from "../../../utils/citiesData";
import CityCard from "./components/CityCard";

export default function CitiesScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={citiesData}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => <CityCard city={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
  },
});
