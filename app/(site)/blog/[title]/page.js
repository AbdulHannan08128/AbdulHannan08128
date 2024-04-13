import React from 'react'
import BlogDetails from '../blog-details/DETAILS'
export const dynamic = "force-dynamic";
const page = ({params}) => {
  return (
    <>
   
    <BlogDetails title={params.title.replaceAll('-', ' ')}/>
    </>
  )
}

export default page