import React, { FC } from "react";
import FooterMenu from "../FooterMenu";
import SafeArea from "../../common/SafeArea";
import { Text } from "react-native-paper";
import "react-native-get-random-values";
// @ts-ignore
import { v4 as uuidv4 } from "uuid";

interface HomeProps {
  guest?: boolean;
}

interface GuestProps {
  guest?: boolean;
}

const Home: FC = (props: HomeProps) => {
  const screenTitle = props.guest && <Text>USER</Text>;

  return (
    <SafeArea screenTitle={screenTitle} titleOn={true} isSignIn={false}>
      <FooterMenu isUser={true}/>
    </SafeArea>
  );
};

export const HomeGuest: FC = (props: GuestProps) => {
  const screenTitle = !props.guest && <Text>Witaj! GOŚĆ{uuidv4()}</Text>;

  return (
    <SafeArea screenTitle={screenTitle} titleOn={true} isSignIn={false}>
      <FooterMenu isUser={false}/>
    </SafeArea>
  );
};

export default Home;
