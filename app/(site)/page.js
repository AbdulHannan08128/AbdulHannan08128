import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import Feature from "@/components/Features";
import About from "@/components/About";
import FeaturesTab from "@/components/FeaturesTab";
import FunFact from "@/components/FunFact";
import Integration from "@/components/Integration";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Blog from "@/components/Blog/BlogItem";
import Testimonial from "@/components/Testimonial";
import { client } from "@/utils/configSanity";
import SectionHeader from "@/components/Common/SectionHeader";
import Head from 'next/head'

export const dynamic = "force-dynamic";
async function getData() {
  const query = "*[_type == 'blog'] | order(date_pub desc)";
  const data = await client.fetch(query);
  console.log("data");
  console.log(data); //[]
  let blogs = [];
  if (data.length > 3) {
    blogs = [data[0], data[1], data[2]];
    //console.log(blogs); //[]
  } else {
    blogs = data;
    //console.log(blogs); //[]
  }

  return blogs;
}

export const metadata = {
  title: "Abdul Hannan - Full Stack Web Developer",
  description:
    "Abdul Hannan is a skilled Full Stack Web Developer with expertise in frontend and backend technologies. Learn more about his services and projects.",
  keywords:
    "Abdul Hannan, Full Stack Web Developer, Web Development, Frontend, Backend, Young Developer, ab. hannan, abdul hannan, AH, ah",
  author: "Abdul Hannan",
  // Add Open Graph metadata
  openGraph: {
    title: "Abdul Hannan - Full Stack Web Developer",
    description:
      "Abdul Hannan is a skilled Full Stack Web Developer with expertise in frontend and backend technologies. Learn more about his services and projects.",
    type: "profile",
    url: "https://abdul-hannan.vercel.app",
    profile: {
      firstName: "Abdul",
      lastName: "Hannan",
      username: "abdulhannan",
      gender: "male",
    },
    images: [
      {
        url: "/profile.png",
        width: 800,
        height: 600,
        alt: "Abdul Hannan - Full Stack Web Developer",
      },
    ],
  },
  // Add Twitter Card metadata
  // twitter: {
  //   card: "summary_large_image",
  //   site: "@yourtwitterhandle",
  //   creator: "@abdulhannan"
  // },
  // Add more metadata fields as needed
  // For example:
  // canonical: "https://www.example.com/abdul-hannan",
  // og:type: "profile",
};

export default async function Home() {
  const blogs = await getData();
  return (
   <>
   <Head>
   <meta name="google-site-verification" content="3GyNIKlfa7swMDuh7zQ_PrVJaKFiecl4N4EUSMpOFZc" />
   </Head>
    <main>

      <Hero />
      <Brands />
      <Feature />
      <About />
      <FeaturesTab />
      <FunFact />
      <Integration />
      <CTA />
      <FAQ />
      <Testimonial />
      <Pricing />
      <Contact NODE_ENV={process.env.NODE_ENV} />
      <div className="mx-auto mt-15 max-w-c-1280 px-4 md:px-8 xl:mt-20 xl:px-0">
      {blogs.length > 0 ? (
            <SectionHeader
              headerInfo={{
                title: `Blogs`,
                subtitle: `Some Of My Latest Blog Posts`,
                description: ``,
              }}
            />
          ) : (
            ""
          )}
        <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
         

          {blogs.map((post, key) => (
            <Blog key={key} blog={post} />
          ))}
        </div>
      </div>
    </main>
    </>
  );
}
