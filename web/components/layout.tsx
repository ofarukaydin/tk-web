import "twin.macro";
import { useMeQuery } from "generated/graphql";
import { isServer } from "util/isServer";
import Header from "components/header";
import Footer from "components/footer";
import React from "react";
import Wrapper from "components/layout/wrapper";

type PropTypes = {
  children: React.ReactNode;
  container?: "small" | "normal" | "none";
};

const Layout = ({ children, container = "normal" }: PropTypes) => {
  const [{ data }] = useMeQuery({
    pause: isServer(),
  });

  const user = data?.getApiV1AuthenticationGetuserdetails?.response;
  return (
    <div tw="min-h-screen flex flex-col">
      <Header user={user} />
      <Wrapper container={container}>{children}</Wrapper>
      <Footer />
    </div>
  );
};

export default Layout;
