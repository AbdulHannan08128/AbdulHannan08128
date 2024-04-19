"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import axios from "axios";

const Contact = ({ NODE_ENV }) => {
  /**
   * Source: https://www.joshwcomeau.com/react/the-perils-of-rehydration/
   * Reason: To fix rehydration error
   */
  const [hasMounted, setHasMounted] = React.useState(false);
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [subject, setSubject] = React.useState("");
  const [number, setNumber] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [emailSent, setEmailSent] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [noEmail, setNoEmail] = React.useState(false);
  React.useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    const data = {
      name: name,
      email: email,
      subject: subject,
      number: number,
      message: message,
    };
    try {
      if (email!='' && name!=''&& email.includes('@') == true) {
        
      const response = await axios.post(
        NODE_ENV == "production"
          ? `https://abdul-hannan.vercel.app/api/email`
          : "http://localhost:3000/api/email",
        data,
      );
      setName("");
      setEmail("");
      setSubject("");
      setNumber("");
      setMessage("");
      setEmailSent(true);
      setLoading(false);
      return response.data;
    }
    else{
      setLoading(false);
      setNoEmail(true);
    }
    
     
    } catch (error) {
      setLoading(false);
      console.error("Error while making POST request:", error);
      throw error;
    }
  }
  function nameChange(e) {
    e.preventDefault();
    setName(e.target.value);
  }
  function emailChange(e) {
    e.preventDefault();
    setEmail(e.target.value);
  }
  function subjectChange(e) {
    e.preventDefault();
    setSubject(e.target.value);
  }
  function numberChange(e) {
    e.preventDefault();
    setNumber(e.target.value);
  }
  function messageChange(e) {
    e.preventDefault();
    setMessage(e.target.value);
  }

  return (
    <>
      {/* <!-- ===== Contact Start ===== --> */}
      <section id="support" className="px-4 md:px-8 2xl:px-0">
        <div className="relative mx-auto max-w-c-1390 px-7.5 pt-10 lg:px-15 lg:pt-15 xl:px-20 xl:pt-20">
          <div className="absolute left-0 top-0 -z-1 h-2/3 w-full rounded-lg bg-gradient-to-t from-transparent to-[#dee7ff47] dark:bg-gradient-to-t dark:to-[#252A42]"></div>
          <div className="absolute bottom-[-255px] left-0 -z-1 h-full w-full">
            <Image
              src="./images/shape/shape-dotted-light.svg"
              alt="Dotted"
              className="dark:hidden"
              fill
            />
            <Image
              src="./images/shape/shape-dotted-dark.svg"
              alt="Dotted"
              className="hidden dark:block"
              fill
            />
          </div>

          <div className="flex flex-col-reverse flex-wrap gap-8 md:flex-row md:flex-nowrap md:justify-between xl:gap-20">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top w-full rounded-lg bg-white p-7.5 shadow-solid-8 dark:border dark:border-strokedark dark:bg-black md:w-3/5 lg:w-3/4 xl:p-15"
            >
              <h2 className="mb-15 text-3xl font-semibold text-black dark:text-white xl:text-sectiontitle2">
                Send a message
              </h2>

              <form>
                <div className="mb-7.5 flex flex-col gap-7.5 lg:flex-row lg:justify-between lg:gap-14">
                  <input
                    type="text"
                    placeholder="Full name"
                    className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
                    onChange={nameChange}
                    value={name}
                  />

                  <input
                    type="email"
                    placeholder="Email address"
                    className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
                    onChange={emailChange}
                    value={email}
                  />
                </div>

                <div className="mb-12.5 flex flex-col gap-7.5 lg:flex-row lg:justify-between lg:gap-14">
                  <input
                    type="text"
                    placeholder="Subject"
                    className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
                    onChange={subjectChange}
                    value={subject}
                  />

                  <input
                    type="text"
                    placeholder="Phone number"
                    className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
                    onChange={numberChange}
                    value={number}
                  />
                </div>

                <div className="mb-11.5 flex">
                  <textarea
                    placeholder="Message"
                    rows={4}
                    className="w-full border-b border-stroke bg-transparent focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white"
                    onChange={messageChange}
                    value={message}
                  >
                    {message}
                  </textarea>
                </div>

                <div className="flex flex-wrap gap-4 xl:justify-between ">
                  <button
                    className="inline-flex items-center gap-2.5 rounded-full bg-black px-6 py-3 font-medium text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark"
                    onClick={handleSubmit}
                  >
                    Send Message
                    {loading ? (
                      <svg
                        class="mr-3 h-5 w-5 animate-spin text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          class="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          stroke-width="4"
                        ></circle>
                        <path
                          class="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V2C5.373 2 2 5.373 2 10h2zm2 8a8 8 0 018-8h2c0 4.627-3.373 8-8 8v-2zm8-6a8 8 0 01-8 8V22c4.627 0 8-3.373 8-8h-2zm-8-6a8 8 0 018 8h2c0-4.627-3.373-8-8-8v2z"
                        ></path>
                      </svg>
                    ) : (
                      <svg
                        className="fill-white"
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.4767 6.16664L6.00668 1.69664L7.18501 0.518311L13.6667 6.99998L7.18501 13.4816L6.00668 12.3033L10.4767 7.83331H0.333344V6.16664H10.4767Z"
                          fill=""
                        />
                      </svg>
                    )}
                  </button>
                </div>
              </form>
            </motion.div>

            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 2, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top w-full md:w-2/5 md:p-7.5 lg:w-[26%] xl:pt-15"
            >
              <h2 className="mb-12.5 text-3xl font-semibold text-black dark:text-white xl:text-sectiontitle2">
                Find me
              </h2>

              <div>
                <h4 className="mb-4 text-metatitle3 font-medium text-black dark:text-white">
                  <a href="https://github.com/AbdulHannan08128">Github</a>
                </h4>
              </div>
              <div>
                <h4 className="mb-4 text-metatitle3 font-medium text-black dark:text-white">
                  <a href="https://www.freelancer.in/u/AbdulHannan08128">
                    {" "}
                    Freelancer
                  </a>
                </h4>
              </div>
              <div>
                <h4 className="mb-4 text-metatitle3 font-medium text-black dark:text-white">
                  <a href="https://www.upwork.com/freelancers/~017281d9f43346f4cd?mp_source=share">
                    {" "}
                    Upwork{" "}
                  </a>
                </h4>
              </div>
              <div>
                <h4 className="mb-4 text-metatitle3 font-medium text-black dark:text-white">
                  <a href="https://www.fiverr.com/ab_hannan_web"> Fiverr </a>
                </h4>
              </div>
              <div>
                <h4 className="mb-4 text-metatitle3 font-medium text-black dark:text-white">
                  <a href="https://www.linkedin.com/in/abdul-hannan-b44ab02a8">
                    {" "}
                    LinkedIN{" "}
                  </a>
                </h4>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== Contact End ===== --> */}

      {emailSent && (
        <div
          id="infoMessage"
          class=" flex items-center rounded-lg border-l-4 border-green-400 bg-green-50 p-4 shadow-lg dark:bg-gray-800 dark:text-green-300 w-96 fixed bottom-0 left-0 z-999 alert"
        >
          <div class="flex-shrink-0">
            <svg
              class="h-8 w-8 text-green-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
          </div>
          <div class="ml-3">
            <p class="text-sm font-medium text-green-800 dark:text-green-300">
              Message sent successfully
            </p>
            <p class="text-sm text-green-600 dark:text-green-300">
              Please check your email after few hours.
            </p>
          </div>
          <button
            id="closeButton"
            class="ml-auto flex-shrink-0 focus:text-green-500 focus:outline-none"
            onClick={(e) => {
              setEmailSent(false);
            }}
          >
            <svg
              class="h-6 w-6 text-green-500"
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
      )}
      {noEmail && (
        <div
          id="infoMessage"
          className=" flex items-center rounded-lg border-l-4 border-red-400 bg-red-50 p-4 shadow-lg dark:bg-gray-800 dark:text-red-300 w-96 fixed bottom-0 left-0 z-50 overflow-x-scroll alert"
        >
         
          <div class="ml-3">
            <p class="text-sm text-red-800 dark:text-red-300 font-bold">
              Check Your Email and Name Entered
            </p>
            <p className="text-sm text-red-600 dark:text-red-300">
              Seems That The Details You Entered Are Not Correct
            </p>
          </div>
          <button
            id="closeButton" 
            className="ml-auto flex-shrink-0 focus:text-red-500 focus:outline-none"
            onClick={(e) => {
              setNoEmail(false);
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
      )}
    </>
  );
};

export default Contact;
