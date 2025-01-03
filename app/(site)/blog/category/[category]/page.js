
import { client } from '@/utils/configSanity';
import React from 'react';
import SectionHeader from "@/components/Common/SectionHeader";
import BlogItem from "./BlogItem";


export const metadata = {
  title: "Abdul Hannan- Full Stack Web Developer",
  description: "Abdul Hannan- Full Stack Web Developer",
  // other metadata
};
export const dynamic = 'force-dynamic'
async function getData(category) {
    //get only that data with this desc format which has property category to params category
  const query = `*[_type == 'blog' && category == '${category}'] | order(date_pub desc)`;
  const data = await client.fetch(query);
  return data;
}



const BlogPage = async ({params}) => {
  const blogs = await getData(params.category);
  
 
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
                subtitle: `Results For Category: ${params.category}`,
                description: ``,
              }}
            />
          </div>
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
