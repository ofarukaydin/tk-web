import "twin.macro";
import { CSSObject } from "@emotion/core";

type PropTypes = {};

const Categories = (props: PropTypes) => {
  return (
    <div tw="border rounded-xl shadow-tk2">
      <div tw="bg-gray-700 py-4 px-4 rounded-t-xl ">
        <p tw="text-green-300 text-2xl leading-6">Kategoriler</p>
        <p tw="text-sm leading-4 text-white">Sebze & Meyve</p>
      </div>
      <div tw="bg-white font-medium text-gray-500 rounded-xl">
        <ul tw="divide-y divide-gray-100 ">
          <li tw="py-4 px-6 ">
            Fırsat Ürünleri (<span tw="text-green-500">12</span>)
          </li>
          <li tw="py-4 px-6 ">
            Yeni Ürünler (<span tw="text-green-500">7</span>)
          </li>
          <li tw="py-4 px-6 ">
            Meyve (<span tw="text-green-500">12</span>)
          </li>
          <li tw="py-4 px-6 ">
            Sebze (<span tw="text-green-500">7</span>)
          </li>
          <li tw="py-4 px-6 ">
            Konserve (<span tw="text-green-500">6</span>)
          </li>
          <li tw="py-4 px-6 ">
            Hazır Yemek (<span tw="text-green-500">2</span>)
          </li>
          <li tw="py-4 px-6 ">
            Özel Beslenme (<span tw="text-green-500">1</span>)
          </li>
          <li tw="py-4 px-6 ">
            Tarım Kredi Ürünleri (<span tw="text-green-500">0</span>)
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Categories;
