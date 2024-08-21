import bannerImg from "../assets/Banner.png"

const Hero = () => {
    return (
        <section>
            <div className="max-w-conWidth mx-auto flex flex-col-reverse lg:flex-row justify-between items-center pt-[60px] pb-[80px] lg:pt-[90px] lg:pb-[103px]">
                <div className="text-center lg:text-left lg:max-w-[555px]">
                    <h1 className="font-medium text-[32px] leading-[40px] lg:text-[50px] lg:leading-[70px] text-secondary mb-4 lg:mb-5">
                        Want anything to be easy with <span className="font-bold">LaslesVPN.</span>
                    </h1>
                    <p className="font-normal text-base leading-[25px] lg:leading-[30px] lg:mb-[50px] mb-6">
                        Provide a network for all your needs with ease and fun using <span className="font-medium">LaslesVPN</span> discover interesting features from us.
                    </p>
                    <button className="py-[12px] px-[40px] lg:py-[16px] lg:px-[77px] border border-primary text-primary text-base leading-[25px] font-bold rounded-lg hover:rounded-[10px] hover:bg-primary hover:text-white hover:shadow-2xl hover:shadow-primary duration-500">
                        Get Started
                    </button>
                </div>
                <div className="mb-6 lg:mb-0">
                    <img src={bannerImg} alt="Banner" className="max-w-full lg:mr-[-67px]" />
                </div>
            </div>
        </section>
    )
}

export default Hero
