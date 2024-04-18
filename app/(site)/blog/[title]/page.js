import React from "react";
import BlogDetails from "../blog-details/DETAILS";
export const dynamic = "force-dynamic";
import { urlForImage } from "@/utils/configSanity";
import { client } from "@/utils/configSanity";
async function getData() {
  const query = '*[_type == "blog"]';
  const data = await client.fetch(query);
  console.log(data);
  return data;
}



export async function generateMetadata({ params }) {
  // Read route params
  const title = params.title.replaceAll("-", " ");
  const blogs = await getData();

  // Find the blog post with matching title
  for (const blog of blogs) {
    if (blog.title === title) {
      return {
        title: blog.title,
        description:blog.meta_desc,
        openGraph: {
          images: [
            {
              url:
                urlForImage(blog.cover_image)
                  .width(400)
                  .height(400)
                  .url() || "/profile.png",
              width: 400,
              height: 400,
            },
          ],
        },
      };
    }
  }

  // Return a default metadata object if the blog post is not found
  return {
    title: "Default Title",
    openGraph: {
      images: [
        {
          url: "/default-image.png",
          width: 400,
          height: 400,
        },
      ],
    },
  };
}

  
  

 

  

const page = ({ params }) => {
  return (
    <>
      <BlogDetails title={params.title.replaceAll("-", " ")} />
    </>
  );
};

export default page;
