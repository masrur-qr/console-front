"use client";

import { Order } from "@/types";
import Link from "next/link";
import { FormEvent, useRef, useState } from "react";

import toast, { Toaster } from "react-hot-toast";

import { ThreeDots } from "react-loader-spinner";

export default function FormContainer({ lang }: any) {
  const nameRef = useRef<any>(null);
  const emailRef = useRef<any>(null);
  const aboutRef = useRef<any>(null);
  const phoneRef = useRef<any>(null);
  const [budget, setBudget] = useState("");
  const [servicesTitles, setServicesTitles] = useState<any>([
    // lang.about_services.e_commerce,
  ]);
  const linkRef = useRef<any>(null);

  const [loading, setLoading] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");

  const [error, setError] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const successToast = () => toast.success("Successfully created!");
  const errorToast = () => toast.error("Fill all fields");

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleChange = (event: any) => {
    const { value } = event.target;
    setEmail(value);
    if (!validateEmail(value)) {
      setError("Invalid email address");
    } else {
      setError("");
    }
  };

  const validatePhoneNumber = (phoneNumber: any) => {
    const regex = /^\+?[1-9]\d{1,14}$/;
    return regex.test(phoneNumber);
  };

  const handleChangePhoneNumber = (event: any) => {
    const { value } = event.target;
    setPhoneNumber(value);
    if (!validatePhoneNumber(value)) {
      setPhoneError("Invalid phone number");
    } else {
      setPhoneError("");
    }
  };

  async function handleOrder(e: any) {
    e.preventDefault();
    setLoading(true);

    const data: any = {
      name: nameRef.current?.value,
      about: aboutRef.current?.value,
      budget: budget,
      email: email,
      link: linkRef.current?.value,
      phone: phoneNumber,
      services: servicesTitles,
    };

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_CONSOLE_API_URL}/accept/orders`,
        {
          headers: {
            "Content-Type": "application/json",
          },
          method: "POST",
          credentials: "include",
          body: JSON.stringify(data),
        }
      );
      const jsonData = await response.json();
      console.log(jsonData);

      if (response.status == 200) {
        projectOrder();
        successToast();
        setLoading(false);
      } else if (response.status == 400) {
        errorToast();
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }

  async function projectOrder() {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_CONSOLE_API_URL}/project/orders`,
        {
          headers: {
            "Content-Type": "application/json",
          },
          method: "PUT",
          credentials: "include",
        }
      );
      console.log(response);

      const jsonData = await response.json();
    } catch (error) {
      console.log(error);
    }
  }

  const handleBudget = (e: any, budget: string) => {
    e.preventDefault();
    setBudget(budget);
  };

  const handleServices = (e: any, service: string) => {
    e.preventDefault();
    const existingService = servicesTitles.find(
      (item: string) => item == service
    );

    if (!existingService) {
      setServicesTitles([...servicesTitles, service]);
    } else {
      setServicesTitles((prevState: any) =>
        prevState.filter((item: any) => item != existingService)
      );
    }
  };

  return (
    <section className="border border-white rounded-[20px] p-[56px] form-container-section">
      <h4 className="text-center text-[24px] mb-[50px] font-light">
        {lang.form_text}
      </h4>
      <form onSubmit={handleOrder}>
        <div className="flex items-start justify-between gap-10 main-form-container">
          <div className="flex-1">
            <div>
              <p className="text-[21px] mb-[32px]">{lang.about_person.text}</p>
              <input
                className="w-full h-[50px] border border-[#888] bg-[#121212] rounded-[10px] px-[40px] mb-[20px]"
                type="text"
                placeholder={lang.about_person.name}
                ref={nameRef}
              />
              <div className="mb-[20px]">
                <input
                  className="w-full h-[50px] border border-[#888] bg-[#121212] rounded-[10px] px-[40px]"
                  type="email"
                  placeholder={lang.about_person.email}
                  onChange={handleChange}
                  value={email}
                />
                {error && (
                  <p style={{ color: "red", marginTop: "10px" }}>{error}</p>
                )}
              </div>
              <div>
                <input
                  className="w-full h-[50px] border border-[#888] bg-[#121212] rounded-[10px] px-[40px]"
                  type="text"
                  placeholder={lang.about_person.number}
                  onChange={handleChangePhoneNumber}
                  value={phoneNumber}
                />
                {phoneError && (
                  <p style={{ color: "red", marginTop: "10px" }}>
                    {phoneError}
                  </p>
                )}
              </div>
            </div>
            <div>
              <p className="text-[21px] mb-[32px] mt-[50px]">
                {lang.about_project.text}
              </p>
              <textarea
                placeholder={lang.about_project.description}
                className="w-full h-[130px] border border-[#888] bg-[#121212] rounded-[10px] px-[40px] py-[20px] mb-[20px] resize-none"
                ref={aboutRef}
              ></textarea>
            </div>
          </div>
          <div className="flex-1">
            <div>
              <p className="text-[21px] mb-[32px]">
                {lang.about_services.text}
              </p>
              <div className="flex items-center flex-wrap gap-[30px] services-wrapper">
                <span
                  onClick={(e) =>
                    handleServices(e, lang.about_services.e_commerce)
                  }
                  className={`${
                    servicesTitles.includes(lang.about_services.e_commerce)
                      ? "bg-white text-black"
                      : "bg-black text-white"
                  } px-[40px] py-[10px] border border-white rounded-[10px] cursor-pointer`}
                >
                  {lang.about_services.e_commerce}
                </span>
                <span
                  onClick={(e) =>
                    handleServices(e, lang.about_services.info_web)
                  }
                  className={`${
                    servicesTitles.includes(lang.about_services.info_web)
                      ? "bg-white text-black"
                      : "bg-black text-white"
                  } px-[40px] py-[10px] border border-white rounded-[10px] cursor-pointer`}
                >
                  {lang.about_services.info_web}
                </span>
                <span
                  onClick={(e) =>
                    handleServices(e, lang.about_services.branding)
                  }
                  className={`${
                    servicesTitles.includes(lang.about_services.branding)
                      ? "bg-white text-black"
                      : "bg-black text-white"
                  } px-[40px] py-[10px] border border-white rounded-[10px] cursor-pointer`}
                >
                  {lang.about_services.branding}
                </span>
                <span
                  onClick={(e) =>
                    handleServices(e, lang.about_services.corporate_website)
                  }
                  className={`${
                    servicesTitles.includes(
                      lang.about_services.corporate_website
                    )
                      ? "bg-white text-black"
                      : "bg-black text-white"
                  } px-[40px] py-[10px] border border-white rounded-[10px] cursor-pointer`}
                >
                  {lang.about_services.corporate_website}
                </span>
                <span
                  onClick={(e) => handleServices(e, lang.about_services.other)}
                  className={`${
                    servicesTitles.includes(lang.about_services.other)
                      ? "bg-white text-black"
                      : "bg-black text-white"
                  } px-[40px] py-[10px] border border-white rounded-[10px] cursor-pointer`}
                >
                  {lang.about_services.other}
                </span>
              </div>
            </div>
            <div>
              <p className="text-[21px] mb-[32px] mt-[50px]">
                {lang.about_services.text2}
              </p>
              <div className="flex items-center flex-wrap gap-5 budget-wrapper">
                <span
                  onClick={(e) => handleBudget(e, "$1k")}
                  className={`px-[40px] py-[10px] border border-white rounded-[10px] cursor-pointer  ${
                    budget == "$1k"
                      ? "bg-white text-black"
                      : "bg-black text-white"
                  }`}
                >
                  {lang.about_services.text3} $1k
                </span>
                <span
                  onClick={(e) => handleBudget(e, "$2k-$5k")}
                  className={`px-[40px] py-[10px] border border-white rounded-[10px] cursor-pointer  ${
                    budget == "$2k-$5k"
                      ? "bg-white text-black"
                      : "bg-black text-white"
                  }`}
                >
                  $2k-$5k
                </span>
                <span
                  onClick={(e) => handleBudget(e, "$5k-$10k")}
                  className={`px-[40px] py-[10px] border border-white rounded-[10px] cursor-pointer  ${
                    budget == "$5k-$10k"
                      ? "bg-white text-black"
                      : "bg-black text-white"
                  }`}
                >
                  $5k-$10k
                </span>
                <span
                  onClick={(e) => handleBudget(e, "$10k+")}
                  className={`px-[40px] py-[10px] border border-white rounded-[10px] cursor-pointer  ${
                    budget == "$10k+"
                      ? "bg-white text-black"
                      : "bg-black text-white"
                  }`}
                >
                  $10k+
                </span>
              </div>
              <div className="mt-[28px] opacity-0">
                <input
                  className="w-full h-[50px] border border-[#888] bg-[#121212] rounded-[10px] px-[40px] mb-[20px]"
                  type="text"
                  placeholder={lang.about_services.link}
                  ref={linkRef}
                />
              </div>
              <div>
                <input
                  className="w-full h-[50px] border border-[#888] bg-[#121212] rounded-[10px] px-[40px] mb-[20px]"
                  type="text"
                  placeholder={lang.about_services.link}
                  ref={linkRef}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center mt-[30px]">
          <button
            className={`w-[370px] h-[60px] flex items-center justify-center border border-white rounded-[10px] send-request ${
              loading == false && "duration-500"
            }`}
          >
            {loading == false ? (
              lang.button
            ) : (
              <ThreeDots
                visible={true}
                height="60"
                width="60"
                color="#fff"
                radius="9"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClass=""
              />
            )}
          </button>
        </div>
      </form>
      <Toaster
        toastOptions={{
          success: {
            style: {
              background: "green",
              color: "white",
            },
          },
          error: {
            style: {
              background: "red",
              color: "white",
            },
          },
        }}
      />
    </section>
  );
}
