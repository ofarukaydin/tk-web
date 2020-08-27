import "twin.macro";
import { YMaps, Map, Placemark } from "react-yandex-maps";

type PropTypes = {
  fullName: string;
  address: string;
  geolocation: [number, number];
};

const Address = ({ fullName, address, geolocation }: PropTypes) => {
  return (
    <div css={{ minHeight: 320 }} tw="flex rounded-xl shadow-tk2 w-full">
      <div tw="p-8 w-1/3 text-gray-400">
        <p>{fullName}</p>
        <p>{address}</p>
      </div>
      <div tw="w-2/3">
        {geolocation?.[0] && (
          <YMaps query={{ lang: "tr_TR" }}>
            <Map
              width="100%"
              height="100%"
              defaultState={{
                center: geolocation,
                zoom: 15,
              }}
            >
              <Placemark defaultGeometry={geolocation} />
            </Map>
          </YMaps>
        )}
      </div>
    </div>
  );
};

export default Address;
