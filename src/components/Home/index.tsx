import React, { Fragment, FC } from "react";
import { SafeAreaView, Text, View } from "react-native";
import FooterMenu from "../FooterMenu";

// https://flexbox.buildwithreact.com

const Home: FC = () => {
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
};

export default Home;
