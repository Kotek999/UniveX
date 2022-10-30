import React, { useEffect, useState } from "react";
import { Text } from "react-native-paper";
import Root from "./rootRouter";
import * as Font from "expo-font";

export default function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      await Font.loadAsync({
        Roboto: require("./assets/fonts/Roboto-Regular.ttf"),
      });
      setLoading(false);
    })();
  }, []);

  return loading ? <Text>{"loading"}</Text> : <Root />;
}
