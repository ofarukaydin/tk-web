import "twin.macro";
import Layout from "components/layout";
import SideNav from "components/sidenav";
import MyCart from "components/my-cart";
import Wrapper from "components/layout/wrapper";
import AddCard from "components/card-add";
import { useProductListQuery } from "generated/graphql";
import { withUrql } from "util/client";
import { useRouter } from "next/router";

const CategoriesPage = () => {
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

  const subCategories =
    productListResponse.data
      ?.getApiV1ProductGetsubcategorieswithproductsandcategory?.response
      ?.data || [];

  const concatinatedProducts = subCategories.flatMap((el) => el?.products);

  const currentSubCategory = subCategories.filter(
    (el) => el?.id === subCategoryIdFromQuery
  )[0];

  const productsInCurrentSubCategory = (
    currentSubCategory?.products ||
    concatinatedProducts ||
    []
  ).map((product) => (
    <AddCard key={product?.productItemId} product={product} />
  ));

  return (
    <Layout container="none">
      <Wrapper>
        {baseCategoryIdFromQuery ? (
          <div tw="flex">
            <div tw="w-1/3">
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
            <div tw="w-2/3 ml-6">
              <div tw="grid grid-cols-4 gap-4 w-full">
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
