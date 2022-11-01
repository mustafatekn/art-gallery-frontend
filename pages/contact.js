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
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [success, setSuccess] = useState(false);

  const createTicket = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSubmitted(true);
    const errors = handleValidate();
    if (Object.keys(errors).length > 0) {
      setLoading(false);
      return setErrors(errors);
    }

    try {
      await axios.post(`${process.env.SERVER_URL}/ticket`, messageContent);
      setMessageContent({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      setSuccess(true);
      setSubmitted(false);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleValidate = () => {
    const errors = {};

    if (!messageContent.name.trim()) errors.name = "Name is required";
    if (!messageContent.email.trim()) errors.email = "Email is required";
    if (!messageContent.phone.trim()) errors.phone = "Phone is required";
    if (!messageContent.subject.trim()) errors.subject = "Subject is required";
    if (!messageContent.message.trim()) errors.message = "Message is required";

    const emailRegExp =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    if (!emailRegExp.test(messageContent.email))
      errors.email = errors.email
        ? errors.email
        : "Email must be in email format";
    setErrors(errors);
    return errors;
  };

  const handleChange = (e) => {
    setMessageContent({ ...messageContent, [e.target.name]: e.target.value });
    if (success) setSuccess(false);
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
                    name="name"
                    type="text"
                    className={`border-b ${
                      errors.name ? "border-red-500" : "border-slate-200"
                    } w-full py-1.5 rounded-sm pl-2 focus:outline-none segoe`}
                    placeholder="Name"
                    onChange={handleChange}
                    onBlur={() => submitted && handleValidate()}
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
                    name="email"
                    type="text"
                    className={`border-b ${
                      errors.email ? "border-red-500" : "border-slate-200"
                    } w-full py-1.5 rounded-sm pl-2 focus:outline-none segoe`}
                    placeholder="Email"
                    onChange={handleChange}
                    onBlur={() => submitted && handleValidate()}
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
                    name="phone"
                    type="text"
                    className={`border-b ${
                      errors.phone ? "border-red-500" : "border-slate-200"
                    } w-full py-1.5 rounded-sm pl-2 focus:outline-none segoe`}
                    placeholder="Phone"
                    onChange={handleChange}
                    onBlur={() => submitted && handleValidate()}
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
                    name="subject"
                    type="text"
                    className={`border-b ${
                      errors.subject ? "border-red-500" : "border-slate-200"
                    } w-full py-1.5 rounded-sm pl-2 focus:outline-none segoe`}
                    placeholder="Subject"
                    onChange={handleChange}
                    onBlur={() => submitted && handleValidate()}
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
                    name="message"
                    className={`border-b ${
                      errors.message ? "border-red-500" : "border-slate-200"
                    } w-full py-1.5 h-40 pl-2 focus:outline-none segoe`}
                    placeholder="Message"
                    onChange={handleChange}
                    onBlur={() => submitted && handleValidate()}
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
                    className={`text-white font-bold py-2 px-4 rounded w-full mt-3 h-10 flex items-center justify-center duration-300 ${
                      success
                        ? "bg-green-600 disabled:opacity-100"
                        : "bg-gray-800 hover:bg-gray-900 disabled:opacity-70 disabled:hover:bg-gray-800"
                    }`}
                    disabled={loading || success}
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
                    ) : !success ? (
                      <span>Send Message</span>
                    ) : (
                      <span>Your message has been sent.</span>
                    )}
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
