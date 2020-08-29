import 'twin.macro';

const AdHome = (): JSX.Element => (
  <div tw="flex p-4">
    <div tw="w-1/2 my-auto">
      <p tw="text-2xl font-bold">Sen iste, kapına gelsin.</p>
      <p tw="text-lg my-6">
        It is a long established fact that a reader will be distracted by the readable content of a
        page when looking at its layout.
      </p>
      <button type="button" tw="text-white bg-green-600 rounded shadow-tk1 text-center py-4 px-16">
        Alışverişe Başla
      </button>
    </div>
    <div tw="w-1/2 flex justify-center items-center">
      <img src="/dilim_karpuz.png" alt="karpuz" />
    </div>
  </div>
);

export default AdHome;
