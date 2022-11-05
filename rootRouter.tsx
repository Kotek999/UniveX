import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/components/Home";
import { HomeGuest } from "./src/components/Home";
import SignIn from "./src/components/SignIn";


export type NavigationPropsList = {
  SignIn: undefined;

  Home: undefined;

  HomeGuest: undefined;
};

const Stack = createNativeStackNavigator<NavigationPropsList>();

function Root(): any {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="SignIn">
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
