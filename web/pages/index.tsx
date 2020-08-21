import "twin.macro";
import FeaturedCard from "components/featured-card";
import SmallCard from "components/card-small";
import { useGetBaseCategoriesQuery } from "generated/graphql";
import AddCard from "components/card-add";
import AdHome from "components/ad-home";
import SlideShow from "components/slideshow";

export default function Home() {
  const [response] = useGetBaseCategoriesQuery();

  const categories = (
    response.data?.getApiV1ProductGetbasecategories?.response?.baseCategories ||
    []
  ).map((el) => (
    <div key={el?.name} tw="my-2 px-2 w-1/6">
      <SmallCard
        title={el?.name || ""}
        href={el?.categoryUrl || ""}
        imageSrc={el?.icon || ""}
      />
    </div>
  ));

  return (
    <div tw="flex flex-wrap -mx-2 mt-4">
      <div tw="w-full">
        <SlideShow />
      </div>

      <div tw="grid grid-cols-3 gap-4 mt-8">
        <FeaturedCard
          imgSrc="/wmelon.png"
          gradient="linear-gradient(66.56deg, #AED238 0%, #C8DE80 97.34%)"
          title="Taze meyve ve sebzeler"
        />

        <FeaturedCard
          imgSrc="/hamburger.png"
          gradient="linear-gradient(66.56deg, #E79324 0%, #FFE193 97.34%)"
          title="Hamburger Zamanı"
        />

        <FeaturedCard
          imgSrc="/kavrulmus.png"
          gradient="linear-gradient(66.56deg, #51AD56 0%, #96E88A 97.34%)"
          title="Çifte Kavrulmuş"
        />
      </div>

      <div tw="grid grid-cols-6 gap-4 w-full mt-8">
        <SmallCard title="Meyve & Sebze" href="" />
        <SmallCard title="Meyve & Sebze" href="" />
        <SmallCard title="Meyve & Sebze" href="" />
        <SmallCard title="Meyve & Sebze" href="" />
        <SmallCard title="Meyve & Sebze" href="" />
        <SmallCard title="Meyve & Sebze" href="" />
        <SmallCard title="Meyve & Sebze" href="" />
        <SmallCard title="Meyve & Sebze" href="" />
        <SmallCard title="Meyve & Sebze" href="" />
        <SmallCard title="Meyve & Sebze" href="" />
        <SmallCard title="Meyve & Sebze" href="" />
        <SmallCard title="Meyve & Sebze" href="" />
      </div>

      <div tw="grid grid-cols-6 gap-4 w-full mt-8">
        <AddCard
          productImg="/ananas.png"
          name="Ananas"
          quantity={1}
          price={15.99}
          discountedPrice={14.3}
        />
        <AddCard
          productImg="/ananas.png"
          name="Ananas"
          quantity={1}
          price={15.99}
          discountedPrice={14.3}
        />
        <AddCard
          productImg="/ananas.png"
          name="Ananas"
          quantity={1}
          price={15.99}
          discountedPrice={14.3}
        />
        <AddCard
          productImg="/ananas.png"
          name="Ananas"
          quantity={1}
          price={15.99}
          discountedPrice={14.3}
        />
        <AddCard
          productImg="/ananas.png"
          name="Ananas"
          quantity={1}
          price={15.99}
          discountedPrice={14.3}
        />
        <AddCard
          productImg="/ananas.png"
          name="Ananas"
          quantity={1}
          price={15.99}
          discountedPrice={14.3}
        />
      </div>
      <AdHome />
    </div>
  );
}
