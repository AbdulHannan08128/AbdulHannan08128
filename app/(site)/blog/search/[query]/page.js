import React from 'react'
import Main from './main'
import { client } from "@/utils/configSanity";
async function getData() {
    const query = "*[_type == 'blog'] | order(date_pub desc)";
    const data = await client.fetch(query);
    console.log(data);
    return data;
  }
const page = async ({params}) => {
    const data = await getData();

  return (
    <Main params={params} blogsData={data} NODE_ENV={process.env.NODE_ENV}/>
  )
}

export default page