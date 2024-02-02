import axios from "axios";
import Head from "next/head";
import DefaultLayout from "../../layouts/DefaultLayout";
import { useInputs } from "../../hooks/useInputs";
import { useState } from "react";
import { useModal } from "../../hooks/useModal";
import PaymentInformation from "../../components/PaymentInformation";
import AddressInformation from "../../components/AddressInformation";

export default function ProductDetails({ product }) {
  const [loading, setLoading] = useState(false);
  const [activeForm, setActiveForm] = useState("payment");

  const [inputs, setInputs, clearInputs] = useInputs({
    cardHolderName: "",
    cardNumber: "",
    expireMonth: "",
    expireYear: "",
    cvc: "",
  });
  const [Modal, setModalProps] = useModal();


  const checkout = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post(`${process.env.SERVER_URL}/checkout`, {
        paymentCard: inputs,
        price: 1,
      });
      setModalProps({
        show: true,
        type: "success",
        message: "Your have completed payment status successfully.",
      });
      clearInputs();
    } catch (error) {
      setModalProps({
        show: true,
        type: "error",
        message: error.response.data.message,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <DefaultLayout title="Checkout Test Page">
      <Modal />
      <Head>
        <title>{`${product.title} | Rixusart`}</title>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        {typeof window !== "undefined" && (
          <meta
            name={`Rixusart ${product.title}(${location.origin + location.pathname
              }) Details`}
            content="Rixusart"
          />
        )}
        {typeof window !== "undefined" && (
          <meta
            name="description"
            content={`Rixusart ${product.title}(${location.origin + location.pathname
              }) Details with all gallery`}
          />
        )}

        <meta
          name="keywords"
          content="Rixusart, rixusart, Mural, Interior Architecture, Interior, Architecture,iç, mimari, iç mimari, dekorasyon, Art, Resim, Sanat, Dekoratif Boya, Yağlı Boya, Tablo, Emir Teke, Duvar Resmi, Duvar Ressamı, Soyut Resim, Proje, Proje Detayları, Project, Details, Instagram, Facebook, Pinterest, instagram, facebook, pinterest"
        />
        <meta name="robots" content="index, follow" />
        <meta name="revisit-after" content="7 days" />
        <meta name="author" content="Mustafa Osman Tekin" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="container mx-auto mt-10 flex items-center justify-center">
        <div className="flex flex-col mt-10 lg:mt-0 items-center lg:items-start px-4 2xl:w-4/5 raleway-medium">
          <form className="w-full" onSubmit={checkout}>
            <h6 className="mb-5">Price: 5000 TL</h6>

            <div className="flex">
              <div className={`${activeForm === 'payment' ? "opacity-100" : "opacity-75"} bg-zinc-50 text-black h-16 w-1/2 flex items-center justify-between px-3 cursor-pointer mt-5`} onClick={() => setActiveForm("payment")}>
                <h5 className="text-xl">Payment Information</h5>
              </div>

              <div className={`${activeForm === 'address' ? "opacity-100" : "opacity-75"}  bg-zinc-50 text-black h-16 w-1/2 flex items-center justify-between px-3 cursor-pointer mt-5`} onClick={() => setActiveForm("address")}>
                <h5 className="text-xl">Address</h5>
              </div>
            </div>

            <div className="mt-5">
              {activeForm === 'payment' ? <PaymentInformation inputs={inputs} setInputs={(data) => setInputs(data)} /> : <AddressInformation inputs={inputs} setInputs={(data) => setInputs(data)} />}


            </div>


            <div className="form-input-wrapper w-full">
              <button
                type="submit"
                className={`text-white font-bold py-2 px-4 rounded w-full mt-3 h-10 flex items-center justify-center duration-300 bg-gray-800 hover:bg-gray-900 disabled:opacity-70 disabled:hover:bg-gray-800`}
                disabled={loading}
              >
                {loading ? (
                  <>
                    <svg
                      aria-hidden="true"
                      className="w-7 h-7 font-bold inline text-gray-200 animate-spin dark:text-gray-600 fill-white"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                      />
                    </svg>
                    <span className="sr-only">Loading...</span>
                  </>
                ) : (
                  <span>Buy</span>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </DefaultLayout>
  );
}

export async function getServerSideProps({ params }) {
  const product = await (
    await axios.get(`${process.env.SERVER_URL}/post/${params.url}`)
  ).data;

  return {
    props: {
      product,
    },
  };
}
