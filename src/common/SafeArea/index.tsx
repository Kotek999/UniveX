import React, { Fragment, ReactElement } from "react";
import { SafeAreaView, Text, View, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import isIOS from "../../rules/resolutions/isIOS";

export interface SafeProps {
  screenTitle?: any;
  children: ReactElement;
  guest?: boolean;
}

const SafeArea = (props: SafeProps) => {
  const insets = useSafeAreaInsets();

  const topArea = {
    paddingTop: !isIOS() ? insets.top : 0,
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={topArea}>
        {isIOS() && <SafeAreaView style={{ backgroundColor: "red" }} />}
        <View style={styles.topContainer}>
          {/* <Text>{props.screenTitle}</Text> */}
          {props.screenTitle ? (
            <Text>{props.screenTitle}</Text>
          ) : (
          <Text>{props.guest ? <Text>GUEST</Text> : <Text>USER</Text>}</Text>
          )}
        </View>
      </View>
      {props.children}
    </View>
  );
};

export default SafeArea;

const styles = StyleSheet.create({
  topContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    backgroundColor: "cyan",
  },
});
