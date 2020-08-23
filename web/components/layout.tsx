import "twin.macro";
import { useMeQuery } from "generated/graphql";
import { isServer } from "util/isServer";
import Header from "components/header";
import Footer from "components/footer";
import { withUrql } from "util/client";
import { WithUrqlProps } from "next-urql";

type PropTypes = {
  children: React.ReactNode;
};

const Layout = ({ children }: PropTypes) => {
  const [{ data }] = useMeQuery({
    pause: isServer(),
  });

  const user = data?.getApiV1AuthenticationGetuserdetails?.response;
  return (
    <div tw="min-h-screen flex flex-col">
      <Header user={user} />
      <div tw="container mx-auto flex-grow">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
