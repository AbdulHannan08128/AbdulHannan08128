"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Search = (props) => {
  const [search, setSearch] = useState("");
  const [URL,setURL]=useState('')
  useEffect(() => {
    const newURL = props.NODE_ENV === "production" ?
      "https://abdul-hannan.vercel.app/blog/search" :
      "http://localhost:3000/blog/search";
    setURL(newURL);
  }, [props.NODE_ENV]);

  function change(e){
    setSearch(URL+'/'+ e.target.value);
  }

  return (
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
      className="animate_top mx-auto text-center"
    >
      <div className="animate_top mb-10 rounded-md border border-stroke bg-white p-3.5 shadow-solid-13 dark:border-strokedark dark:bg-blacksection">
        <form>
          <div className="relative">
            <input
              type="text"
              placeholder={props.value?props.value:'Search Here...'}
              className="w-full rounded-lg border border-stroke px-6 py-4 shadow-solid-12 focus:border-primary focus:outline-none dark:border-strokedark dark:bg-black dark:shadow-none dark:focus:border-primary"
              onChange={change}
              
            />
            <Link href={search}>
              <button
                className="absolute right-0 top-0 p-5"
                aria-label="search-icon"
              >
                <svg
                  className="fill-black transition-all duration-300 hover:fill-primary dark:fill-white dark:hover:fill-primary"
                  width="21"
                  height="21"
                  viewBox="0 0 21 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16.031 14.617L20.314 18.899L18.899 20.314L14.617 16.031C13.0237 17.3082 11.042 18.0029 9 18C4.032 18 0 13.968 0 9C0 4.032 4.032 0 9 0C13.968 0 18 4.032 18 9C18.0029 11.042 17.3082 13.0237 16.031 14.617ZM14.025 13.875C15.2941 12.5699 16.0029 10.8204 16 9C16 5.132 12.867 2 9 2C5.132 2 2 5.132 2 9C2 12.867 5.132 16 9 16C10.8204 16.0029 12.5699 15.2941 13.875 14.025L14.025 13.875Z" />
                </svg>
              </button>
            </Link>
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default Search;
