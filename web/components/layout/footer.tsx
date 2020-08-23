import { LogoWhite } from "components/icons";
import "twin.macro";
import Link from "next/link";

const Footer = () => (
  <footer tw="bg-gray-700 text-white pt-8">
    <div tw="flex flex-wrap -mx-2 bg-gray-700 container mx-auto">
      <div tw="pt-4 w-1/3">
        <LogoWhite />
        <div tw="flex -mx-2 mt-4">
          <img src="/android.png" alt="android" />
          <img src="/ios.png" alt="ios" />
        </div>
      </div>

      <div tw="my-2 px-2 w-1/6 ">
        <p tw="font-bold my-2 px-2 text-xl">Hakkımızda</p>
        <Link href="#">
          <a tw="my-2 px-2 block">Anasayfa</a>
        </Link>
        <Link href="#">
          <a tw="my-2 px-2 block">Hakkımızda</a>
        </Link>
        <Link href="#">
          <a tw="my-2 px-2 block">Kampanyalar</a>
        </Link>
        <Link href="#">
          <a tw="my-2 px-2 block">İletişim</a>
        </Link>
      </div>

      <div tw="my-2 px-2 w-1/6 ">
        <p tw="font-bold my-2 px-2 w-full text-xl">Hesabım</p>
        <Link href="#">
          <a tw="my-2 px-2 block">Meyve & Sebzeler</a>
        </Link>
        <Link href="#">
          <a tw="my-2 px-2 block">Atıştırmalıklar</a>
        </Link>
        <Link href="#">
          <a tw="my-2 px-2 block">Hızlı Yemek</a>
        </Link>
        <Link href="#">
          <a tw="my-2 px-2 block">Et Ürünleri</a>
        </Link>
        <Link href="#">
          <a tw="my-2 px-2 block">Süt Ürünleri</a>
        </Link>
        <Link href="#">
          <a tw="my-2 px-2 block">Temel Gıda</a>
        </Link>
      </div>

      <div tw="my-2 px-2 w-1/6 ">
        <p tw="font-bold my-2 px-2 block text-xl">Hesabım</p>
        <Link href="#">
          <a tw="my-2 px-2 block">Profilim</a>
        </Link>
        <Link href="#">
          <a tw="my-2 px-2 block">Siparişlerim</a>
        </Link>
        <Link href="#">
          <a tw="my-2 px-2 block">Sipariş Takibi</a>
        </Link>
      </div>

      <div tw="my-2 px-2 w-1/6 ">
        <p tw="font-bold my-2 px-2 block text-xl">TK</p>
        <Link href="#">
          <a tw="my-2 px-2 block">Gizlilik Politikası</a>
        </Link>
        <Link href="#">
          <a tw="my-2 px-2 block">KVKK</a>
        </Link>
      </div>
      <p tw="text-center w-full my-6">
        © 2018 - 2020 All Right Reserved | Türkiye Tarım Kredi Kooperatifleri
      </p>
    </div>
  </footer>
);

export default Footer;
