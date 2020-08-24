import "twin.macro";
import Layout from "components/layout";
import Categories from "components/sidenav";
import MyCart from "components/my-cart";

type PropTypes = {};

const Cart = (props: PropTypes) => {
  return (
    <Layout>
      <div tw="flex justify-between">
        <div tw="w-2/3 mr-6">
          <div tw="flex py-6 px-6 mt-2 items-center rounded-lg border justify-between">
            <div>
              <div tw="flex">
                <img src="/ananas.png" width="65" height="65" />
                <div tw="ml-4">
                  <p tw="text-gray-500 font-semibold">Portakal</p>
                  <p tw="text-green-600 text-lg font-bold ">24,90₺</p>
                  <p tw="line-through">{50.1}₺</p>
                </div>
              </div>
            </div>
            <p tw="font-semibold text-orange-650">1 Adet</p>
          </div>
          <div tw="flex py-6 px-6 mt-2 items-center rounded-lg border justify-between">
            <div>
              <div tw="flex">
                <img src="/ananas.png" width="65" height="65" />
                <div tw="ml-4">
                  <p tw="text-gray-500 font-semibold">Portakal</p>
                  <p tw="text-green-600 text-lg font-bold ">24,90₺</p>
                  <p tw="line-through">{50.1}₺</p>
                </div>
              </div>
            </div>
            <p tw="font-semibold text-orange-650">1 Adet</p>
          </div>
          <div tw="flex py-6 px-6 mt-2 items-center rounded-lg border justify-between">
            <div>
              <div tw="flex">
                <img src="/ananas.png" width="65" height="65" />
                <div tw="ml-4">
                  <p tw="text-gray-500 font-semibold">Portakal</p>
                  <p tw="text-green-600 text-lg font-bold ">24,90₺</p>
                  <p tw="line-through">{50.1}₺</p>
                </div>
              </div>
            </div>
            <p tw="font-semibold text-orange-650">1 Adet</p>
          </div>
          <div tw="flex py-6 px-6 mt-2 items-center rounded-lg border justify-between">
            <div>
              <div tw="flex">
                <img src="/ananas.png" width="65" height="65" />
                <div tw="ml-4">
                  <p tw="text-gray-500 font-semibold">Portakal</p>
                  <p tw="text-green-600 text-lg font-bold ">24,90₺</p>
                  <p tw="line-through">{50.1}₺</p>
                </div>
              </div>
            </div>
            <p tw="font-semibold text-orange-650">1 Adet</p>
          </div>
          <div tw="flex py-6 px-6 mt-2 items-center rounded-lg border justify-between">
            <div>
              <div tw="flex">
                <img src="/ananas.png" width="65" height="65" />
                <div tw="ml-4">
                  <p tw="text-gray-500 font-semibold">Portakal</p>
                  <p tw="text-green-600 text-lg font-bold ">24,90₺</p>
                  <p tw="line-through">{50.1}₺</p>
                </div>
              </div>
            </div>
            <p tw="font-semibold text-orange-650">1 Adet</p>
          </div>
        </div>
        <div tw="w-1/3">
          <Categories />
          <div tw="mt-6">
            <MyCart />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
