import "twin.macro";
import { useMeQuery } from "generated/graphql";
import { isServer } from "util/isServer";
import Header from "components/header";
import Footer from "components/footer";
import Wrapper from "components/layout";
import { WrapperVariant } from "components/layout/wrapper";

type PropTypes = {
  children: React.ReactNode;
  container?: WrapperVariant;
};

const Layout = ({ children, container }: PropTypes) => {
  const [{ data }] = useMeQuery({
    pause: isServer(),
  });

  const user = data?.getApiV1AuthenticationGetuserdetails?.response;
  return (
    <main tw="min-h-screen flex flex-col">
      <Header user={user} />
      <Wrapper container={container}>{children}</Wrapper>
      <Footer />
    </main>
  );
};

export default Layout;
