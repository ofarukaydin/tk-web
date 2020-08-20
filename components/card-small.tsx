import "twin.macro";

type PropTypes = {
  title: string;
  imageSrc?: string;
};

const SmallCard = ({ imageSrc = "/cherry.png", title }: PropTypes) => {
  return (
    <div tw="rounded-xl shadow-tk2 w-40 h-48">
      <div tw="p-4 h-full flex flex-col justify-between">
        <img tw="h-full" src={imageSrc} alt="product" />
        <div tw="text-lg leading-5 font-medium text-center">{title}</div>
      </div>
    </div>
  );
};

export default SmallCard;
