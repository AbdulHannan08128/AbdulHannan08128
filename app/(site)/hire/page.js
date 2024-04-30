import React from 'react';
import SectionHeader from '@/components/Common/SectionHeader';
import Tile from './Tile'
export const metadata = {
  title: 'Hire Abdul Hannan - Full Stack Web Developer'
}
const Page = () => {

  return (
    <div className=' mt-28'>
    <SectionHeader
    headerInfo={{
      title: `Hire Me`,
      subtitle: `Get Started`,
      description: ``,
    }}
  />
    <div className="gap-4 p-12 flex flex-wrap justify-center align-middle ">
     
      <Tile href={'https://www.upwork.com/freelancers/~017281d9f43346f4cd?mp_source=share'} img={'/logo-upwork.png'} />
      <Tile href={'https://www.fiverr.com/ab_hannan_web'} img={'/logo-fiverr.png'} />
      <Tile href={'https://www.freelancer.in/u/AbdulHannan08128'} img={'/logo-freelancer.jpeg'} />
      <Tile href={'https://www.linkedin.com/in/abdul-hannan-b44ab02a8'} img={'/linkedin-logo.png'} />
      <Tile href={'https://github.com/AbdulHannan08128'} img={'/github-logo.png'} />
      <Tile href={'/support'} img={'/email-logo.jpeg'} />
    </div>
    </div>
  );
};

export default Page;
