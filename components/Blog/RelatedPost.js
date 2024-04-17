import React from "react";
import Image from "next/image";
import Link from "next/link";
import BlogData from "./blogData";
import {urlForImage} from "@/utils/configSanity";

const RelatedPost = async (props) => {
  return (
    <>
      <div className="animate_top rounded-md border border-stroke bg-white p-9 shadow-solid-13 dark:border-strokedark dark:bg-blacksection">
        <h4 className="mb-7.5 text-2xl font-semibold text-black dark:text-white">
          Related Posts
        </h4>

        <div>
          {props.blogs.slice(0, 3).map((post, key) => (
            <div
              className="mb-7.5 flex flex-wrap gap-4 xl:flex-nowrap 2xl:gap-6"
              key={key}
            >
              <div className="max-w-45 relative h-18 w-45" key={key*100000}>
                {urlForImage(post.cover_image).width(400).height(200).url() ? (
                  <Image fill src={urlForImage(post.cover_image).width(400).height(200).url()} alt="Blog" className="rounded-xl"/>
                ) : (
                  "No image"
                )}
              </div>
              <h5 className="text-md font-medium text-black transition-all duration-300 hover:text-primary dark:text-white dark:hover:text-primary">
                <Link href={process.env.NODE_ENV=='production'?`https://abdul-hannan.vercel.app/blog/${post.title.replaceAll(' ', '-')}`:`http://localhost:3000/blog/${post.title.replaceAll(' ', '-')}`}>
                  {" "}
                  {post.title.slice(0, 40)}...
                </Link>
              </h5>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default RelatedPost;
