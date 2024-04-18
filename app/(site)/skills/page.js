import React from 'react'
import Skills from './Features/index'
export const metadata = {
  title: "Abdul Hannan's Skills - Full Stack Web Developer",
  description: "Explore Abdul Hannan's skills page to discover his expertise in frontend and backend web development technologies. Learn about his proficiency in JavaScript, React, Node.js, and more.",
  keywords: "Abdul Hannan, Skills, Web Development, Frontend, Backend, JavaScript, React, Node.js",
  author: "Abdul Hannan",
  // Add Open Graph metadata
  openGraph: {
    title: "Abdul Hannan's Skills - Full Stack Web Developer",
    description: "Explore Abdul Hannan's skills page to discover his expertise in frontend and backend web development technologies. Learn about his proficiency in JavaScript, React, Node.js, and more.",
    type: "website",
    url: "https://abdul-hannan.vercel.app/skills",
    images: [
      {
        url: "/profile.png",
        width: 1200,
        height: 630,
        alt: "Abdul Hannan's Skills - Full Stack Web Developer"
      }
    ]
  },
};

const page = () => {
  return (
    <>
    <Skills/>
    </>
  )
}

export default page