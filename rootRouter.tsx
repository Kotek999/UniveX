import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/components/Home";
import { HomeGuest } from "./src/components/Home";
import SignIn from "./src/components/SignIn";
import Auth from "./src/components/Auth";

export type NavigationPropsList = {

  Auth: undefined;

  SignIn: undefined;

  Home: undefined;

  HomeGuest: undefined;
};

const Stack = createNativeStackNavigator<NavigationPropsList>();

function Root() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignIn">
      <Stack.Screen
          name="Auth"
          component={Auth}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HomeGuest"
          component={HomeGuest}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Root;
