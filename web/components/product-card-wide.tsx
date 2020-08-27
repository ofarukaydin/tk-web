import "twin.macro";
import { Maybe } from "graphql/jsutils/Maybe";
import { BasketItemListDto } from "generated/graphql";

type PropTypes = {
  product: Maybe<BasketItemListDto> | undefined;
};

const ProductCardWide = ({ product }: PropTypes) => {
  return (
    <div tw="flex py-6 px-6 mt-2 items-center rounded-lg border justify-between">
      <div tw="flex">
        <img src={product?.productImage || ""} width="65" height="65" />
        <div tw="ml-4">
          <p tw="text-gray-500 font-semibold">{product?.productName}</p>
          <p tw="text-green-600 text-lg font-bold ">{product?.price}₺</p>
          <p tw="line-through">{(product?.price || 0) * 2}₺</p>
        </div>
      </div>
      <p tw="font-semibold text-orange-650">1 Adet</p>
    </div>
  );
};

export default ProductCardWide;
