import "twin.macro";
import { Formik, Form } from "formik";
import InputField from "components/input-field";
import React from "react";
import tw from "twin.macro";
import Layout from "components/layout";
import Address from "components/address";
import { NoteIcon } from "components/icons";
import { useGetCurrentUserAddressQuery } from "generated/graphql";
import { withUrql } from "util/client";

const initialValues = {
  payment: "kapi",
};

const borderSelected = tw`border border-green-600`;

const AddressPage = () => {
  const [{ data }] = useGetCurrentUserAddressQuery();
  const userAddress =
    data?.getApiV1AuthenticationGetcurrentuseraddress?.response;
  return (
    <Layout>
      <Formik
        initialValues={initialValues}
        onSubmit={async (values, { setErrors }) => {
          alert(JSON.stringify(values, null, 2));
        }}
      >
        {({ values }) => (
          <Form>
            <p tw="font-bold text-gray-500 text-2xl py-8">Gönderim Adresi</p>
            <Address
              address={userAddress?.fullAddress || ""}
              fullName={userAddress?.contactTitle || ""}
              geolocation={[
                parseInt(userAddress?.latitude || ""),
                parseInt(userAddress?.longitude || ""),
              ]}
            />
            <p tw="font-bold text-gray-500 text-2xl py-8">Ödeme Yöntemi</p>

            <div tw="flex w-full">
              <div
                css={[values.payment === "kapi" && borderSelected]}
                tw="rounded-lg shadow-tk2 p-6 border w-1/2"
              >
                <InputField
                  name="payment"
                  label="Kapıda Ödeme"
                  type="radio"
                  value="kapi"
                />
                <p tw="ml-8 text-gray-400">
                  Kapıda nakit veya kredi/banka kartıyla ödeme.
                </p>
              </div>

              <div
                css={[values.payment === "online" && borderSelected]}
                tw="rounded-lg shadow-tk2 p-6 border w-1/2 ml-4"
              >
                <InputField
                  name="payment"
                  label="Online Ödeme"
                  type="radio"
                  value="online"
                />
                <p tw="ml-8 text-gray-400">
                  Online kredi/banka kartı ile ödeme
                </p>
              </div>
            </div>
            <p tw="font-bold text-gray-500 text-2xl py-8">Sipariş Notu</p>
            <div tw="rounded-lg shadow-tk2">
              <p tw="p-4 font-semibold text-lg text-gray-500">Sipariş Notu</p>
              <hr />
              <div tw="flex">
                <div tw="pt-3 pl-4">
                  <NoteIcon />
                </div>
                <InputField
                  tw="ml-4"
                  name="not"
                  type="textarea"
                  label=""
                  placeholder="Sipariş notunuzu buraya girebilirsiniz"
                />
              </div>
            </div>
            <div tw="text-right my-8">
              <InputField
                name="agree"
                label={
                  <>
                    <a tw="text-green-600">Mesafeli Satış Sözleşmesi</a> ve{" "}
                    <a tw="text-green-600">Ön Bilgilendirme Formu</a>’nu okudum
                    ve kabul ediyorum.
                  </>
                }
                type="checkbox"
                rightAlign
              />
              <div tw="flex justify-end items-center text-gray-500">
                <div>
                  <p tw="text-lg font-semibold ">
                    Toplam Tutar: <span tw="text-green-600">29,99₺</span>
                  </p>

                  <p tw="text-sm">
                    İndirim Tutarı: <span tw="line-through">57.98₺</span>
                  </p>
                </div>
                <button
                  tw="m-6 bg-green-500 text-white rounded w-full py-2 w-64"
                  type="submit"
                >
                  Siparişi Tamamla
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </Layout>
  );
};

export default withUrql(AddressPage);
