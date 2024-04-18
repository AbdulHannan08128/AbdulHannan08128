import React from "react";
import Contact from "@/components/Contact";


export const metadata = {
  title: "Contact Abdul Hannan - Get in Touch for Web Development Services",
  description: "Contact Abdul Hannan to discuss your web development needs. Reach out for inquiries, collaborations, or to hire him for your projects.",
  keywords: "Abdul Hannan, Contact, Web Development, Services, Inquiries, Collaboration, Hire",
  author: "Abdul Hannan",
  // Add Open Graph metadata
  openGraph: {
    title: "Contact Abdul Hannan - Get in Touch for Web Development Services",
    description: "Contact Abdul Hannan to discuss your web development needs. Reach out for inquiries, collaborations, or to hire him for your projects.",
    type: "website",
    url: "https://abdul-hannan.vercel.app/contact",
    images: [
      {
        url: "/profile.png",
        width: 1200,
        height: 630,
        alt: "Contact Abdul Hannan - Get in Touch for Web Development Services"
      }
    ]
  },
};


const SupportPage = () => {
  return (
    <div className="pb-20 pt-40">
      <Contact />
    </div>
  );
};

export default SupportPage;
