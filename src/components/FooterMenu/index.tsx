import * as React from "react";
import { ImageBackground, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { BottomNavigation, Text } from "react-native-paper";
import { useFonts } from "expo-font";


const backgroundImage = require("../../images/backgroundTheme.jpg");
const moon = require("../../images/planets/moon.gif");

const HomeRoute = () => (
  
  <View>
    {/* <Text style={{ fontFamily: 'Inter-SemiBoldItalic', fontSize: 30 }}>Content 1</Text> */}
    <Text>Content 1</Text>
  </View>
);
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
    title: "Profile",
    focusedIcon: "bell",
    unfocusedIcon: "bell-outline",
  },
];

const FooterMenu = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState(NAV_ICONS);

  const renderScene = BottomNavigation.SceneMap({
    iconFirst: () => <HomeRoute />,
    iconSecond: RecentsRoute,
    iconThird: NotificationsRoute,
  });

  const insets = useSafeAreaInsets()
  
  // const [fontsLoaded] = useFonts({
  //   'Inter-SemiBoldItalic': 'https://rsms.me/inter/font-files/Inter-SemiBoldItalic.otf?v=3.12',
  // });

  // if (!fontsLoaded) {
  //   return null;
  // }

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      safeAreaInsets={{ bottom: insets.bottom }}
      barStyle={{ backgroundColor: "transparent" }}
      keyboardHidesNavigationBar
      style={{ flex: 1 }}
      activeColor="red"
      sceneAnimationType="shifting"
    />
  );
};

export default FooterMenu;
