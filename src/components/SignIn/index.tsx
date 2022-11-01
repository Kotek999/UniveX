import React, { FC, useContext, useRef, useState } from "react";
import { Text, ImageBackground, View } from "react-native";
import SafeArea from "../../common/SafeArea";
import { Card, Title, Button, TextInput } from "react-native-paper";
import { NavigationPropsList } from "../../../rootRouter";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

const backgroundImage = require("../../images/backgroundTheme.jpg");

const SignIn: FC = () => {
  const [text, setText] = useState("");
  const [visible, setVisible] = useState(false);

  const onToggleSnackBar = () => setVisible(!visible);

  const isGuest = () => {
    !visible ? navigation.navigate("Home") : navigation.navigate("HomeGuest");
  };

  const navigation =
    useNavigation<NativeStackNavigationProp<NavigationPropsList>>();

  return (
    <SafeArea titleOn={false} isSignIn={true}>
      <ImageBackground
        source={backgroundImage}
        resizeMode="cover"
        style={{ flex: 1, justifyContent: "center" }}
      >
        {/* <Text>Siema to logowanko</Text> */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
          }}
        >
          <Card
            style={{
              width: "80%",
              padding: 20,
              borderRadius: 20,
              backgroundColor: "white",
              shadowColor: "black",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,

              elevation: 5,
            }}
          >
            <Card.Content>
              <Title>Logowanie</Title>
              <Text style={{fontFamily: "Roboto"}}>Twój status: {!visible ? "Offline" : "Gość"}</Text>
              <TextInput
                mode="outlined"
                label="E-mail"
                value={text}
                style={{ marginTop: 24 }}
                onChangeText={(text) => setText(text)}
              />
              <TextInput
                mode="outlined"
                label="Hasło"
                style={{ marginTop: 10 }}
                secureTextEntry
                right={<TextInput.Icon icon="eye" />}
              />
              {/* <Paragraph>Card content</Paragraph> */}
            </Card.Content>
            <View
              style={{ marginTop: 24, marginBottom: 20, alignItems: "center" }}
            >
              <Button
                mode="outlined"
                onPress={() => isGuest()}
                style={{ width: "90%", backgroundColor: "gray" }}
              >
                <Text style={{ color: "white" }}>
                  {!visible ? "Zaloguj Się" : "Zaloguj się jako Gość"}
                </Text>
              </Button>
              <View style={{ padding: 10 }}>
                <Text>Nie masz konta? Zaloguj się jako Gość</Text>
              </View>
              {/* <Button onPress={onToggleSnackBar} icon={visible ? "check" : "close"}></Button> */}
              <Button mode="outlined" onPress={onToggleSnackBar}>
                Zweryfikuj
              </Button>
            </View>
          </Card>
        </View>
      </ImageBackground>
    </SafeArea>
  );
};

export default SignIn;
