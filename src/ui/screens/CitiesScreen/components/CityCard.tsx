import { Text, Image, Pressable, StyleSheet } from "react-native";
import { Link } from "expo-router";
import City from "../../../../utils/types";

export default function CityCard({ city }: { city: City }) {
  return (
    <Link href={`/${city.name}`} asChild>
      <Pressable style={styles.card} onPress={() => {}}>
        <Image style={styles.image} source={{ uri: city.image }} />
        <Text style={styles.name}>{city.name}</Text>
      </Pressable>
    </Link>
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
