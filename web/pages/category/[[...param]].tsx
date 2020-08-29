import 'twin.macro';
import Layout from 'components/layout';
import SideNav from 'components/sidenav';
import MyCart from 'components/my-cart';
import Wrapper from 'components/layout/wrapper';
import AddCard from 'components/card-add';
import { useProductListQuery, useMeQuery, useAddProductToBasketMutation } from 'generated/graphql';
import { withUrql } from 'util/client';
import { useRouter } from 'next/router';
import { isServer } from 'util/is-server';

const CategoriesPage = (): JSX.Element => {
  const router = useRouter();
  const baseCategoryIdFromQuery = router.query?.param?.[0];
  const subCategoryIdFromQuery = router.query?.param?.[1];

  const [productListResponse] = useProductListQuery({
    variables: {
      merchantBranchId: 3,
      parentCategoryId: baseCategoryIdFromQuery,
      pageSize: 50,
    },
    pause: !baseCategoryIdFromQuery,
  });

  const [{ data }] = useMeQuery({
    pause: isServer(),
  });

  const [, addProductToBasket] = useAddProductToBasketMutation();

  const subCategories =
    productListResponse.data?.getApiV1ProductGetsubcategorieswithproductsandcategory?.response
      ?.data || [];

  const concatinatedProducts = subCategories.flatMap((el) => el?.products);

  const currentSubCategory = subCategories.find((el) => el?.id === subCategoryIdFromQuery);

  const productsInCurrentSubCategory = (
    currentSubCategory?.products ||
    concatinatedProducts ||
    []
  ).map((product) => (
    <AddCard
      key={product?.productItemId}
      product={product}
      onClick={() => {
        console.log('clicked, options:', {
          addressId: Number.parseInt(
            data?.getApiV1AuthenticationGetuserdetails?.response?.addressId,
            10,
          ),
          basketItem: {
            productId: Number.parseInt(product?.productId, 10),
            productItemId: Number.parseInt(product?.productItemId, 10),
            quantity: 1,
          },
        });
        addProductToBasket({
          options: {
            addressId: Number.parseInt(
              data?.getApiV1AuthenticationGetuserdetails?.response?.addressId,
              10,
            ),
            basketItem: {
              productId: Number.parseInt(product?.productId, 10),
              productItemId: Number.parseInt(product?.productItemId, 10),
              quantity: 1,
            },
          },
        });
      }}
    />
  ));

  return (
    <Layout container="none">
      <Wrapper>
        {baseCategoryIdFromQuery ? (
          <div tw="md:flex sm:block">
            <div tw="md:w-1/3">
              <SideNav
                title="Kategoriler"
                subTitle={currentSubCategory?.name}
                items={subCategories}
                baseCategoryId={baseCategoryIdFromQuery}
              />
              <div tw="mt-6">
                <MyCart />
              </div>
            </div>
            <div tw="md:w-2/3 md:ml-6">
              <div tw="grid md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
                {productsInCurrentSubCategory}
              </div>
            </div>
          </div>
        ) : (
          <div tw="text-center font-bold text-red-650">Geçersiz kategori</div>
        )}
      </Wrapper>
    </Layout>
  );
};
export default withUrql(CategoriesPage);
