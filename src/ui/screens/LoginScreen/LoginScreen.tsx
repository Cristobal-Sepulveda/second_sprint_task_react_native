import React from "react";
import { View, Text, TextInput, Button } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useDispatch } from "react-redux";
import { loginUser } from "../../../store/authSlice";
import { loginSchema } from "../../../utils/loginSchema";

function LoginScreen() {
  const dispatch = useDispatch();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  return (
    <View>
      <Text>Login</Text>
      <Controller
        control={control}
        name="email"
        render={({ field }) => <TextInput {...field} placeholder="Email" />}
      />
      {errors.email && <Text>{errors.email.message}</Text>}

      <Controller
        control={control}
        name="password"
        render={({ field }) => (
          <TextInput {...field} placeholder="Password" secureTextEntry />
        )}
      />
      {errors.password && <Text>{errors.password.message}</Text>}

      <Button title="Login" />
      <Button title="Register" />
    </View>
  );
}

export default LoginScreen;
