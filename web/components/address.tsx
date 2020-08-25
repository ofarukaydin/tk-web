import "twin.macro";

type PropTypes = {
  fullName: string;
  address: string;
};

const Address = ({ fullName, address }: PropTypes) => {
  return (
    <div tw="flex rounded-xl shadow-tk2 w-full">
      <div tw="p-8 w-1/3 ">
        <p>{fullName}</p>
        <p>{address}</p>
      </div>
      <div tw="w-2/3">Map here</div>
    </div>
  );
};

export default Address;
