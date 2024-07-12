"use client";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form"
import EmailIcon from '@/assets/svg/email.svg';
import PhoneIcon from '@/assets/svg/phone.svg';
import SpinnerIcon from '@/assets/svg/spinner.svg';
import phoneCodes from '@/assets/json/phoneCodes.json'
import Modal from "@/components/Modal/Modal";
import { apiRequest } from "@/utils/api/apiRequest";
import { services } from "@/utils/api/apiUrls";

type Inputs = {
  name: string;
  email: string;
  phoneCode: string;
  phoneNumber: string;
  subject: string;
  message: string;
}

type RequestData = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

const Contact = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({ mode: 'onBlur' })

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setLoading(true);

    const requestData: RequestData = {
      name: data.name,
      email: data.email,
      phone: data.phoneCode + data.phoneNumber,
      subject: data.subject,
      message: data.message,
    };

    apiRequest<any>({ url: services.sendTicket, method: 'POST', data: requestData })
      .then(() => {
        Modal.success({
          title: 'Success!',
          message: 'Your ticket has been sent.'
        })
      })
      .catch((error: Error) => {
        Modal.error({
          title: 'Error!',
          message: error.message,
        })
      })
      .finally(() => setLoading(false));
  }

  return (
    <div>
      <div className="container mx-auto">
        <div className="grid grid-rows-1 my-4 lg:mt-16">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="lg:mt-28 text-base lg:text-xl font-semibold">
              <div className="w-full mx-auto px-4">
                <div className="w-full lg:w-4/5 mx-auto space-y-3 lg:mb-20">
                  <div>Benimle iletişime geçmekten çekinmeyin.</div>
                  <div>
                    <a href="mailto:emirteke04@gmail.com">
                      <EmailIcon className="w-5 h-5 text-primary-black inline-block mr-2" />
                      emirteke<span className="segoe">04</span>@gmail.com
                    </a>
                  </div>
                  <div>
                    <a href="tel:905380508992">
                      <PhoneIcon className="w-5 h-5 text-primary-black inline-block mr-1" />
                      <span className="segoe">+90 538 050 8992</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col mt-10 lg:mt-0 items-center lg:items-start px-4 2xl:w-4/5 raleway-medium">
              <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-input-wrapper w-full">
                  <input
                    type="text"
                    className={`border-b ${errors.name ? "border-red-500" : "border-slate-200"} w-full py-1.5 rounded-sm pl-2 focus:outline-none segoe`}
                    placeholder="Name"
                    {...register("name", { required: 'Name is required' })}
                  />
                  {errors.name && (
                    <div className="text-red-500 pl-2 text-xs mt-2">
                      {errors.name.message}
                    </div>
                  )}
                </div>

                <div className="form-input-wrapper w-full mt-5">
                  <input
                    type="text"
                    className={`border-b ${errors.email ? "border-red-500" : "border-slate-200"} w-full py-1.5 rounded-sm pl-2 focus:outline-none segoe`}
                    placeholder="Email"
                    {...register("email", {
                      required: 'Email is required',
                      pattern: {
                        value: /\S+@\S+\.\S+/,
                        message: "Entered value does not match email format"
                      }
                    })}
                  />
                  {errors.email && (
                    <div className="text-red-500 pl-2 text-xs mt-2">
                      {errors.email.message}
                    </div>
                  )}
                </div>

                {/* Phone inputs container */}
                <div className="flex gap-4 mt-5">
                  <div className="form-input-wrapper flex-1 max-w-[200px]">
                    <select
                      id="phoneCode"
                      {...register("phoneCode", { required: 'Phone code is required' })}
                      className={`border-b ${errors.phoneCode ? "border-red-500" : "border-slate-200"} mt-1 w-full py-1.5 rounded-sm pl-2 focus:outline-none segoe`}
                    >
                      {phoneCodes.map(({ code, country }, index) => (
                        <option key={index} value={code}>{`${code} - ${country}`}</option>
                      ))}
                    </select>
                  </div>

                  <div className="form-input-wrapper flex-1">
                    <input
                      type="text"
                      className={`border-b pl-2 ${errors.phoneNumber ? "border-red-500" : "border-slate-200"
                        } w-full py-1.5 rounded-sm focus:outline-none segoe`}
                      placeholder="Phone"
                      {...register("phoneNumber", {
                        required: 'Phone is required',
                        pattern: {
                          value: /^\d{10}$/,
                          message: "Enter a valid number"
                        }
                      })}
                    />
                    {errors.phoneNumber && (
                      <div className="text-red-500 text-xs mt-2">
                        {errors.phoneNumber.message}
                      </div>
                    )}
                  </div>
                </div>

                <div className="form-input-wrapper w-full mt-5">
                  <input
                    type="text"
                    className={`border-b ${errors.subject ? "border-red-500" : "border-slate-200"
                      } w-full py-1.5 rounded-sm pl-2 focus:outline-none segoe`}
                    placeholder="Subject"
                    {...register("subject", { required: 'Subject is required' })}
                  />
                  {errors.subject && (
                    <div className="text-red-500 pl-2 text-xs mt-2">
                      {errors.subject.message}
                    </div>
                  )}
                </div>

                <div className="form-input-wrapper w-full mt-5">
                  <textarea
                    className={`border-b ${errors.message ? "border-red-500" : "border-slate-200"
                      } w-full py-1.5 h-40 pl-2 focus:outline-none segoe`}
                    placeholder="Message"
                    {...register("message", { required: 'Message is required' })}
                  />
                  {errors.message && (
                    <div className="text-red-500 pl-2 text-xs mt-2">
                      {errors.message.message}
                    </div>
                  )}
                </div>
                <div className="form-input-wrapper w-full">
                  <button
                    type="submit"
                    className={`text-white font-bold py-2 px-4 rounded w-full mt-3 h-10 flex items-center justify-center duration-300 bg-gray-800 hover:bg-gray-900 disabled:opacity-70 disabled:hover:bg-gray-800`}
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <SpinnerIcon className="w-7 h-7 font-bold inline text-gray-200 animate-spin dark:text-gray-600 fill-white" />
                        <span className="sr-only">Loading...</span>
                      </>
                    ) : (
                      <span>Send Message</span>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
