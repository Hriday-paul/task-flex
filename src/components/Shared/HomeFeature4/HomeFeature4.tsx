import PriceCard from "@/components/ui/PriceCard";
import downwave from '@/images/footer-top-Wave .svg'
import Image from "next/image";

const HomeFeature4 = () => {
    return (
        <div className="bg-white">
            <div className="max-w-6xl mx-auto px-5 py-28">
                <div data-aos="fade-right" data-aos-duration='1500'>
                    <span className="bg-green-300 bg-opacity-30 rounded-full px-2 py-1 text-green-500 text-xs font-popins font-medium text-center">PRICING</span>
                    <h2 className="text-gray-800 text-4xl md:text-4xl lg:text-5xl my-4 font-bold font-popins">Flexible pricing plan for your startup</h2>
                    <h5 className="text-gray-700 font-medium font-popins text-base">Pricing that scales with your business immediately.</h5>
                </div>
                {/* pricing cards */}
                <div>
                    <div id="pricing" className="grid grid-cols-1 gap-5 mt-4 leading-7 text-gray-900 sm:mt-6 md:mt-8 gap-x-0 md:gap-x-5 lg:gap-x-10 md:grid-cols-2 lg:grid-cols-3">
                        <PriceCard duration={10}/>
                        <PriceCard duration={99}/>
                        <PriceCard duration={799}/>
                    </div>
                </div>
            </div>
            <Image src={downwave} className="w-full h-auto" alt="image" />
        </div>
    );
};

export default HomeFeature4;