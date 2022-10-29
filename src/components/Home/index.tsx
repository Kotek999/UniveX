import React, { FC } from "react";
import FooterMenu from "../FooterMenu";
import SafeArea from "../../common/SafeArea";
import { Text } from "react-native-paper";
import "react-native-get-random-values";
// @ts-ignore
import { v4 as uuidv4 } from "uuid";

interface GuestProps {
  guest?: boolean;
}

const Home: FC = (props: GuestProps) => {
  return (
    <SafeArea screenTitle={props.guest && <Text>USER</Text>}>
      <FooterMenu />
    </SafeArea>
  );
};

export const HomeGuest: FC = (props: GuestProps) => {
  return (
    <SafeArea
      screenTitle={
        props.guest ? <Text>USER</Text> : <Text>GUEST {uuidv4()}</Text>
      }
    >
      <FooterMenu />
    </SafeArea>
  );
};

export default Home;
