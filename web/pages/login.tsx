import { Formik, Form } from 'formik';
import InputField from 'components/input-field';
import 'twin.macro';
import { useLoginMutation } from 'generated/graphql';
import { useRouter } from 'next/dist/client/router';
import { setToken } from 'util/auth';
import { withUrql } from 'util/client';
import Layout from 'components/layout';

const initialValues = {
  username: '',
  password: '',
  agree: false,
  promotion: false,
};

const Login = (): JSX.Element => {
  const [, login] = useLoginMutation();
  const router = useRouter();

  return (
    <Layout container="small">
      <div tw="mx-auto container">
        <div tw="text-center mb-4">
          <h1 tw="my-2 font-bold text-3xl text-gray-700">Kaydol</h1>
          <p tw="text-gray-600">Yeni bir alışveriş deneyimine şahit olun</p>
        </div>
        <Formik
          initialValues={initialValues}
          onSubmit={async (values, { setErrors }) => {
            const response = await login({ ...values, userTypeId: 1 });
            if (response.data?.postApiV1AuthenticationValidateuser?.result) {
              setToken(response.data.postApiV1AuthenticationValidateuser.response?.token || '');
              router.push('/');
            }
          }}
        >
          <Form>
            <InputField name="username" placeholder="Kullanıcı Adı" label="Kullanıcı Adı" />
            <InputField name="password" placeholder="Şifre" label="Şifre" type="password" />
            <InputField
              name="agree"
              label="Kullanım Koşullarını ve Gizlilik Koşullarını okudum ve kabul ediyorum."
              type="checkbox"
            />
            <InputField
              name="promotion"
              label="Kampanyalar hakkında bilgilendirilmek için elektronik iletişim almak istiyorum."
              type="checkbox"
            />
            <div>
              <button tw="mt-4 bg-green-500 text-white rounded w-full py-2" type="submit">
                Giriş yap
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </Layout>
  );
};

export default withUrql(Login);
