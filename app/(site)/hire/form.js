"use client";
import React from "react";
import countries from "./countries";
import brands from "./brands";
import Link from "next/link";
import SectionHeader from "@/components/Common/SectionHeader";
import Image from "next/image";
const form = () => {
  const [plan, setPlan] = React.useState("");
  const [planError, setPlanError] = React.useState();
  const [websiteType, setWebsiteType] = React.useState("");
  const [websiteTypeError, setWebsiteTypeError] = React.useState();
  const [baseAmount, setBaseAmount] = React.useState(0);
  const [discount, setDiscount] = React.useState(50);
  async function planChange(e) {
    let selectedPlan = e.target.value;

    if (selectedPlan == "") {
      setPlanError("Please Select A Plan");
    } else {
      setPlanError(false);
      setPlan(selectedPlan);
    }
  }

  async function websiteTypeChange(e) {
    let selectedWebsiteType = e.target.value;
    if (selectedWebsiteType == "") {
      setBaseAmount(0);
    } else {
      const [websiteTypeName, Amount] = selectedWebsiteType.split("-");
      Amount ? setBaseAmount(parseFloat(Amount)) : setBaseAmount(parseFloat(0));
    }
  }

  return (
    <div className="bg-coolGray-900 mt-10 h-full w-full overflow-y-auto bg-opacity-50 px-4 py-16 md:py-28">
      <SectionHeader
        headerInfo={{
          title: `Hire Me`,
          subtitle: `Get Started`,
          description: ``,
        }}
      />
      <div className="bg-coolGray-50 mx-auto max-w-4xl rounded-lg p-6 sm:p-10">
        <form action="">
          <div className="-mx-4 mb-8 flex flex-wrap">
            <div className="mb-8 w-full px-4 md:mb-0 md:w-1/2">
              <label
                className="text-coolGray-800 mb-2 block font-medium leading-6"
                htmlFor=""
              >
                Full Name*
              </label>
              <input
                className="border-coolGray-200 text-coolGray-300 placeholder-coolGray-300 block h-12 w-full appearance-none rounded-lg border px-3 py-2 leading-6 shadow-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                type="text"
                placeholder="Your Name"
                fdprocessedid="9vmqqi"
              />
            </div>
            <div className="w-full px-4 md:w-1/2">
              <label
                className="text-coolGray-800 mb-2 block font-medium leading-6"
                htmlFor=""
              >
                Email*
              </label>
              <input
                className="border-coolGray-200 text-coolGray-300 placeholder-coolGray-300 focus:shadow-outline block h-12 w-full appearance-none rounded-lg border px-3 py-2 leading-6 shadow-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                type="email"
                placeholder="Your Email"
                fdprocessedid="yyd6oi"
              />
            </div>
          </div>

          <div className="-mx-4 mb-8 flex flex-wrap">
            <div className="mb-8 w-full px-4 md:mb-0 md:w-1/3">
              <label
                className="text-coolGray-800 mb-2 block font-medium leading-6"
                htmlFor=""
              >
                Phone Number*
              </label>
              <input
                className="border-coolGray-200 text-coolGray-300 placeholder-coolGray-300 focus:shadow-outline block h-12 w-full appearance-none rounded-lg border px-3 py-2 leading-6 shadow-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                type="number"
                placeholder="Your Phone Number"
                fdprocessedid="dghg"
              />
            </div>
            <div className="mb-8 w-full px-4 md:mb-0 md:w-1/3">
              <label
                className="text-coolGray-800 mb-2 block font-medium leading-6"
                htmlFor=""
              >
                City
              </label>
              <input
                className="border-coolGray-200 text-coolGray-300 placeholder-coolGray-300 focus:shadow-outline block h-12 w-full appearance-none rounded-lg border px-3 py-2 leading-6 shadow-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                type="email"
                placeholder="Your City"
                fdprocessedid="w0tbvo"
              />
            </div>
            <div className="w-full px-4 md:w-1/3">
              <label
                className="text-coolGray-800 mb-2 block font-medium leading-6"
                htmlFor=""
              >
                Country*
              </label>
              <select className="border-coolGray-200 text-coolGray-300 placeholder-coolGray-300 focus:shadow-outline block h-12 w-full appearance-none rounded-lg border px-3 py-2 leading-6 shadow-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">
                <option value="none" key="" default>
                  Select Your Country
                </option>
                {countries.map((country, key) => {
                  return (
                    <option value={country.value} key={key}>
                      {country.label}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          <div className="mb-8">
            <label
              className="text-coolGray-800 mb-2 block font-medium leading-6"
              htmlFor=""
            >
              Plan*
            </label>

            <select
              className="border-coolGray-200 text-coolGray-300 placeholder-coolGray-300 focus:shadow-outline block h-12 w-full appearance-none rounded-lg border px-3 py-2 leading-6 shadow-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
              onChange={planChange}
            >
              <option value="" key="1" default>
                Select Your Plan
              </option>
              <option value="bronze" key="2">
                Bronze
              </option>
              <option value="silver" key="3">
                Silver
              </option>
              <option value="gold" key="4">
                Gold
              </option>
              <option value="custom" key="4">
                Custom
              </option>
            </select>
            <div className="mx-4 mt-3 font-bold text-red-500">
              {planError ? planError : ""}
            </div>
          </div>
          <div className="-mx-4 mb-8 flex flex-wrap">
            <div className="mb-8 w-full px-4 md:mb-0 md:w-1/2">
              <label
                className="text-coolGray-800 mb-2 block font-medium leading-6"
                htmlFor=""
              >
                Brand Type*
              </label>
              <select className="border-coolGray-200 text-coolGray-300 placeholder-coolGray-300 focus:shadow-outline block h-12 w-full appearance-none rounded-lg border px-3 py-2 leading-6 shadow-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">
                <option value="none" key="" default>
                  Select Your Brand Type
                </option>
                {brands.map((brand, key) => {
                  return (
                    <option value={brand.value} key={key}>
                      {brand.label}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="w-full px-4 md:w-1/2">
              <label
                className="text-coolGray-800 mb-2 block font-medium leading-6"
                htmlFor=""
              >
                Brand Name*
              </label>
              <input
                className="border-coolGray-200 text-coolGray-300 placeholder-coolGray-300 focus:shadow-outline block h-12 w-full appearance-none rounded-lg border px-3 py-2 leading-6 shadow-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                type="email"
                placeholder="Your Brand Name"
                fdprocessedid="yyd6oi"
              />
            </div>
          </div>

          <div className="mb-8">
            <label
              className="text-coolGray-800 mb-2 block font-medium leading-6"
              htmlFor=""
            >
              Type Of Website You Want*
            </label>
            <select
              className="border-coolGray-200 text-coolGray-300 placeholder-coolGray-300 focus:shadow-outline block h-12 w-full appearance-none rounded-lg border px-3 py-2 leading-6 shadow-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
              onChange={websiteTypeChange}
            >
              <option value="none" key="" default>
                Select Your Website Type
              </option>
              {plan === "bronze" && (
                <option value="SW-0" key="SW-0">
                  Single Webpage
                </option>
              )}
              {plan === "silver" && (
                <>
                  <option value="MPPW-99">Multi Page Personal Webapp</option>
                  <option value="MPBW-149">Multi Page Business Webapp</option>
                  <option value="CW-249">Chat Webapp</option>
                  <option value="TW-149">Travel Webapp</option>
                </>
              )}
              {plan === "gold" && (
                <>
                  <option value="HBW-399">High Business Webapp</option>
                  <option value="HBW-599">E-commerce Webapp</option>

                  <option value="HTW-399">High Travel Webapp</option>
                  <option value="MPBW-399">Multi Page Blog Webapp</option>
                </>
              )}
              {plan === "custom" && (
                <option value="custom-0" key="custom-0">
                  Customize Details
                </option>
              )}
            </select>
          </div>
          <div className="mb-8">
            <div className="mb-3 flex flex-wrap items-center justify-between">
              <span className="text-coolGray-500 text-sm font-medium">
                Total Base Amount
              </span>
              <span className="text-coolGray-500 text-sm font-medium">
                {baseAmount.toFixed(2)}
              </span>
            </div>
            <div className="mb-4 flex flex-wrap items-center justify-between">
              <span className="text-coolGray-500 text-sm font-medium">
                Discount
              </span>
              <span className="text-coolGray-500 text-sm font-medium">
                - {((discount / 100) * baseAmount).toFixed(2)}
              </span>
            </div>
            <div className="flex flex-wrap items-center justify-between">
              <span className="text-coolGray-800 font-medium">Subtotal</span>
              <span className="text-coolGray-800 font-medium">
                ${(baseAmount - (discount / 100) * baseAmount).toFixed(2)}
              </span>
            </div>
          </div>
          <Link
            className=" w-full rounded-md bg-green-500 px-7 py-3 text-center text-base font-medium leading-6 text-green-50 shadow-sm hover:bg-green-600 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 flex"
            style={{alignItems:'center', justifyContent:'center'}}
            href="#"
          >
            Continue
            <span>
            <Image
              width={20}
              height={20}
              src="/images/icon/icon-arrow-dark.svg"
              alt="Arrow"
              className="dark:hidden"
            />
            <Image
              width={20}
              height={20}
              src="/images/icon/icon-arrow-light.svg"
              alt="Arrow"
              className="hidden dark:block"
            />
            </span>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default form;
