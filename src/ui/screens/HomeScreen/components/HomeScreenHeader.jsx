import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

export default function HomeScreenHeader({ title, subtitle }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
      <Pressable style={styles.buttonContainer}>
        <Text style={styles.buttonText} onPress={() => {}}>
          Explore
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 16,
    backgroundColor: "black",
  },
  title: {
    fontSize: 24,
    color: "white",
  },
  subtitle: {
    fontSize: 16,
    color: "white",
  },
  buttonContainer: {
    backgroundColor: "green",
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderRadius: 5,
    marginTop: 16,
  },
  buttonText: {
    color: "white",
  },
});
