import 'twin.macro';
import Link from 'next/link';
import { Maybe, SubCategoryWithProductsDto } from 'generated/graphql';

type CategoryItem = {
  name: string;
  url: string;
  count?: number;
};

type PropTypes = {
  items: Array<Maybe<SubCategoryWithProductsDto>>;
  subTitle?: string | null;
  title: string;
  baseCategoryId?: string;
};

const NavItem = ({ name, url, count = 0 }: CategoryItem): JSX.Element => (
  <li tw="py-4 px-6 ">
    <Link href="/category/[...param]" as={url}>
      <a>
        {name} {count > 0 && <span tw="text-green-500">({count})</span>}{' '}
      </a>
    </Link>
  </li>
);

const SideNav = ({ items, subTitle, title, baseCategoryId }: PropTypes): JSX.Element => {
  const navItems = items.map((el) => (
    <NavItem
      key={el?.id}
      name={el?.name || ''}
      url={`/category/${baseCategoryId}/${el?.id}`}
      count={el?.products?.length}
    />
  ));

  return (
    <div tw="border rounded-xl shadow-tk2">
      <div tw="bg-gray-700 py-4 px-4 rounded-t-xl ">
        <p tw="text-green-300 text-2xl leading-6">{title}</p>
        {subTitle && <p tw="text-sm leading-4 text-white">{subTitle}</p>}
      </div>
      <div tw="bg-white font-medium text-gray-500 rounded-xl">
        <ul tw="divide-y divide-gray-100 ">{navItems}</ul>
      </div>
    </div>
  );
};

export default SideNav;
