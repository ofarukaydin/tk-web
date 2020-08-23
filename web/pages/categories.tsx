import "twin.macro";
import Layout from "components/layout";
import Categories from "components/categories";
import MyCart from "components/my-cart";
import Wrapper from "components/layout/wrapper";
import AddCard from "components/card-add";

type PropTypes = {};

const Kategoriler = (props: PropTypes) => {
  return (
    <Layout container="none">
      <Wrapper>
        <div tw="flex">
          <div tw="w-1/3">
            <Categories />
            <div tw="mt-6">
              <MyCart />
            </div>
          </div>
          <div tw="w-2/3 ml-6">
            <div tw="grid grid-cols-4 gap-4 w-full">
              <AddCard
                productImg="/ananas.png"
                name="Ananas"
                quantity={1}
                price={15.99}
                discountedPrice={14.3}
              />{" "}
              <AddCard
                productImg="/ananas.png"
                name="Ananas"
                quantity={1}
                price={15.99}
                discountedPrice={14.3}
              />{" "}
              <AddCard
                productImg="/ananas.png"
                name="Ananas"
                quantity={1}
                price={15.99}
                discountedPrice={14.3}
              />{" "}
              <AddCard
                productImg="/ananas.png"
                name="Ananas"
                quantity={1}
                price={15.99}
                discountedPrice={14.3}
              />{" "}
              <AddCard
                productImg="/ananas.png"
                name="Ananas"
                quantity={1}
                price={15.99}
                discountedPrice={14.3}
              />{" "}
              <AddCard
                productImg="/ananas.png"
                name="Ananas"
                quantity={1}
                price={15.99}
                discountedPrice={14.3}
              />{" "}
              <AddCard
                productImg="/ananas.png"
                name="Ananas"
                quantity={1}
                price={15.99}
                discountedPrice={14.3}
              />{" "}
              <AddCard
                productImg="/ananas.png"
                name="Ananas"
                quantity={1}
                price={15.99}
                discountedPrice={14.3}
              />{" "}
              <AddCard
                productImg="/ananas.png"
                name="Ananas"
                quantity={1}
                price={15.99}
                discountedPrice={14.3}
              />{" "}
              <AddCard
                productImg="/ananas.png"
                name="Ananas"
                quantity={1}
                price={15.99}
                discountedPrice={14.3}
              />{" "}
              <AddCard
                productImg="/ananas.png"
                name="Ananas"
                quantity={1}
                price={15.99}
                discountedPrice={14.3}
              />{" "}
              <AddCard
                productImg="/ananas.png"
                name="Ananas"
                quantity={1}
                price={15.99}
                discountedPrice={14.3}
              />{" "}
            </div>
          </div>
        </div>
      </Wrapper>
    </Layout>
  );
};

export default Kategoriler;
