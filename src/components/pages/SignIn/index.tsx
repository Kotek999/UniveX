import React, { FC, useState } from "react";
import {
  Box,
  Text,
  Heading,
  VStack,
  Link,
  Button,
  HStack,
  Center,
} from "native-base";
import SafeArea from "../../../common/SafeArea";
import { ImageBackground, View } from "react-native";
import { TextInput } from "react-native-paper";
import { NavigationPropsList } from "../../../../rootRouter";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../../firebase";
import { User } from "firebase/auth";

const backgroundImage = require("../../../images/backgroundTheme.jpg");

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
            // console.log("User: ", user?.email);
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

//   console.log("User: ", user?.email);

  return (
    <SafeArea titleOn={false} isSignIn={true}>
      <ImageBackground
        source={backgroundImage}
        resizeMode="cover"
        style={{ flex: 1, justifyContent: "center" }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
          }}
        >
          <Center w="80%" backgroundColor="white" borderRadius={30}>
            <Box safeArea p="2" py="8" w="90%" maxW="290">
              <Heading
                size="lg"
                fontWeight="600"
                color="coolGray.800"
                _dark={{
                  color: "warmGray.50",
                }}
              >
                Logowanie
              </Heading>
              {/* <Heading
                mt="1"
                _dark={{
                  color: "warmGray.200",
                }}
                color="coolGray.600"
                fontWeight="medium"
                size="xs"
              >
                Sign in to continue!
              </Heading> */}
              <Text style={{ fontFamily: "Roboto" }}>
                Twój status:{" "}
                {!visible ? (
                  <Text style={{ color: "red" }}>Offline</Text>
                ) : (
                  <Text style={{ color: "green" }}>Gość</Text>
                )}
              </Text>
              <VStack space={3} mt="5">
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
                <Link
                  _text={{
                    fontSize: "xs",
                    fontWeight: "500",
                    color: "indigo.500",
                  }}
                  alignSelf="flex-end"
                  mt="1"
                >
                  Nie pamiętam hasła
                </Link>
                <Button mt="2" colorScheme="indigo" onPress={() => login()}>
                  {!visible ? "Zaloguj Się" : "Zaloguj się jako Gość"}
                </Button>
                <Button mt="2" colorScheme="indigo" onPress={onToggleSnackBar}>
                  Zweryfikuj
                </Button>
              </VStack>
            </Box>
          </Center>
        </View>
      </ImageBackground>
    </SafeArea>
  );
};

export default SignIn;
