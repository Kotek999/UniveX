import React, { FC, useState } from "react";
import { Text, ImageBackground, View } from "react-native";
import SafeArea from "../../common/SafeArea";
import { Card, Title, Button, TextInput } from "react-native-paper";
import { NavigationPropsList } from "../../../rootRouter";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase";
import { User } from "firebase/auth";

const backgroundImage = require("../../images/backgroundTheme.jpg");

const SignIn: FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);
  const [user, setUser] = useState<User>();

  const onToggleSnackBar = () => setVisible(!visible);

  const navigation =
    useNavigation<NativeStackNavigationProp<NavigationPropsList>>();

  const login = () => {
    !visible
      ? signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
           const user = userCredential.user;
           setUser(user);
            alert("Logowanie zakończone powodzeniem");
            navigation.replace("Home");
            console.log("User: ", user?.email);
            // console.log("User: ", user.email);
          })
          .catch((error) => {
            const errorCode = error.code;
            // const errorMessage = error.message;

            if (error.code === "auth/invalid-email") {
              alert("Niepoprawny adres email!");
              console.log(errorCode);
            }
            if (error.code === "auth/email-already-in-use") {
              alert("Adres email jest już w użyciu!");
              console.log(errorCode);
            }
            if (error.code === "auth/internal-error") {
              alert("Niepoprawne hasło!");
              console.log(errorCode);
            }
          })
      : navigation.replace("HomeGuest");
  };

  console.log("User: ", user?.email);

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
                Twój status:{" "}
                {!visible ? (
                  <Text style={{ color: "red" }}>Offline</Text>
                ) : (
                  <Text style={{ color: "green" }}>Gość</Text>
                )}
              </Text>
              <TextInput
                mode="outlined"
                label="E-mail"
                value={email}
                style={{ marginTop: 24 }}
                onChangeText={(text) => setEmail(text)}
                right={<TextInput.Icon icon="email" />}
              />
              <TextInput
                mode="outlined"
                label="Hasło"
                style={{ marginTop: 10 }}
                value={password}
                secureTextEntry
                onChangeText={(text) => setPassword(text)}
                right={<TextInput.Icon icon="security" />}
              />
            </Card.Content>
            <View
              style={{ marginTop: 24, marginBottom: 20, alignItems: "center" }}
            >
              <Button
                mode="outlined"
                onPress={() => login()}
                style={{ width: "90%", backgroundColor: "gray" }}
              >
                <Text style={{ color: "white" }}>
                  {!visible ? "Zaloguj Się" : "Zaloguj się jako Gość"}
                </Text>
              </Button>
              <View style={{ margin: 20, width: "100%" }}>
                <Text style={{ textAlign: "center" }}>
                  Nie masz konta? Zaloguj się jako Gość
                </Text>
              </View>
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
