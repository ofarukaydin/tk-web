import "twin.macro";
import { RemoveItem } from "components/icons";

type PropTypes = {};

const MyCart = ({}: PropTypes) => {
  return (
    <div tw="rounded-xl shadow-tk2 bg-white">
      <div tw="p-6 flex justify-between items-center">
        <p tw="font-bold text-2xl text-gray-500">Sepetim</p>
        <RemoveItem />
      </div>
      <hr />
      <div tw="divide-y divide-gray-100">
        <div tw="flex py-6 px-4">
          <div tw="border rounded-lg border-gray-100">
            <img src="/ananas.png" width="65" height="65" />
          </div>
          <div tw="ml-4">
            <p tw="text-gray-500 font-semibold">Portakal</p>
            <p tw="text-green-600 text-lg font-bold ">24,90₺</p>
          </div>
        </div>
        <div tw="flex py-6 px-4">
          <div tw="border rounded-lg border-gray-100">
            <img src="/ananas.png" width="65" height="65" />
          </div>
          <div tw="ml-4">
            <p tw="text-gray-500 font-semibold">Portakal</p>
            <p tw="text-green-600 text-lg font-bold ">24,90₺</p>
          </div>
        </div>
        <div tw="flex py-6 px-4">
          <div tw="border rounded-lg border-gray-100">
            <img src="/ananas.png" width="65" height="65" />
          </div>
          <div tw="ml-4">
            <p tw="text-gray-500 font-semibold">Portakal</p>
            <p tw="text-green-600 text-lg font-bold ">24,90₺</p>
          </div>
        </div>
      </div>
      <div tw="bg-green-600 text-white font-bold uppercase py-6 rounded-b-xl text-center">
        Sepetin Tamamını Gör
      </div>
    </div>
  );
};

export default MyCart;
