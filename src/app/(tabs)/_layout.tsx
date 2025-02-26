import { Tabs } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Provider } from "react-redux";
import { store } from "../../store/store";

export default function Layout() {
  return (
    <Provider store={store}>
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
            tabBarIcon: () => (
              <MaterialCommunityIcons name="city" size={24} color="black" />
            ),
          }}
        />
      </Tabs>
    </Provider>
  );
}
