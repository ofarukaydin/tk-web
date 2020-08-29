import { LogoWhite } from 'components/icons';
import 'twin.macro';
import Link from 'next/link';

const Footer = (): JSX.Element => (
  <footer tw="bg-gray-700 text-white pt-8">
    <div tw="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 w-full bg-gray-700 container mx-auto">
      <div tw="mt-2 sm:hidden xl:block">
        <LogoWhite />
        <div tw="flex mt-4">
          <img src="/android.png" alt="android" />
          <img src="/ios.png" alt="ios" />
        </div>
      </div>

      <div>
        <p tw="font-bold text-xl">Hakkımızda</p>
        <Link href="/">
          <a tw="block">Anasayfa</a>
        </Link>
        <Link href="/">
          <a tw="block">Hakkımızda</a>
        </Link>
        <Link href="/">
          <a tw="block">Kampanyalar</a>
        </Link>
        <Link href="/">
          <a tw="block">İletişim</a>
        </Link>
      </div>

      <div>
        <p tw="font-bold w-full text-xl">Hesabım</p>
        <Link href="/">
          <a tw="block">Meyve & Sebzeler</a>
        </Link>
        <Link href="/">
          <a tw="block">Atıştırmalıklar</a>
        </Link>
        <Link href="/">
          <a tw="block">Hızlı Yemek</a>
        </Link>
        <Link href="/">
          <a tw="block">Et Ürünleri</a>
        </Link>
        <Link href="/">
          <a tw="block">Süt Ürünleri</a>
        </Link>
        <Link href="/">
          <a tw="block">Temel Gıda</a>
        </Link>
      </div>

      <div>
        <p tw="font-bold block text-xl">Hesabım</p>
        <Link href="/">
          <a tw="block">Profilim</a>
        </Link>
        <Link href="/">
          <a tw="block">Siparişlerim</a>
        </Link>
        <Link href="/">
          <a tw="block">Sipariş Takibi</a>
        </Link>
      </div>

      <div>
        <p tw="font-bold block text-xl">TK</p>
        <Link href="/">
          <a tw="block">Gizlilik Politikası</a>
        </Link>
        <Link href="/">
          <a tw="block">KVKK</a>
        </Link>
      </div>
    </div>
    <p tw="text-center w-full my-6">
      © 2018 - 2020 All Right Reserved | Türkiye Tarım Kredi Kooperatifleri
    </p>
  </footer>
);

export default Footer;
