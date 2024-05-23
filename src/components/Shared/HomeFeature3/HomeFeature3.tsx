import Image from "next/image";
import wave from '@/images/BG Wave -2.svg'
import sec3Image from '@/images/sec-3_image.jpg'
import downwave from '@/images/BG Wave.svg'
import { MdMailOutline } from "react-icons/md";
import Feature3section from "@/components/ui/Feature3section";
import { TfiStatsUp } from "react-icons/tfi";
import { TbUsers } from "react-icons/tb";

const HomeFeature3 = () => {
    return (
        <div>
            <Image src={wave} className="w-full h-auto bg-cover" height={200} width={200} alt="wave svg"></Image>
            <div className="bg-[#F7F8F9]">
                <div className="max-w-6xl mx-auto px-5 py-10">
                    <div className="text-center w-full lg:w-3/5 mx-auto" >
                        <div data-aos="fade-up" data-aos-duration='1500'>
                            <span className="bg-green-300 bg-opacity-30 rounded-full px-2 py-1 text-green-500 text-xs font-popins font-medium text-center">Features</span>
                            <h2 className="text-gray-800 text-4xl md:text-4xl lg:text-5xl my-4 font-bold font-popins">We believe in the power of data</h2>
                            <h5 className="text-gray-700 font-medium font-popins text-base">Flex is the only business platform that lets you run your business on one platform, seamlessly across all digital channels.</h5>
                        </div>
                        <div className="my-10 w-full lg:my-16 md:w-2/3 lg:w-full mx-auto">
                            <Image src={sec3Image} className="w-full h-auto" alt="image" />
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row justify-center flex-wrap gap-y-5 md:gap-y-0">
                        <Feature3section head="Measure your performance" child="Stay connected with your team and make quick decisions wherever you are">
                            <MdMailOutline className="text-white text-4xl bg-green-500 rounded-md p-2 mx-auto" />
                        </Feature3section>

                        <Feature3section head="Custom analytics" child="SGet a complete sales dashboard in the cloud. See activity, revenue and social metrics all in one place.">
                            <TfiStatsUp className="text-white text-4xl bg-green-500 rounded-md p-2 mx-auto" />
                        </Feature3section>

                        <Feature3section head="Team Management" child="Our calendar lets you know what is happening with customer and projects so you">
                            <TbUsers className="text-white text-4xl bg-green-500 rounded-md p-2 mx-auto" />
                        </Feature3section>

                    </div>
                </div>
            </div>
            <Image src={downwave} className="w-full h-auto" alt="image" />
        </div>
    );
};

export default HomeFeature3;