import 'twin.macro';
import FeaturedCard from 'components/featured-card';
import SmallCard from 'components/card-small';
import {
  useGetBaseCategoriesQuery,
  useProductListQuery,
  useAddProductToBasketMutation,
  useMeQuery,
} from 'generated/graphql';
import AddCard from 'components/card-add';
import AdHome from 'components/ad-home';
import SlideShow from 'components/slideshow';
import { withUrqlSsr } from 'util/client';
import Layout from 'components/layout';
import Wrapper from 'components/layout/wrapper';
import { isServer } from 'util/is-server';

const Index = (): JSX.Element => {
  const [baseCategoriesResponse] = useGetBaseCategoriesQuery();
  const [productListResponse] = useProductListQuery({
    variables: { merchantBranchId: 3, parentCategoryId: 1 },
  });
  const [{ data }] = useMeQuery({
    pause: isServer(),
  });
  const [, addProductToBasket] = useAddProductToBasketMutation();

  const categories = (
    baseCategoriesResponse.data?.getApiV1ProductGetbasecategories?.response?.baseCategories || []
  ).map((el) => (
    <SmallCard
      key={el?.name}
      title={el?.name || ''}
      href={`/category/${el?.id}`}
      imageSrc={el?.icon || ''}
    />
  ));

  const showCase = (
    productListResponse.data?.getApiV1ProductGetsubcategorieswithproductsandcategory?.response
      ?.data?.[0]?.products || []
  ).map((product) => {
    return (
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
                quantity: product?.unit,
              },
            },
          });
        }}
      />
    );
  });

  return (
    <Layout container="none">
      <Wrapper>
        <div tw="w-full">
          <SlideShow />
        </div>

        <div tw="grid sm:grid-cols-1 lg:grid-cols-3 gap-4 mt-8">
          <FeaturedCard
            imgSrc="/wmelon.png"
            bg="linear-gradient(66.56deg, #AED238 0%, #C8DE80 97.34%)"
            title="Taze meyve ve sebzeler"
          />

          <FeaturedCard
            imgSrc="/hamburger.png"
            bg="linear-gradient(66.56deg, #E79324 0%, #FFE193 97.34%)"
            title="Hamburger Zamanı"
          />

          <FeaturedCard
            imgSrc="/kavrulmus.png"
            bg="linear-gradient(66.56deg, #51AD56 0%, #96E88A 97.34%)"
            title="Çifte Kavrulmuş"
          />
        </div>

        <div tw="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 w-full mt-8">
          {categories}
        </div>
      </Wrapper>
      <div css={{ backgroundColor: '#F1F8F1' }} tw="flex items-center justify-center mt-4">
        <Wrapper>
          <div tw="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 w-full my-8">
            {showCase}
          </div>
        </Wrapper>
      </div>

      <Wrapper>
        <AdHome />
      </Wrapper>
    </Layout>
  );
};

export default withUrqlSsr(Index);
