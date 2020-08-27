import {
  LoginIcon,
  Logo,
  QuestionMark,
  ShoppingCartIcon,
} from "components/icons";
import Searchbar from "components/searchbar";
import { Response5, Response9 } from "generated/graphql";
import React from "react";
import "twin.macro";
import Link from "next/link";

type PropTypes = {
  user?: Response5 | null;
  basket?: Response9 | null;
};

const Header = ({ user, basket }: PropTypes) => {
  return (
    <header tw="shadow-tk2">
      <div
        css={{
          backgroundImage: "url(/duyuru.png)",
          backgroundColor: "#77b172",
        }}
        tw="w-full h-24 bg-no-repeat bg-center"
      />
      <div tw="container mx-auto flex items-center w-full justify-center h-24 py-6 ">
        <div tw="w-2/12">
          <Link href="/">
            <a>
              <Logo />
            </a>
          </Link>
        </div>
        <div tw="w-5/12">
          <Searchbar />
        </div>
        <div tw="w-1/12 flex justify-center hover:cursor-pointer">
          <QuestionMark />
        </div>
        <div tw="flex w-2/12 items-center hover:bg-gray-100 hover:rounded-lg p-2">
          <LoginIcon />
          <div tw="ml-2">
            <p tw="text-gray-400 text-xs">
              {user?.email ?? "Giris yap & Kayit ol"}
            </p>
            <p tw="text-gray-500 font-bold">Hesabim</p>
          </div>
        </div>
        <div tw="w-2/12 hover:bg-gray-100 hover:rounded-lg p-2 hover:cursor-pointer">
          <Link href="/basket" as="/basket">
            <a tw="flex items-center">
              <ShoppingCartIcon />
              <div tw="ml-2">
                <p tw="text-gray-400 text-xs">Sepet Tutari</p>
                <p tw="text-gray-500 font-bold">{basket?.amount || 0} ₺</p>
              </div>
            </a>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
