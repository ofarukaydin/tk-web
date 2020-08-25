import "twin.macro";
import FeaturedCard from "components/featured-card";
import SmallCard from "components/card-small";
import {
  useGetBaseCategoriesQuery,
  useProductListQuery,
} from "generated/graphql";
import AddCard from "components/card-add";
import AdHome from "components/ad-home";
import SlideShow from "components/slideshow";
import { withUrqlSsr } from "util/client";
import Layout from "components/layout";
import Wrapper from "components/layout/wrapper";

const Index = () => {
  const [baseCategoriesResponse] = useGetBaseCategoriesQuery();
  const [productListResponse] = useProductListQuery({
    variables: { merchantBranchId: 3, parentCategoryId: 1 },
  });

  const categories = (
    baseCategoriesResponse.data?.getApiV1ProductGetbasecategories?.response
      ?.baseCategories || []
  ).map((el) => (
    <SmallCard
      key={el?.name}
      title={el?.name || ""}
      href={`/category/${el?.id}`}
      imageSrc={el?.icon || ""}
    />
  ));

  const showCase = (
    productListResponse.data
      ?.getApiV1ProductGetsubcategorieswithproductsandcategory?.response
      ?.data?.[0]?.products || []
  ).map((product) => {
    return <AddCard key={product?.productItemId} product={product} />;
  });

  return (
    <Layout container="none">
      <div tw="flex flex-wrap -mx-2 flex-col">
        <Wrapper>
          <div tw="w-full">
            <SlideShow />
          </div>

          <div tw="grid grid-cols-3 gap-4 mt-8">
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

          <div tw="grid grid-cols-6 gap-4 w-full mt-8">{categories}</div>
        </Wrapper>
        <div
          css={{ backgroundColor: "#F1F8F1" }}
          tw="flex items-center justify-center mt-4"
        >
          <Wrapper>
            <div tw="grid grid-cols-6 gap-4 w-full my-8">{showCase}</div>
          </Wrapper>
        </div>

        <Wrapper>
          <AdHome />
        </Wrapper>
      </div>
    </Layout>
  );
};

export default withUrqlSsr(Index);
