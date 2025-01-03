
import { client } from '@/utils/configSanity';
import React from 'react';
import SectionHeader from "@/components/Common/SectionHeader";
import BlogItem from "@/components/Blog/BlogItem";
import Search from './Search'

export const metadata = {
  title: "Abdul Hannan's Blog - Insights on Web Development",
  description: "Explore Abdul Hannan's blog for insightful articles on web development, frontend and backend technologies, best practices, tutorials, and more.",
  keywords: "Abdul Hannan, Blog, Web Development, Frontend, Backend, Tutorials, Insights, Best Practices",
  author: "Abdul Hannan",
  // Add Open Graph metadata
  openGraph: {
    title: "Abdul Hannan's Blog - Insights on Web Development",
    description: "Explore Abdul Hannan's blog for insightful articles on web development, frontend and backend technologies, best practices, tutorials, and more.",
    type: "website",
    url: "https://abdul-hannan.vercel.app/blog",
    images: [
      {
        url: "/profile.png",
        width: 1200,
        height: 630,
        alt: "Abdul Hannan's Blog - Insights on Web Development"
      }
    ]
  },
};

export const dynamic = 'force-dynamic'
async function getData() {
  const query = "*[_type == 'blog'] | order(date_pub desc)";
  const data = await client.fetch(query);
  return data;
}



const BlogPage = async () => {
  const blogs = await getData();
   console.log(blogs); 
  return (
    <>
      {/* <!-- ===== Blog Grid Start ===== --> */}
      <section className="py-20 lg:py-25 xl:py-30">
      <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          {/* <!-- Section Title Start --> */}
          <div className="animate_top mx-auto text-center">
            
            <SectionHeader
              headerInfo={{
                title: `Blogs`,
                subtitle: `My Latest Blog Posts`,
                description: ``,
              }}
            />
          </div>
        
         <Search NODE_ENV={process.env.NODE_ENV}/>
                 
          </div>
        <div className="mx-auto mt-15 max-w-c-1280 px-4 md:px-8 xl:mt-20 xl:px-0">
          <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
            {blogs.map((post, key) => (
              <BlogItem key={key} blog={post} />
            ))}
          </div>
        </div>
      </section>
      {/* <!-- ===== Blog Grid End ===== --> */}
    </>
  );
};

export default BlogPage;
