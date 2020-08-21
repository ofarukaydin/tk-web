import "twin.macro";
import FeaturedCard from "components/featured-card";
import SmallCard from "components/card-small";
import { useGetBaseCategoriesQuery } from "generated/graphql";

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
      <div tw="my-2 pr-2 w-1/3">
        <FeaturedCard
          imgSrc="/wmelon.png"
          gradient="linear-gradient(66.56deg, #AED238 0%, #C8DE80 97.34%)"
          title="Taze meyve ve sebzeler"
        />
      </div>

      <div tw="my-2 px-2 w-1/3">
        <FeaturedCard
          imgSrc="/hamburger.png"
          gradient="linear-gradient(66.56deg, #E79324 0%, #FFE193 97.34%)"
          title="Hamburger Zamanı"
        />
      </div>
      <div tw="my-2 pl-2 w-1/3">
        <FeaturedCard
          imgSrc="/kavrulmus.png"
          gradient="linear-gradient(66.56deg, #51AD56 0%, #96E88A 97.34%)"
          title="Çifte Kavrulmuş"
        />
      </div>

      <div tw="flex flex-wrap -mx-2">
        <div tw="my-2 px-2 w-1/6">
          <SmallCard title="Meyve & Sebze" href="" />
        </div>

        <div tw="my-2 px-2 w-1/6">
          <SmallCard title="Meyve & Sebze" href="" />
        </div>

        <div tw="my-2 px-2 w-1/6">
          <SmallCard title="Meyve & Sebze" href="" />
        </div>

        <div tw="my-2 px-2 w-1/6">
          <SmallCard title="Meyve & Sebze" href="" />
        </div>

        <div tw="my-2 px-2 w-1/6">
          <SmallCard title="Meyve & Sebze" href="" />
        </div>

        <div tw="my-2 px-2 w-1/6">
          <SmallCard title="Meyve & Sebze" href="" />
        </div>

        <div tw="my-2 px-2 w-1/6">
          <SmallCard title="Meyve & Sebze" href="" />
        </div>

        <div tw="my-2 px-2 w-1/6">
          <SmallCard title="Meyve & Sebze" href="" />
        </div>

        <div tw="my-2 px-2 w-1/6">
          <SmallCard title="Meyve & Sebze" href="" />
        </div>

        <div tw="my-2 px-2 w-1/6">
          <SmallCard title="Meyve & Sebze" href="" />
        </div>

        <div tw="my-2 px-2 w-1/6">
          <SmallCard title="Meyve & Sebze" href="" />
        </div>

        <div tw="my-2 px-2 w-1/6">
          <SmallCard title="Meyve & Sebze" href="" />
        </div>
      </div>
    </div>
  );
}
