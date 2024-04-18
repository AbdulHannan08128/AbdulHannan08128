
import Pricing from '../../../components/Pricing/index';
export const metadata = {
    title: "Abdul Hannan's Pricing - Affordable Web Development Services",
    description: "Explore Abdul Hannan's pricing page for affordable web development services. Choose from a range of packages tailored to your needs.",
    keywords: "Abdul Hannan, Pricing, Web Development, Services, Packages, Affordable",
    author: "Abdul Hannan",
    // Add Open Graph metadata
    openGraph: {
      title: "Abdul Hannan's Pricing - Affordable Web Development Services",
      description: "Explore Abdul Hannan's pricing page for affordable web development services. Choose from a range of packages tailored to your needs.",
      type: "website",
      url: "https://abdul-hannan.vercel.app/pricing",
      images: [
        {
          url: "/profile.png",
          width: 1200,
          height: 630,
          alt: "Abdul Hannan's Pricing - Affordable Web Development Services"
        }
      ]
    },
  };
  
export default function PRICING(){
    return(
        <>
        <div className='mt-20'></div>
        <Pricing/>
        </>
    )
}