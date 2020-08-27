import 'twin.macro';
import Layout from 'components/layout';
import ProductCardWide from 'components/product-card-wide';
import { useGetUserBasketQuery, useMeQuery } from 'generated/graphql';
import { withUrql } from 'util/client';
import Link from 'next/link';

const BasketPage = (): JSX.Element => {
  const [{ data: meData }] = useMeQuery();

  const addressId = meData?.getApiV1AuthenticationGetuserdetails?.response?.addressId;

  const [{ data }] = useGetUserBasketQuery({
    pause: !addressId,
    variables: {
      addressId,
    },
  });
  const basket = data?.getApiV1BasketGetuserbasketbyaddressidasync?.response;

  const products = (basket?.items || []).map((product) => (
    <ProductCardWide key={product?.productId} product={product} />
  ));

  return (
    <Layout>
      {products.length > 0 ? (
        <>
          {products}
          <div tw="flex justify-end items-center text-gray-500">
            <div>
              <p tw="text-lg font-semibold ">
                Toplam Tutar: <span tw="text-green-600">{basket?.totalAmount}₺</span>
              </p>

              <p tw="text-sm">
                Sepet Tutarı: <span>{basket?.amount}₺</span>
              </p>
              <p tw="text-sm">
                Gönderim ücreti: <span>{basket?.shippingPrice}₺</span>
              </p>
            </div>
            <Link href="/address" as="/address">
              <a>
                <button type="button" tw="m-6 bg-green-500 text-white rounded w-full py-2 w-64">
                  Devam et
                </button>
              </a>
            </Link>
          </div>
        </>
      ) : (
        <div tw="text-center">Şimdilik sepetiniz boş</div>
      )}
    </Layout>
  );
};

export default withUrql(BasketPage);
