import RelatedPost from "@/components/Blog/RelatedPost";
import SharePost from "@/components/Blog/SharePost";
import BlockContent from "@sanity/block-content-to-react";
import Image from "next/image";
import Link from "next/link";
import { client } from "@/utils/configSanity";
import { urlForImage } from "@/utils/configSanity";
import Search from '../Search'

export const dynamic = "force-dynamic";
async function getData() {
  const query = '*[_type == "blog"]';
  const data = await client.fetch(query);
  console.log(data);
  return data;
}

const SingleBlogPage = async (props) => {
  const blogs = await getData();
  //  console.log(blogs);

  return (
    <>
      {blogs.map((blog, index) => {
        const tags = blog.keywords.split(" ");
        // Create a Set to store unique category names
        const uniqueCategories = new Set();

        // Populate uniqueCategories with category names from blogs
        blogs.forEach((blog) => {
          uniqueCategories.add(blog.category);
        });

        // Convert Set to an array
        const categories = [...uniqueCategories];

        const mainImage =
          urlForImage(blog.cover_image).width(400).height(200).url() ||
          "NO IMAGE";

        const dateString = blog.date_pub; // Date string from Sanity
        const dateObject = new Date(dateString); // Convert string to Date object

        // Specify options for the desired format
        const options = {
          month: "long", // Full month name
          day: "numeric", // Day of the month
          year: "numeric", // Full year
        };

        // Convert date object to locale-specific date string with options
        const formattedDate = dateObject.toLocaleDateString("en-US", options);
        let find = false;
        let relatedBlogs = [];
        // console.log(blog.title, props.title);
        return blog.title == props.title ? (
          <section
            className="pb-20 pt-35 lg:pb-25 lg:pt-45 xl:pb-30 xl:pt-50"
            key={index}
          >
            {(find = true)}
            <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
              <div className="flex flex-col-reverse gap-7.5 lg:flex-row xl:gap-12.5">
                <div className="md:w-1/2 lg:w-[32%]">
                <Search NODE_ENV={process.env.NODE_ENV} />

                  <div className="animate_top mb-10 rounded-md border border-stroke bg-white p-9 shadow-solid-13 dark:border-strokedark dark:bg-blacksection">
                    <h4 className="mb-7.5 text-2xl font-semibold text-black dark:text-white">
                      Categories
                    </h4>

                    <ul>
                      {categories.map((category, index) => (
                        <li
                          key={index}
                          className="mb-3 transition-all duration-300 last:mb-0 hover:text-primary"
                        >
                          <Link href={`/blog/category/${category}`}>{category}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  {blogs.map((relatedBlog, index) => {
                    if (
                      blog.category == relatedBlog.category &&
                      blog.title != relatedBlog.title
                    ) {
                      relatedBlogs.push(relatedBlog);
                    }
                    if (index == blogs.length - 1) {
                      return <RelatedPost blogs={relatedBlogs} />;
                    }
                  })}
                </div>

                <div className="lg:w-2/3">
                  <div className="animate_top rounded-md border border-stroke bg-white p-7.5 shadow-solid-13 dark:border-strokedark dark:bg-blacksection md:p-10">
                    <div className="mb-10 w-full overflow-hidden ">
                      <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                        <Image
                          src={mainImage}
                          alt=""
                          fill
                          className="rounded-md object-cover object-center"
                        />
                      </div>
                    </div>

                    <h2 className="mb-5 mt-11 text-3xl font-semibold text-black dark:text-white 2xl:text-sectiontitle2">
                      {props.title ? props.title : "ERROR"}
                    </h2>

                    <ul className="mb-9 flex flex-wrap gap-5 2xl:gap-7.5">
                      <li>
                        <span className="text-black dark:text-white">
                          Author:{" "}
                        </span>{" "}
                        {blog.author ? blog.author : "N/A"}
                      </li>
                      <li>
                        <span className="text-black dark:text-white">
                          Published On: {blog.date_pub ? formattedDate : "N/A"}
                        </span>{" "}
                      </li>
                      <li>
                        <Link
                          href={`../blog/category/${blog.category || "N/A"}`}
                        >
                          <span className="text-black dark:text-white">
                            Category: {blog.category ? blog.category : "N/A"}
                          </span>
                        </Link>
                      </li>
                    </ul>

                    <div className="blog-details">
                      <BlockContent
                        blocks={blog.content} // Assuming 'content' field contains Portable Text
                        projectId="qhzy9ruh"
                        dataset="production"
                      />
                    </div>

                    <SharePost tags={tags} />
                  </div>
                </div>
              </div>
            </div>
          </section>
        ) : (
          ""
        );
      })}
    </>
  );
};

export default SingleBlogPage;
