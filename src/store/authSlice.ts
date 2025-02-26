import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const loginUser = createAsyncThunk("auth/login", async (credentials: string) => {
  try {
    // Fake API response
    const fakeUser = { token: "12345", email: credentials };
    
    // Save user to AsyncStorage
    await AsyncStorage.setItem("user", JSON.stringify(fakeUser));

    return fakeUser; // ✅ Ensure a value is returned
  } catch (error) {
    throw new Error("Login failed");
  }
});

export const logoutUser = createAsyncThunk("auth/logout", async () => {
  try {
    await AsyncStorage.removeItem("user");
    return null;
  } catch (error) {
    throw new Error("Logout failed");
  }
});

interface User {
  token: string;
  email: string;
}

const authSlice = createSlice({
  name: "auth",
  initialState: { user: null as User | null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.user = null;
      });
  },
});

export default authSlice.reducer;