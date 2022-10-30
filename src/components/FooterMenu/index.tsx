import * as React from "react";
import { ImageBackground, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { BottomNavigation, Text, Card } from "react-native-paper";
// @ts-ignore
import { v4 as uuidv4 } from "uuid";
const backgroundImage = require("../../images/backgroundTheme.jpg");
const moon = require("../../images/planets/moon.gif");

const HomeRouteGuest = (props: any) => {
  const screenTitle = !props.guest && <Text>Witaj! GOŚĆ{uuidv4()}</Text>;

  return (
    <Card.Title
      title={screenTitle}
      subtitle="Content 1"
      titleStyle={{ color: "red" }}
    />
  );
};

const HomeRouteUser = (props: any) => {
  const screenTitle = !props.guest && <Text>Witaj! USER</Text>;

  return (
    <Card.Title
      title={screenTitle}
      subtitle="Content 1"
      titleStyle={{ color: "red" }}
    />
  );
};
// const MusicRoute = () => <ImageBackground source={backgroundImage} resizeMode="cover" style={{flex: 1, justifyContent: "center"}}><Text>Content 1</Text></ImageBackground>;

const RecentsRoute = () => <Text>Planeta</Text>;
// const RecentsRoute = () => <ImageBackground source={backgroundImage} resizeMode="cover" style={{flex: 1, justifyContent: "center"}}><Text>Content 2</Text></ImageBackground>;

const NotificationsRoute = () => <Text>Content 3</Text>;
// const NotificationsRoute = () => <ImageBackground source={backgroundImage} resizeMode="cover" style={{flex: 1, justifyContent: "center"}}><Text>Content 3</Text></ImageBackground>;

export const DefaultPlanet = () => (
  <View
    style={{
      width: "30%",
      height: "40%",
      flexDirection: "row",
      alignSelf: "center",
      justifyContent: "center",
      alignItems: "center",
      alignContent: "center",
    }}
  >
    <View
      style={{
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
      }}
    >
      <ImageBackground
        resizeMode="cover"
        source={moon}
        style={{
          width: 60,
          height: 60,
          borderRadius: 10,
        }}
      ></ImageBackground>
    </View>
  </View>
);

interface NavIcons {
  key: string;
  title: string | any;
  focusedIcon?: string | any;
  unfocusedIcon?: string;
}

const NAV_ICONS: NavIcons[] = [
  {
    key: "iconFirst",
    title: "Home",
    focusedIcon: "heart",
    unfocusedIcon: "heart-outline",
  },
  {
    key: "iconSecond",
    title: <DefaultPlanet />,
    focusedIcon: "heart",
    unfocusedIcon: "heart-outline",
  },
  {
    key: "iconThird",
    title: "Profil",
    focusedIcon: "bell",
    unfocusedIcon: "bell-outline",
  },
];

interface FooterProps {
  isUser: boolean;
}

const FooterMenu = (props: FooterProps) => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState(NAV_ICONS);

  const renderSceneUser = BottomNavigation.SceneMap({
    iconFirst: () => <HomeRouteUser />,
    iconSecond: RecentsRoute,
    iconThird: NotificationsRoute,
  });

  const renderSceneGuest = BottomNavigation.SceneMap({
    iconFirst: () => <HomeRouteGuest />,
    iconSecond: RecentsRoute,
    iconThird: NotificationsRoute,
  });

  const insets = useSafeAreaInsets();

  return (
    <>
      {props.isUser ? (
        <BottomNavigation
          navigationState={{ index, routes }}
          onIndexChange={setIndex}
          renderScene={renderSceneUser}
          safeAreaInsets={{ bottom: insets.bottom }}
          barStyle={{ backgroundColor: "transparent" }}
          keyboardHidesNavigationBar
          style={{ flex: 1 }}
          activeColor="red"
          sceneAnimationType="shifting"
        />
      ) : (
        <BottomNavigation
          navigationState={{ index, routes }}
          onIndexChange={setIndex}
          renderScene={renderSceneGuest}
          safeAreaInsets={{ bottom: insets.bottom }}
          barStyle={{ backgroundColor: "transparent" }}
          keyboardHidesNavigationBar
          style={{ flex: 1 }}
          activeColor="red"
          sceneAnimationType="shifting"
        />
      )}
    </>
  );
};

export default FooterMenu;
