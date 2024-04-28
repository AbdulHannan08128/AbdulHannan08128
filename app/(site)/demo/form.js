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
  const [websiteType, setWebsiteType] = React.useState();
  const [websiteTypeError, setWebsiteTypeError] = React.useState();
  const [baseAmount, setBaseAmount] = React.useState(0);
  const [discount, setDiscount] = React.useState(50);
  const [name, setName] = React.useState();
  const [nameError, setNameError] = React.useState();
  const [email, setEmail] = React.useState('');
  const [emailError, setEmailError] = React.useState();
  const [number, setNumber] = React.useState();
  const [numberError, setNumberError] = React.useState();
  const [city, setCity] = React.useState();
  const [cityError, setCityError] = React.useState();
  const [country, setCountry] = React.useState();
  const [countryError, setCountryError] = React.useState();
  const [brandType, setBrandType] = React.useState();
  const [brandTypeError, setBrandTypeError] = React.useState();
  const [brandName, setBrandName] = React.useState();
  const [brandNameError, setBrandNameError] = React.useState();
  const [websiteInfo, setWebsiteInfo] = React.useState();
  const [websiteInfoError, setWebsiteInfoError] = React.useState();
  const [businessInfo, setBusinessInfo] = React.useState();
  const [businessInfoError, setBusinessInfoError] = React.useState();
  const [allError, setAllError] = React.useState();

  const characters = [
    // Capital letters
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    // Small letters
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    // Special characters
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "-",
    "_",
    "+",
    "=",
    "{",
    "}",
    "[",
    "]",
    "|",
    "\\",
    ":",
    ";",
    '"',
    "'",
    "<",
    ">",
    ",",
    ".",
    "?",
    "/",
    "~",
    "`",
    " ",
  ];

  async function planChange(e) {
    let selectedPlan = e.target.value;

    if (selectedPlan == "") {
      setPlanError("Please Select A Plan");
    } else {
      setPlanError(false);
      setPlan(selectedPlan);
    }
  }
  async function nameChange(e) {
    let name = e.target.value;

    if (name == "") {
      setNameError("Please Enter Your Name");
    } else {
      setNameError(false);
      setName(name);
    }
  }
  async function cityChange(e) {
    let city = e.target.value;

    if (city == "") {
      setCityError("Please Enter Your City Name");
    } else {
      setCityError(false);
      setCity(city);
    }
  }
  async function brandTypeChange(e) {
    let brandType = e.target.value;

    if (brandType == "") {
      setBrandTypeError("Please Select a Brand Type");
    } else {
      setBrandTypeError(false);
      setBrandType(brandType);
    }
  }
  async function brandNameChange(e) {
    let brandName = e.target.value;

    if (brandName == "") {
      setBrandNameError("Please Enter Your Brand Name");
    } else {
      setBrandNameError(false);
      setBrandName(brandName);
    }
  }
  async function countryChange(e) {
    let country = e.target.value;

    if (country == "") {
      setCountryError("Please Select Your Country");
    } else {
      setCountryError(false);
      setCountry(country);
    }
  }
  async function emailChange(e) {
    let email = e.target.value;

    if (email == "") {
      setEmailError("Please Enter Your Email");
    } else {
      setEmailError(false);
      setEmail(email);
    }
  }
  async function websiteInfoChange(e) {
    let websiteInfo = e.target.value;

    if (websiteInfo == "") {
      setWebsiteInfoError("Please Enter Details About Your Website");
    } else {
      setWebsiteInfoError(false);
      setWebsiteInfo(websiteInfo);
    }
  }
  async function businessInfoChange(e) {
    let businessInfo = e.target.value;

    if (businessInfo == "") {
      setBusinessInfoError("Please Enter Your/Business Information");
    } else {
      setBusinessInfoError(false);
      setBusinessInfo(businessInfo);
    }
  }
  async function numberChange(e) {
    const number = e.target.value;
    let invalidCharacter = false;
    characters.forEach((character) => {
      if (number.includes(character)) {
        invalidCharacter = true;
      }
    });
    if (invalidCharacter) {
      setNumberError("Invalid Character Detected");
    } else if (number == "") {
      setNumberError("Please Enter Your Phone Number");
    } else if (number.length > 10) {
      setNumberError("Please Enter A Valid Ph. No.");
    } else {
      setNumberError(false);
    }

    setNumber(number);
  }
  async function websiteTypeChange(e) {
    let selectedWebsiteType = e.target.value;
    if (plan == "custom") {
      if (selectedWebsiteType == '') {
        setWebsiteTypeError('Please Enter Your Custom Website Type')
      }
      else {
        setWebsiteTypeError(false);
        setWebsiteType(selectedWebsiteType);
      }
      setBaseAmount(0);
    } else {
      if (selectedWebsiteType == "") {
        setBaseAmount(0);
        setWebsiteTypeError('Please Select A Website Type')
      } else {
        const [websiteTypeName, Amount] = selectedWebsiteType.split("-");
        Amount
          ? setBaseAmount(parseFloat(Amount))
          : setBaseAmount(parseFloat(0));
        switch (websiteTypeName) {
          case "SW":
            setWebsiteType("Single Webpage");
            break;
          case "MPPW":
            setWebsiteType("Multi Page Personal Webapp");
            break;
          case "MPBW":
            setWebsiteType("Multi Page Business Webapp");
            break;
          case "CW":
            setWebsiteType("Chat Webapp");
            break;
          case "TW":
            setWebsiteType("Travel Webapp");
            break;
          case "EW":
            setWebsiteType("E-commerce Webapp");
            break;
          case "HTW":
            setWebsiteType("High Travel Webapp");
            break;
          case "BW":
            setWebsiteType("Blog Webapp");
            break;

          default:
            setWebsiteType("");
            break;
        }
      }
    }
  }

  function validate() {
    let validation = true; // Assume validation passes initially
  
    if (
      !name || !email || !number || !city || !country || !plan || 
      !brandType || !brandName || !websiteType || !websiteInfo || !businessInfo 
    ) {
      validation = false;
      setAllError(true);
      return false;
    }
    if (
      nameError||emailError||numberError||cityError||countryError||planError||websiteTypeError||websiteInfoError||businessInfoError||brandTypeError||brandNameError
    ) {
      validation = false;
      setAllError(true);
      return false;
    }
  
    if (!email.includes('@')) {
      setEmailError('Detected Invalid Email');
      validation = false;
    }
  
    if (number.length !== 10 || !/^\d+$/.test(number)) {
      setNumberError("Please Enter A Valid Ph. No.");
      validation = false;
    }
  
    if (plan === "custom" && websiteType === '') {
      setWebsiteTypeError('Please Enter Your Custom Website Type');
      validation = false;
    }
  
    if (!planError && !brandTypeError && !websiteTypeError && !emailError && !numberError && !nameError && !cityError && !countryError && !brandNameError && !websiteInfoError && !businessInfoError) {
      setAllError(false);
    }
  
    return validation; // Return the validation result
  }
  
  
  async function submit(e) {
    e.preventDefault();
    const isValid = await validate(); // Await the result of validation
  
    if (isValid) {
      setAllError(false);
      alert('Your Details Were Submitted Successfully')
    } else {
      setAllError(true);
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
                onChange={nameChange}
              />
              <div className=" mt-1 text-red-500">
                {nameError ? nameError : ""}
              </div>
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
                type="text"
                placeholder="Your Email"
                fdprocessedid="yyd6oi"
                onChange={emailChange}
              />
              <div className=" mt-1 text-red-500">
                {emailError ? emailError : ""}
              </div>
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
                type="text"
                placeholder="Your Phone Number"
                fdprocessedid="dghg"
                onChange={numberChange}
                value={number}
              />
              <div className=" mt-1 text-red-500">
                {numberError ? numberError : ""}
              </div>
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
                onChange={cityChange}
              />
              <div className=" mt-1 text-red-500">
                {cityError ? cityError : ""}
              </div>
            </div>
            <div className="w-full px-4 md:w-1/3">
              <label
                className="text-coolGray-800 mb-2 block font-medium leading-6"
                htmlFor=""
              >
                Country*
              </label>
              <select
                className="border-coolGray-200 text-coolGray-300 placeholder-coolGray-300 focus:shadow-outline block h-12 w-full appearance-none rounded-lg border px-3 py-2 leading-6 shadow-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                onChange={countryChange}
              >
                <option value="" key="" default>
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
              <div className=" mt-1 text-red-500">
                {countryError ? countryError : ""}
              </div>
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
            <div className=" mt-1 text-red-500">
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
              <select
                className="border-coolGray-200 text-coolGray-300 placeholder-coolGray-300 focus:shadow-outline block h-12 w-full appearance-none rounded-lg border px-3 py-2 leading-6 shadow-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                onChange={brandTypeChange}
              >
                <option value="" key="" default>
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
              <div className=" mt-1 text-red-500">
                {brandTypeError ? brandTypeError : ""}
              </div>
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
                onChange={brandNameChange}
              />
              <div className=" mt-1 text-red-500">
                {brandNameError ? brandNameError : ""}
              </div>
            </div>
          </div>

          <div className="mb-8">
            <label
              className="text-coolGray-800 mb-2 block font-medium leading-6"
              htmlFor=""
            >
              Type Of Website You Want*
            </label>
            {plan != "custom" ? (
              <select
                className="border-coolGray-200 text-coolGray-300 placeholder-coolGray-300 focus:shadow-outline block h-12 w-full appearance-none rounded-lg border px-3 py-2 leading-6 shadow-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                onChange={websiteTypeChange}
              >
                <option value="" key="" default>
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
                    <option value="EW-599">E-commerce Webapp</option>

                    <option value="HTW-399">High Travel Webapp</option>
                    <option value="BW-399">Blog Webapp</option>
                  </>
                )}
              </select>
            ) : (
              ""
            )}
            {plan === "custom" && (
              <input
                className="border-coolGray-200 text-coolGray-300 placeholder-coolGray-300 focus:shadow-outline block h-12 w-full appearance-none rounded-lg border px-3 py-2 leading-6 shadow-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                placeholder="Type Your Custom Website Type"
                onChange={websiteTypeChange}
              />
            )}
            <div className=" mt-1 text-red-500">
              {websiteTypeError ? websiteTypeError : ""}
            </div>
          </div>
          <div className="-mx-4 mb-8 flex flex-wrap">
            <div className="mb-8 w-full px-4 md:mb-0 md:w-1/2">
              <label
                className="text-coolGray-800 mb-2 block font-medium leading-6"
                htmlFor=""
              >
                Additional Info About Your Website*
              </label>
              <textarea
                cols="30"
                rows="10"
                className="border-coolGray-200 text-coolGray-300 placeholder-coolGray-300 focus:shadow-outline block w-full appearance-none rounded-lg border px-3 py-2 leading-6 shadow-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                placeholder="Type How Your Website Should Look"
                onChange={websiteInfoChange}></textarea>
              <div className=" mt-1 text-red-500">
                {websiteInfoError ? websiteInfoError : ""}
              </div>

            </div>
            <div className="w-full px-4 md:w-1/2">
              <label
                className="text-coolGray-800 mb-2 block font-medium leading-6"
                htmlFor=""
              >
                Additional Info About Your Business/You*
              </label>
              <textarea
                cols="30"
                rows="10"
                className="border-coolGray-200 text-coolGray-300 placeholder-coolGray-300 focus:shadow-outline block w-full appearance-none rounded-lg border px-3 py-2 leading-6 shadow-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                placeholder="Type Information About Your Business Or Yourself"
                onChange={businessInfoChange}
              ></textarea>
              <div className=" mt-1 text-red-500">
                {businessInfoError ? businessInfoError : ""}
              </div>
            </div>
          </div>


          {plan != "custom" ? (
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
          ) : (
            ""
          )}
          <button
            className=" inline-block w-full rounded-md bg-green-500 px-7 py-3 text-center text-base font-medium leading-6 text-green-50 shadow-sm hover:bg-green-600 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
            onClick={submit}
          >
            Continue {""}
          </button>
        </form>
      </div>
      {allError?(
        <div
        id="infoMessage"
        className=" flex items-center rounded-lg border-l-4 border-red-400 bg-red-50 p-4 shadow-lg dark:bg-gray-800 dark:text-red-300 w-96 fixed bottom-0 left-0 z-50 overflow-x-scroll alert"
      >
       
        <div class="ml-3">
          <p class="text-sm text-red-800 dark:text-red-300 font-bold">
            Please Recheck Your Details Entered
          </p>
          <p className="text-sm text-red-600 dark:text-red-300">
            Seems That The Details You Entered Are Not Correct
          </p>
        </div>
        <button
          id="closeButton" 
          className="ml-auto flex-shrink-0 focus:text-red-500 focus:outline-none"
          onClick={(e) => {
            setAllError(false);
          }}
        >
          <svg
            class="h-6 w-6 text-red-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
      </div>
      ):''}
    </div>
  );
};

export default form;
