import "twin.macro";
import { useMeQuery, useGetUserBasketQuery } from "generated/graphql";
import { isServer } from "util/isServer";
import Header from "components/layout/header";
import Footer from "components/layout/footer";
import Wrapper from "components/layout/wrapper";
import { WrapperVariant } from "components/layout/wrapper";

type PropTypes = {
  children: React.ReactNode;
  container?: WrapperVariant;
};

const Layout = ({ children, container }: PropTypes) => {
  const [{ data: meData }] = useMeQuery({
    pause: isServer(),
  });
  const addressId =
    meData?.getApiV1AuthenticationGetuserdetails?.response?.addressId;

  const [{ data }] = useGetUserBasketQuery({
    pause: !addressId,
    variables: {
      addressId: addressId,
    },
  });
  const basket = data?.getApiV1BasketGetuserbasketbyaddressidasync?.response;

  const user = meData?.getApiV1AuthenticationGetuserdetails?.response;
  return (
    <main tw="min-h-screen flex flex-col">
      <Header user={user} basket={basket} />
      <Wrapper container={container}>{children}</Wrapper>
      <Footer />
    </main>
  );
};

export default Layout;
