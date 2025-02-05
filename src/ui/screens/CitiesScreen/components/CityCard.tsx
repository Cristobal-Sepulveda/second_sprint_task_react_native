import { Text, Image, Pressable, StyleSheet } from "react-native";
import City from "../CitiesScreen/types/types";

export default function CityCard({ city }: { city: City }) {
  return (
    <Pressable style={styles.card} onPress={() => {}}>
      <Image style={styles.image} source={{ uri: city.image }} />
      <Text style={styles.name}>{city.name}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 10,
    backgroundColor: "#eee",
    borderRadius: 10,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 150,
  },
  name: {
    padding: 10,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
