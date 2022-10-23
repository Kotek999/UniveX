import * as React from "react";
import { ImageBackground, View, Image } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { BottomNavigation, Text } from "react-native-paper";

const backgroundImage = require("../../images/backgroundTheme.jpg");
const moon = require("../../images/planets/moon.gif");

const MusicRoute = () => (
  <View>
    <Test />
  </View>
);
// const MusicRoute = () => <ImageBackground source={backgroundImage} resizeMode="cover" style={{flex: 1, justifyContent: "center"}}><Text>Content 1</Text></ImageBackground>;

const RecentsRoute = () => <Text>Content 2</Text>;
// const RecentsRoute = () => <ImageBackground source={backgroundImage} resizeMode="cover" style={{flex: 1, justifyContent: "center"}}><Text>Content 2</Text></ImageBackground>;

const NotificationsRoute = () => <Text>Content 3</Text>;
// const NotificationsRoute = () => <ImageBackground source={backgroundImage} resizeMode="cover" style={{flex: 1, justifyContent: "center"}}><Text>Content 3</Text></ImageBackground>;

export const Test = () => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      alignContent: "center",
      backgroundColor: "gray",
    }}
  >
    <ImageBackground
      resizeMode="cover"
      source={moon}
      style={{
        width: 90,
        height: 90,
        backgroundColor: "white",
        borderRadius: 50,
      }}
    ></ImageBackground>
  </View>
);

interface NavIcons {
  key: string;
  title: string | any;
  focusedIcon?: string;
  unfocusedIcon?: string;
}

const NAV_ICONS: NavIcons[] = [
  {
    key: "iconFirst",
    title: "Icon 1",
    focusedIcon: "heart",
    unfocusedIcon: "heart-outline",
  },
  {
    key: "iconSecond",
    title: "Icon 2",
    focusedIcon: "heart",
    unfocusedIcon: "heart-outline",
  },
  {
    key: "iconThird",
    title: "Icon 3",
    focusedIcon: "bell",
    unfocusedIcon: "bell-outline",
  },
];

const FooterMenu = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState(NAV_ICONS);

  const renderScene = BottomNavigation.SceneMap({
    iconFirst: MusicRoute,
    iconSecond: RecentsRoute,
    iconThird: NotificationsRoute,
  });

  const insets = useSafeAreaInsets();

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      safeAreaInsets={{ bottom: insets.bottom }}
      barStyle={{ backgroundColor: "transparent" }}
      style={{ flex: 1 }}
    />
  );
};

export default FooterMenu;
