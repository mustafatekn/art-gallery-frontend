import axios from "axios";
import Head from "next/head";
import { useState } from "react";
import DefaultLayout from "../layouts/DefaultLayout";

export default function Contact() {
  const [messageContent, setMessageContent] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const createTicket = async (e) => {
    e.preventDefault();

    const errors = handleValidate();
    if (Object.keys(errors).length > 0) return setErrors(errors);

    try {
      await axios.post(`${process.env.SERVER_URL}/ticket`, messageContent);
      setMessageContent({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      throw error;
    }
  };

  const handleValidate = () => {
    const errors = {};

    if (messageContent.name.trim() === "") errors.name = "Name is required";
    if (messageContent.email.trim() === "") errors.email = "Email is required";
    if (messageContent.phone.trim() === "") errors.phone = "Phone is required";
    if (messageContent.subject.trim() === "")
      errors.subject = "Subject is required";
    if (messageContent.message.trim() === "")
      errors.message = "Message is required";

    const emailRegExp =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    if (!emailRegExp.test(messageContent.email))
      errors.email = errors.email
        ? errors.email
        : "Email must be in email format";

    return errors;
  };

  return (
    <DefaultLayout title="Contact">
      <Head>
        <title>Contact | Rixusart</title>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="Rixusart Contact" content="Rixusart" />
        <meta
          name="description"
          content="Soru sormak veya görüş, öneri bildirmek için Rixusart ile iletişime geçebilirsiniz."
        />
        <meta
          name="keywords"
          content="rixusart, Rixusart, iletişim, Email, soru, cevap, görüş, öneri, Instagram, Facebook, Pinterest, instagram, facebook, pinterest"
        />
        <meta name="robots" content="index, follow" />
        <meta name="revisit-after" content="7 days" />
        <meta name="author" content="Mustafa Osman Tekin" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="container mx-auto">
        <div className="grid grid-rows-1 my-4 lg:mt-16">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="lg:mt-28 text-base lg:text-xl font-semibold">
              <div className="w-full mx-auto px-4">
                <div className="w-full lg:w-4/5 mx-auto space-y-3 lg:mb-20">
                  <div>Benimle iletişime geçmekten çekinmeyin.</div>
                  <div>
                    <a href="mailto:emirteke04@gmail.com">
                      <svg
                        role="img"
                        className="w-5 h-5 text-primary-black inline-block mr-2"
                      >
                        <use xlinkHref="/assets/icons/sprite.svg#email" />
                      </svg>
                      emirteke<span className="segoe">04</span>@gmail.com
                    </a>
                  </div>
                  <div>
                    <a href="tel:905380508992">
                      <svg
                        role="img"
                        className="w-5 h-5 text-primary-black inline-block mr-1"
                      >
                        <use xlinkHref="/assets/icons/sprite.svg#phone" />
                      </svg>
                      <span className="segoe">+90 538 050 8992</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col mt-10 lg:mt-0 items-center lg:items-start px-4 2xl:w-4/5 raleway-medium">
              <form className="w-full" onSubmit={createTicket}>
                <div className="form-input-wrapper w-full">
                  <input
                    type="text"
                    className={`border-b ${
                      errors.name ? "border-red-500" : "border-slate-200"
                    } w-full py-1.5 rounded-sm pl-2 focus:outline-none segoe`}
                    placeholder="Name"
                    onChange={(e) =>
                      setMessageContent({
                        ...messageContent,
                        name: e.target.value,
                      })
                    }
                    value={messageContent.name}
                  />
                  {errors.name && (
                    <div className="text-red-500 pl-2 text-xs mt-2">
                      {errors.name}
                    </div>
                  )}
                </div>

                <div className="form-input-wrapper w-full mt-5">
                  <input
                    type="text"
                    className={`border-b ${
                      errors.email ? "border-red-500" : "border-slate-200"
                    } w-full py-1.5 rounded-sm pl-2 focus:outline-none segoe`}
                    placeholder="Email"
                    onChange={(e) =>
                      setMessageContent({
                        ...messageContent,
                        email: e.target.value,
                      })
                    }
                    value={messageContent.email}
                  />
                  {errors.email && (
                    <div className="text-red-500 pl-2 text-xs mt-2">
                      {errors.email}
                    </div>
                  )}
                </div>

                <div className="form-input-wrapper w-full mt-5">
                  <input
                    type="text"
                    className={`border-b ${
                      errors.phone ? "border-red-500" : "border-slate-200"
                    } w-full py-1.5 rounded-sm pl-2 focus:outline-none segoe`}
                    placeholder="Phone"
                    onChange={(e) =>
                      setMessageContent({
                        ...messageContent,
                        phone: e.target.value,
                      })
                    }
                    value={messageContent.phone}
                  />
                  {errors.phone && (
                    <div className="text-red-500 pl-2 text-xs mt-2">
                      {errors.phone}
                    </div>
                  )}
                </div>

                <div className="form-input-wrapper w-full mt-5">
                  <input
                    type="text"
                    className={`border-b ${
                      errors.subject ? "border-red-500" : "border-slate-200"
                    } w-full py-1.5 rounded-sm pl-2 focus:outline-none segoe`}
                    placeholder="Subject"
                    onChange={(e) =>
                      setMessageContent({
                        ...messageContent,
                        subject: e.target.value,
                      })
                    }
                    value={messageContent.subject}
                  />
                  {errors.subject && (
                    <div className="text-red-500 pl-2 text-xs mt-2">
                      {errors.subject}
                    </div>
                  )}
                </div>

                <div className="form-input-wrapper w-full mt-5">
                  <textarea
                    className={`border-b ${
                      errors.message ? "border-red-500" : "border-slate-200"
                    } w-full py-1.5 h-40 pl-2 focus:outline-none segoe`}
                    placeholder="Message"
                    onChange={(e) =>
                      setMessageContent({
                        ...messageContent,
                        message: e.target.value,
                      })
                    }
                    value={messageContent.message}
                  />
                  {errors.message && (
                    <div className="text-red-500 pl-2 text-xs mt-2">
                      {errors.message}
                    </div>
                  )}
                </div>
                <div className="form-input-wrapper w-full">
                  <button
                    type="submit"
                    className="bg-gray-800 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded w-full mt-3"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}
