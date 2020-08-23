import "twin.macro";

type PropTypes = {
  title: string;
  imgSrc: string;
  bg: string;
};

const FeaturedCard = (props: PropTypes) => (
  <div
    css={{
      background: props.bg,
      borderRadius: 12,
    }}
    tw="flex px-12 h-48 shadow-tk1"
  >
    <div tw="flex justify-center flex-col w-1/2">
      <p tw="text-white text-2xl font-medium ">{props.title}</p>
      <button tw="rounded-xl bg-white w-20 h-8 mt-4 hover:cursor-pointer hover:bg-black">
        <span
          css={{
            background: props.bg,
            backgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          İncele
        </span>
      </button>
    </div>
    <div tw="flex items-center w-1/2">
      <img src={props.imgSrc} alt={props.title} />
    </div>
  </div>
);

export default FeaturedCard;
