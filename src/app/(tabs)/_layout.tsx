import { Tabs } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function Layout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: () => <AntDesign name="home" size={24} color="black" />,
        }}
      />
      <Tabs.Screen
        name="cities"
        options={{
          title: "Cities",
          tabBarIcon: () => <AntDesign name="home" size={24} color="black" />,
        }}
      />
    </Tabs>
  );
}
