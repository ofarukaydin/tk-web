import "twin.macro";
import { Maybe, ProductItemListDto } from "generated/graphql";

type PropTypes = {
  product: Maybe<ProductItemListDto>;
};

const PlusBox = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16.2193 7.72053C16.6081 7.72053 16.981 7.87498 17.2559 8.14991C17.5308 8.42484 17.6853 8.79773 17.6853 9.18653C17.6853 9.57534 17.5308 9.94823 17.2559 10.2232C16.981 10.4981 16.6081 10.6525 16.2193 10.6525H10.3555V16.5166C10.3555 16.9054 10.201 17.2783 9.9261 17.5532C9.65118 17.8281 9.2783 17.9826 8.88951 17.9826C8.50071 17.9826 8.12784 17.8281 7.85292 17.5532C7.578 17.2783 7.42355 16.9054 7.42355 16.5166V10.6525H1.55971C1.17091 10.6525 0.798041 10.4981 0.52312 10.2232C0.248199 9.94823 0.09375 9.57534 0.09375 9.18653C0.09375 8.79773 0.248199 8.42484 0.52312 8.14991C0.798041 7.87498 1.17091 7.72053 1.55971 7.72053H7.42355V1.85651C7.42355 1.4677 7.578 1.09482 7.85292 0.819886C8.12784 0.544957 8.50071 0.390503 8.88951 0.390503C9.2783 0.390503 9.65118 0.544957 9.9261 0.819886C10.201 1.09482 10.3555 1.4677 10.3555 1.85651V7.72053H16.2193Z"
      fill="#66BB6A"
    />
  </svg>
);

const AddCard = ({ product }: PropTypes) => {
  return (
    <div tw="relative rounded-lg shadow-tk2 w-full bg-white flex flex-col justify-between pb-4">
      <div
        css={{ top: 10, right: 10 }}
        tw="hover:cursor-pointer absolute p-2 shadow-tk1 rounded-xl hover:bg-gray-100"
      >
        <PlusBox />
      </div>
      <div tw="flex justify-center items-center p-4">
        <img
          tw="object-cover w-full h-full block"
          src={product?.imageUrl || ""}
          alt={product?.name || ""}
        />
      </div>
      <div tw="pl-4">
        <div tw="leading-5">
          <p tw="text-gray-600 text-2xl font-bold">{product?.name}</p>
          <p tw="text-xs">{product?.unit} Adet</p>
        </div>
        <div tw="mt-2 leading-5">
          <p tw="text-xs line-through">{product?.price}₺</p>
          <p tw="text-lg text-green-600">{(product?.price || 0) * 1.5}₺</p>
        </div>
      </div>
    </div>
  );
};

export default AddCard;
