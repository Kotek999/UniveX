import React, { FC } from "react";
import FooterMenu from "../FooterMenu";
import SafeArea from "../../common/SafeArea";

const Home: FC = () => {
  return (
    <SafeArea screenTitle="UniveX" guest={true}>
      <FooterMenu />
    </SafeArea>
  );
};

export default Home;
