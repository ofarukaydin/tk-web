import tw from "twin.macro";

const normalVariant = tw`container flex-grow mx-auto`;
const smallVariant = tw`flex-grow max-w-2xl mx-auto`;
const noneVariant = tw`flex-grow`;

export type WrapperVariant = "small" | "normal" | "none";

type PropTypes = {
  children: React.ReactNode;
  container?: WrapperVariant;
};

const Wrapper = ({ children, container = "normal" }: PropTypes) => {
  return (
    <div
      css={[
        container === "none" && noneVariant,
        container === "normal" && normalVariant,
        container === "small" && smallVariant,
      ]}
      tw="my-6"
    >
      {children}
    </div>
  );
};

export default Wrapper;
