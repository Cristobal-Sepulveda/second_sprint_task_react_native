import React, { useEffect } from "react";
import { View, Text, TextInput, StyleSheet, Pressable } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../../../utils/loginSchema";
import useUserActions from "../../../store/hooks/useUserActions";
import { router } from "expo-router";
import { setUser } from "../../../utils/storage";

export default function LoginScreen() {
  const { user, login } = useUserActions();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  useEffect(() => {
    handleUserUpdate(user);
  }, [user]);

  const handleUserUpdate = (data) => {
    if (data !== null) {
      setUser(data);
      router.replace("(tabs)");
    }
  };

  const initLoginRequest = (data) => {
    login(data);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.loginTitle}>Welcome</Text>

      <Controller
        control={control}
        name="email"
        render={({ field: { value, onChange } }) => (
          <>
            <TextInput
              style={styles.input}
              value={value}
              onChangeText={onChange}
              placeholder="Email"
            />
          </>
        )}
      />
      {errors.email && <Text>{errors.email.message}</Text>}

      <Controller
        control={control}
        name="password"
        render={({ field: { value, onChange } }) => (
          <>
            <TextInput
              style={styles.input}
              secureTextEntry
              value={value}
              onChangeText={onChange}
              placeholder="Password"
            />
          </>
        )}
      />
      {errors.password && <Text>{errors.password.message}</Text>}

      <Pressable style={styles.button} onPress={handleSubmit(initLoginRequest)}>
        <Text style={{ color: "white" }}>Iniciar sesión</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
  },
  loginTitle: {
    fontSize: 36,
    marginBottom: 24,
  },
  input: {
    margin: 12,
    width: "100%",
    borderWidth: 1,
    paddingHorizontal: 10,
    backgroundColor: "#f9f9f9",
  },

  button: {
    alignItems: "center",
    backgroundColor: "#000000",
    width: "100%",
    height: 40,
    padding: 10,
    marginTop: 12,
  },
});
