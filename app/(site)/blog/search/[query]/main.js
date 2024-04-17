'use client'
import React, { useState, useEffect } from "react";
import SectionHeader from "@/components/Common/SectionHeader";
import BlogItem from "@/components/Blog/BlogItem";
import Search from "../../Search";

export const dynamic = "force-dynamic";

const BlogPage = ({ params, blogsData , NODE_ENV}) => {
  const [searchValue, setSearchValue] = useState("");
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // Fetch data when the component mounts
    const fetchData = async () => {
      try {
        console.log(blogsData);
        setBlogs(blogsData);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array to ensure this effect runs only once

  useEffect(() => {
    // Capitalize the search value when params.query changes
    const search = params.query
      .replaceAll("%20", " ")
      .replace(/\b\w/g, (c) => c.toUpperCase());
    setSearchValue(search);
  }, [params.query]);

  const filteredBlogs = blogs.filter(
    (blog) =>
      blog.meta_desc.toLowerCase().includes(searchValue.toLowerCase()) ||
      blog.title.toLowerCase().includes(searchValue.toLowerCase()) ||
      blog.category.toLowerCase().includes(searchValue.toLowerCase()) ||
      blog.keywords.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <>
      <section className="py-20 lg:py-25 xl:py-30">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          <div className="animate_top mx-auto text-center">
            <SectionHeader
              headerInfo={{
                title: `Blogs`,
                subtitle: `Results For Search: ${searchValue}`,
                description: ``,
              }}
            />
          </div>
          <Search NODE_ENV={NODE_ENV} value={searchValue} />
        </div>
        <div className="mx-auto mt-15 max-w-c-1280 px-4 md:px-8 xl:mt-20 xl:px-0">
          <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
            {filteredBlogs.map((post, key) => (
              <BlogItem key={key} blog={post} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPage;
