import { Tabs } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import WithUser from "../../guard/WithUser";

export default function Layout() {
  return (
    <WithUser>
      <>
        <Tabs>
          <Tabs.Screen
            name="index"
            options={{
              title: "Home",
              tabBarIcon: () => (
                <AntDesign name="home" size={24} color="black" />
              ),
            }}
          />
          <Tabs.Screen
            name="cities"
            options={{
              title: "Cities",
              tabBarIcon: () => (
                <MaterialCommunityIcons name="city" size={24} color="black" />
              ),
            }}
          />
        </Tabs>
      </>
    </WithUser>
  );
}
