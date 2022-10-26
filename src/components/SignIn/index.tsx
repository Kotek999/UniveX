import React, { FC, useState } from "react";
import { Text, ImageBackground, View } from "react-native";
import { Button } from "react-native-paper";
import SafeArea from "../../common/SafeArea";
import { Card, Title, Paragraph } from "react-native-paper";
import { TextInput } from "react-native-paper";

const backgroundImage = require("../../images/backgroundTheme.jpg");

const SingIn: FC = ({ navigation }: any) => {
  const [text, setText] = useState("");
  return (
    <SafeArea screenTitle="SignIn">
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
              <TextInput
                mode="outlined"
                label="Nazwa"
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
                onPress={() => navigation.navigate("Home")}
                style={{ width: "90%", backgroundColor: "gray" }}
              >
                <Text style={{ color: "white" }}>Zaloguj Się</Text>
              </Button>
            </View>
          </Card>
        </View>
      </ImageBackground>
    </SafeArea>
  );
};

export default SingIn;
