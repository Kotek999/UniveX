import React, { FC, useContext, useRef, useState } from "react";
import { Text, ImageBackground, View } from "react-native";
import SafeArea from "../../common/SafeArea";
import { Card, Title, Button, TextInput } from "react-native-paper";
import { NavigationPropsList } from "../../../rootRouter";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
// import { auth } from "../../../firebase";
import { firebase } from "../../../firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const backgroundImage = require("../../images/backgroundTheme.jpg");

const SignIn: FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);

  // const handleSignUp = () => {
  //   auth
  //     .createUserWithEmailAndPassword(email, password)
  //     .then((userCredentials: any) => {
  //       const user = userCredentials.user;
  //       console.log(user.email)
  //     })
  //     .catch((error: any) => alert(error.message))
  // }

  const onToggleSnackBar = () => setVisible(!visible);

  const isGuest = () => {
    !visible ? navigation.navigate("Home") : navigation.navigate("HomeGuest");
  };

  const navigation =
    useNavigation<NativeStackNavigationProp<NavigationPropsList>>();

  //  const loginUser = async ({email}: any, {password}: any) => {
  //     try {
  //       await firebase.auth().signInWithEmailAndPassword(auth, email, password)
  //     } catch (error: any) {
  //       alert(error.message)
  //     }
  //   }

  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });

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
              <Text style={{ fontFamily: "Roboto" }}>
                Twój status: {!visible ? "Offline" : "Gość"}
              </Text>
              <TextInput
                mode="outlined"
                label="E-mail"
                value={email}
                style={{ marginTop: 24 }}
                onChangeText={(text) => setEmail(text)}
              />
              <TextInput
                mode="outlined"
                label="Hasło"
                style={{ marginTop: 10 }}
                value={password}
                secureTextEntry
                onChangeText={(text) => setPassword(text)}
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
                  {/* {!visible ? "Zaloguj Się" : "Zaloguj się jako Gość"} */}
                  Zarejestruj się
                </Text>
              </Button>
              <Button
                mode="outlined"
                onPress={() =>
                  signInWithEmailAndPassword(auth, email, password)
                }
                style={{ width: "90%", backgroundColor: "red" }}
              >
                <Text style={{ color: "white" }}>
                  {/* {!visible ? "Zaloguj Się" : "Zaloguj się jako Gość"} */}
                  Zarejestruj się - firebase test
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
