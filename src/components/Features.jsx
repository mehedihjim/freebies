import React from 'react';
import FeaturesImg from '../assets/Features.png';
import { FaCircleCheck } from "react-icons/fa6";

const Features = () => {
    return (
        <section id="features" className='pt-[86px] pb-[126px]'>
            <div className="container max-w-conWidth mx-auto flex flex-col lg:flex-row justify-between items-center lg:items-start">
                <img src={FeaturesImg} alt="Features" className='w-full max-w-md mb-8 lg:mb-0' />
                <div className="flex flex-col justify-end text-center lg:text-left lg:ml-8">
                    <h3 className='font-medium text-[28px] lg:text-[35px] leading-[40px] lg:leading-[50px] text-secondary w-full lg:w-[384px] mb-5'>
                        We Provide Many Features You Can Use
                    </h3>
                    <p className='font-normal text-base leading-[28px] lg:leading-[30px] text-other w-full lg:w-[428px] mb-5'>
                        You can explore the features that we provide with fun and have their own functions each feature.
                    </p>
                    <ul className='flex flex-col gap-[15px]'>
                        <li className='flex gap-[10px] text-sm leading-[30px] text-other justify-center lg:justify-start'>
                            <FaCircleCheck className='text-xl text-[#2FAB73] my-auto' />Powerful online protection.
                        </li>
                        <li className='flex gap-[10px] text-sm leading-[30px] text-other justify-center lg:justify-start'>
                            <FaCircleCheck className='text-xl text-[#2FAB73] my-auto' />Internet without borders.
                        </li>
                        <li className='flex gap-[10px] text-sm leading-[30px] text-other justify-center lg:justify-start'>
                            <FaCircleCheck className='text-xl text-[#2FAB73] my-auto' />Supercharged VPN.
                        </li>
                        <li className='flex gap-[10px] text-sm leading-[30px] text-other justify-center lg:justify-start'>
                            <FaCircleCheck className='text-xl text-[#2FAB73] my-auto' />No specific time limits.
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Features;
