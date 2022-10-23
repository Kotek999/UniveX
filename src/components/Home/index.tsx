import React, { Fragment, FC } from "react";
import { SafeAreaView, Text, View } from "react-native";
import FooterMenu from "../FooterMenu";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import isIOS from "../../rules/resolutions/isIOS";
import { Test } from "../FooterMenu";
// https://flexbox.buildwithreact.com

const Home: FC = () => {
  const insets = useSafeAreaInsets();

  return (
    <View style={{ flex: 1 }}>
      <Fragment>
        <View style={{ paddingTop: !isIOS() ? insets.top : 0 }}>
          {isIOS() && <SafeAreaView style={{ backgroundColor: "red" }} />}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              alignContent: "center",
              backgroundColor: "cyan",
            }}
          >
            <Text>Title</Text>
          </View>
        </View>
        <FooterMenu />
      </Fragment>
    </View>
  );
};

export default Home;
