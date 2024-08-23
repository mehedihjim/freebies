import { IoPerson } from "react-icons/io5";
import CountUp from 'react-countup';

const About = () => {
  return (
    <section id='About'>
      <div className="container flex flex-col lg:flex-row lg:justify-between max-w-conWidth mx-auto py-[38px] px-4 rounded-[10px] shadow-4xl">
        <div className="w-full lg:w-1/3 flex justify-center items-center gap-6 border-b-2 lg:border-b-0 lg:border-r-2 border-gray-300 h-[125px] mb-4 lg:mb-0">
          <div className="flex-shrink-0 bg-[#FFECEC] p-4 rounded-full">
            <IoPerson className="text-2xl text-primary" />
          </div>
          <div>
            <h5 className="font-bold text-secondary text-[20px] lg:text-[25px] leading-[24px] lg:leading-[30px]"><CountUp end={90} />+</h5>
            <p className="font-normal text-other text-[16px] lg:text-[20px] leading-[24px] lg:leading-[30px]">Users</p>
          </div>
        </div>
        <div className="w-full lg:w-1/3 flex justify-center items-center gap-6 border-b-2 lg:border-b-0 lg:border-r-2 border-gray-300 h-[125px] mb-4 lg:mb-0">
          <div className="flex-shrink-0 bg-[#FFECEC] p-4 rounded-full">
            <IoPerson className="text-2xl text-primary" />
          </div>
          <div>
            <h5 className="font-bold text-secondary text-[20px] lg:text-[25px] leading-[24px] lg:leading-[30px]"><CountUp end={90} />+</h5>
            <p className="font-normal text-other text-[16px] lg:text-[20px] leading-[24px] lg:leading-[30px]">Users</p>
          </div>
        </div>
        <div className="w-full lg:w-1/3 flex justify-center items-center gap-6 h-[125px]">
          <div className="flex-shrink-0 bg-[#FFECEC] p-4 rounded-full">
            <IoPerson className="text-2xl text-primary" />
          </div>
          <div>
            <h5 className="font-bold text-secondary text-[20px] lg:text-[25px] leading-[24px] lg:leading-[30px]"><CountUp end={90} />+</h5>
            <p className="font-normal text-other text-[16px] lg:text-[20px] leading-[24px] lg:leading-[30px]">Users</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
