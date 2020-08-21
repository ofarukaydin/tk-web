import "twin.macro";
import Link from "next/link";

type PropTypes = {
  title: string;
  imageSrc?: string;
  href: string;
};

const SmallCard = ({ imageSrc = "/cherry.png", title, href }: PropTypes) => {
  return (
    <div tw="rounded-xl shadow-tk2">
      <div tw="p-4">
        <div tw="flex justify-center items-center">
          <img src={imageSrc} alt="product" />
        </div>
        <div tw="mt-2 text-lg leading-5 font-medium text-center">
          <Link href={href}>
            <a>{title}</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SmallCard;
