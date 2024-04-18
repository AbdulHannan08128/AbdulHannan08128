import React from 'react'
import PORTFOLIO from './PORTFOLIO/index'
export const metadata = {
  title: "Abdul Hannan's Portfolio - Showcase of Web Development Projects",
  description: "Explore Abdul Hannan's portfolio to see a collection of his web development projects. Discover his work in frontend and backend technologies, including websites, web applications, and more.",
  keywords: "Abdul Hannan, Portfolio, Web Development, Projects, Frontend, Backend, Websites, Web Applications",
  author: "Abdul Hannan",
  // Add Open Graph metadata
  openGraph: {
    title: "Abdul Hannan's Portfolio - Showcase of Web Development Projects",
    description: "Explore Abdul Hannan's portfolio to see a collection of his web development projects. Discover his work in frontend and backend technologies, including websites, web applications, and more.",
    type: "website",
    url: "https://abdul-hannan.vercel.app/portfolio",
    images: [
      {
        url: "/profile.png",
        width: 1200,
        height: 630,
        alt: "Abdul Hannan's Portfolio - Showcase of Web Development Projects"
      }
    ]
  },
};

const page = () => {
  return (
    <>
    <PORTFOLIO/>
    </>
  )
}

export default page