import React, { FC } from "react";
import FooterMenu from "../FooterMenu";
import SafeArea from "../../common/SafeArea";
import { Text } from "react-native-paper";

interface GuestProps {
  guest?: boolean;
}

const Home: FC = (props: GuestProps) => {
  return (
    <SafeArea
      screenTitle={props.guest ? <Text>GUEST</Text> : <Text>USER</Text>}
    >
      <FooterMenu />
    </SafeArea>
  );
};

export const HomeGuest: FC = (props: GuestProps) => {
  return (
    <SafeArea
      screenTitle={props.guest ? <Text>USER</Text> : <Text>GUEST</Text>}
    >
      <FooterMenu />
    </SafeArea>
  );
};

export default Home;
