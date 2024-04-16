"use client";
import React from "react";
import Image from 'next/image'
import SectionHeader from "../../../../components/Common/SectionHeader";
import { motion } from "framer-motion";
const Feature = () => {
  return (
    <>
      {/* <!-- ===== Features Start ===== --> */}
      <section id="features" className="py-20 lg:py-25 xl:py-30">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          {/* <!-- Section Title Start --> */}
          <SectionHeader
            headerInfo={{
              title: "PORTFOLIO",
              subtitle: "My Recent Projects",
              description: ``,
            }}
          />
          {/* <!-- Section Title End --> */}

          <div className="mt-12.5 ">
          <motion.div
        variants={{
          hidden: {
            opacity: 0, 
            y: -20,
          },

          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1, delay: 0.1 }}
        viewport={{ once: true }}
        className="animate_top mx-auto text-center grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:mt-15 lg:grid-cols-3 xl:mt-20 xl:gap-12.5"
      >
            <Image src={'/PORTFOLIO/P1.png'} alt='P1' width={800} height={400} className=" w-96 h-48 border-blue-600 border-4 cursor-pointer"/>
            <Image src={'/PORTFOLIO/P2.png'} alt='P1' width={800} height={400} className=" w-96 h-48 border-blue-600 border-4 cursor-pointer"/>
            <Image src={'/PORTFOLIO/P3.png'} alt='P1' width={800} height={400} className=" w-96 h-48 border-blue-600 border-4 cursor-pointer"/>
            <Image src={'/PORTFOLIO/P4.png'} alt='P1' width={800} height={400} className=" w-96 h-48 border-blue-600 border-4 cursor-pointer"/>
       </motion.div>
            
           
          </div>
        </div>
      </section>

      {/* <!-- ===== Features End ===== --> */}
    </>
  );
};

export default Feature;
