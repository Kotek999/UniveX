import React, { Fragment, FC, ReactElement } from "react";
import { SafeAreaView, Text, View, StyleSheet } from "react-native";
import { IconButton } from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import isIOS from "../../rules/resolutions/isIOS";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { NavigationPropsList } from "../../../rootRouter";

export interface SafeProps {
  isSignIn: boolean;
  titleOn: boolean;
  screenTitle?: any;
  children: ReactElement;
  guest?: boolean;
}

const SafeArea = (props: SafeProps) => {
  const insets = useSafeAreaInsets();

  const topArea = {
    paddingTop: !isIOS() ? insets.top : 0,
  };

  const navigation =
    useNavigation<NativeStackNavigationProp<NavigationPropsList>>();

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View style={topArea}>
        {isIOS() && <SafeAreaView style={{ backgroundColor: "red" }} />}
        {!props.isSignIn && (
          <View style={styles.topContainer}>
            {/* <Text>{props.screenTitle}</Text> */}
            <IconButton
              icon="chevron-double-left"
              iconColor="red"
              size={30}
              onPress={() => navigation.navigate("SignIn")}
            />
          </View>
        )}
      </View>
      {props.titleOn && (
        <>
          {props.screenTitle ? (
            <Text>{props.screenTitle}</Text>
          ) : (
            <Text>{!props.guest && <Text>Witaj! USER</Text>}</Text>
          )}
        </>
      )}
      {props.children}
    </View>
  );
};

export default SafeArea;

const styles = StyleSheet.create({
  topContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    alignContent: "center",
    backgroundColor: "green",
  },
});
