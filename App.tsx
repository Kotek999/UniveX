import React, { Fragment } from "react";
import { SafeAreaView, Text, View } from "react-native";
import FooterMenu from "./src/components/FooterMenu";

// https://flexbox.buildwithreact.com

export default function App() {
  return (
    <Fragment>
      <SafeAreaView style={{ backgroundColor: "red" }} />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          alignContent: "center",
        }}
      >
        <Text>Footer Menu</Text>
      </View>
      <FooterMenu />
    </Fragment>
  );
}
