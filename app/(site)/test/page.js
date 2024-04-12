
import { client } from '@/utils/configSanity';
import React from 'react';
import {urlForImage} from "@/utils/configSanity";

export const dynamic = 'force-dynamic'
async function getData() {
  
  const query = "*[_type == 'blog']";
  const data = await client.fetch(query);
  console.log();
  return data;
  
}

const Page = async () => {
  const blogs = await getData();

  return (
    <div className='m-40'>
      <div>
        {blogs.map(blog => (
          <div key={blog._id} className="border rounded-lg p-4 shadow-md mb-4">
            <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
            {blog.cover_image && blog.cover_image.asset && (
             
             <>
             <img src={urlForImage(blog.cover_image).width(400).height(200).url()}alt={blog.title}/>
             </>
            )}
            <p className="text-gray-600 mb-4">{new Date(blog.date_pub).toLocaleDateString()}</p>
            <ul className="list-disc list-inside">
              {blog.content.map((paragraph, index) => (
                <li key={index} className="mb-2">
                  {paragraph.text} 
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
