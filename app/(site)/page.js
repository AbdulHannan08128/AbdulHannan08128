
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import Feature from '@/components/Features'
import About from "@/components/About";
import FeaturesTab from "@/components/FeaturesTab";
import FunFact from "@/components/FunFact";
import Integration from "@/components/Integration";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Blog from "@/components/Blog";
import Testimonial from "@/components/Testimonial";

export const metadata = {
  title: "Abdul Hannan - Full Stack Web Developer",
  description: "Abdul Hannan is a skilled Full Stack Web Developer with expertise in frontend and backend technologies. Learn more about his services and projects.",
  keywords: "Abdul Hannan, Full Stack Web Developer, Web Development, Frontend, Backend, Young Developer, ab. hannan, abdul hannan, AH, ah",
  author: "Abdul Hannan",
  // Add Open Graph metadata
  openGraph: {
    title: "Abdul Hannan - Full Stack Web Developer",
    description: "Abdul Hannan is a skilled Full Stack Web Developer with expertise in frontend and backend technologies. Learn more about his services and projects.",
    type: "profile",
    url: "https://abdul-hannan.vercel.app",
     profile: {
       firstName: "Abdul",
       lastName: "Hannan",
       username: "abdulhannan",
       gender: "male"
     },
    images: [
      {
        url: "/profile.png",
        width: 800,
        height: 600,
        alt: "Abdul Hannan - Full Stack Web Developer"
      }
    ]
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

export default function Home() {
  return (
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
      <Contact />
      {/* <Blog /> */}
    </main>
  );
}
