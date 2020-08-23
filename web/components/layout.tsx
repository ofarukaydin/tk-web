import "twin.macro";
import { useMeQuery } from "generated/graphql";
import { isServer } from "util/isServer";
import Header from "components/header";
import Footer from "components/footer";
import tw from "twin.macro";

type PropTypes = {
  children: React.ReactNode;
  container?: "small" | "normal" | "none";
};

const Wrapper = ({ children, container = "normal" }: PropTypes) => {
  const [{ data }] = useMeQuery({
    pause: isServer(),
  });

  const normalVariant = tw`container flex-grow mx-auto`;
  const smallVariant = tw`flex-grow max-w-2xl mx-auto`;
  const noneVariant = tw`flex-grow`;

  const user = data?.getApiV1AuthenticationGetuserdetails?.response;
  return (
    <div tw="min-h-screen flex flex-col">
      <Header user={user} />
      <div
        css={[
          container === "none" && noneVariant,
          container === "normal" && normalVariant,
          container === "small" && smallVariant,
        ]}
      >
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Wrapper;
