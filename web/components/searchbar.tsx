import { useState, useRef, useEffect } from "react";
import "twin.macro";

const SearhIcon = () => (
  <svg width={20} height={19} viewBox="0 0 20 19" fill="none">
    <g clipPath="url(#prefix__clip0)">
      <path
        d="M13.839 13.868A7.521 7.521 0 101.562 5.176a7.52 7.52 0 009.964 10.822l5.545 5.512a1.574 1.574 0 102.226-2.225l-5.458-5.417zm-6.143.514a4.851 4.851 0 11-.01-9.703 4.851 4.851 0 01.013 9.703h-.003z"
        fill="#96A0A8"
      />
    </g>
    <defs>
      <clipPath id="prefix__clip0">
        <path fill="#fff" transform="translate(0 .49)" d="M0 0h20v18.113H0z" />
      </clipPath>
    </defs>
  </svg>
);

const Searchbar = () => {
  const [searchValue, setSearchValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // 500ms timeout

    const timer = setTimeout(() => {
      if (inputRef && inputRef.current) {
        if (searchValue && searchValue === inputRef.current.value) {
          // Do async logic
        }
      }
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [searchValue, inputRef]);

  return (
    <div tw="relative">
      <input
        ref={inputRef}
        tw="h-12 w-full my-2 focus:outline-none focus:shadow-outline text-xl px-10 bg-gray-100"
        type="search"
        css={{ borderRadius: 50 }}
        placeholder="Ürün ara..."
        onChange={(e) => setSearchValue(e.target.value)}
        value={searchValue}
      />
      <button type="submit" tw="absolute top-0 mt-5 mr-4" css={{ left: 16 }}>
        <SearhIcon />
      </button>
    </div>
  );
};

export default Searchbar;
