import HomeSection2Rank from "@/components/ui/HomeSection2Rank";


const HomeFeature2 = () => {
    return (
        <div className=" bg-white py-10 lg:py-40 relative">
            {/* bg content */}
            <div className="w-full lg:absolute top-0 left-0 z-20 pt-16">
                <div className="max-w-6xl mx-auto px-5">
                    <div className="text-center w-full lg:w-3/5 mx-auto" data-aos="fade-up" data-aos-duration='1500'>
                        <span className="bg-green-300 bg-opacity-30 rounded-full px-2 py-1 text-green-500 text-xs font-popins font-medium text-center">NUMBERS</span>
                        <h2 className="text-gray-800 text-4xl md:text-4xl lg:text-5xl my-4 font-bold font-popins">We believe in the power of data</h2>
                        <h5 className="text-gray-700 font-medium font-popins text-base">Flex is the only business platform that lets you run your business on one platform, seamlessly across all digital channels.</h5>
                    </div>
                    <div className="py-10 px-10 flex flex-col md:flex-row gap-y-10 lg:gap-y-0 flex-wrap justify-center items-center w-4/5 lg:w-full mx-auto mt-8 md:mt-10">
                        <HomeSection2Rank head="235.000" child="Projects completed" />
                        <HomeSection2Rank head="$10m" child="APR" />
                        <HomeSection2Rank head="+50.000" child="Hours Saved Annually" />
                        <HomeSection2Rank head="3.500" child="Unique Users" />
                    </div>
                </div>
            </div>
            {/* bg pattern */}
            <div className=" hidden lg:block">
                <div className="!bg-[linear-gradient(#f2f2f2_1px,_transparent_1px),_linear-gradient(to_right,_#efefef_1px,_#FFFFFF_1px)] [background-size:22px_22px] z-10 opacity-gradient-image h-10 rounded-full mx-auto">
                </div>
            </div>


        </div>
    );
};

export default HomeFeature2;

{/* <div className="!bg-[linear-gradient(#f2f2f2_1px,_transparent_1px),_linear-gradient(to_right,_#efefef_1px,_#FFFFFF_1px)] [background-size:22px_22px] z-10 opacity-gradient-image h-10 rounded-full mx-auto">
                </div> */}