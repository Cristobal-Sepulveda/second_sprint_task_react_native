import AsyncStorage from "@react-native-async-storage/async-storage";

export const setUser = async (data) => {
  try {
    await AsyncStorage.setItem("user", JSON.stringify(data));
    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
};

export const getUser = async () => {
  try {
    const item = await AsyncStorage.getItem("user");
    console.log("getUser: ", item);
    return item ? JSON.parse(item) : null;
  } catch (e) {
    console.log(e);
    return null;
  }
};

export const removeUser = async () => {
  try {
    await AsyncStorage.removeItem("user");
    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
};
