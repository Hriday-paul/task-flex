
const PriceCard = ({duration}:{duration : number}) => {
    return (
        <div>
            <div className="relative z-10 flex flex-col items-center max-w-md p-4 mx-auto my-0 rounded-lg  md:p-8 bg-[#F7F8F9]">
                <span className="bg-green-300 bg-opacity-30 rounded-full px-2 py-1 text-green-500 text-xs font-popins font-medium text-center">PRICING</span>
                <h3
                    className="m-0 text-base font-semibold leading-tight tracking-tight text-green-500 border-0 my-5">
                    Basic Plan
                </h3>
                <div className="flex items-end leading-7 text-[#2A3342] my-5">
                    <p className="box-border m-0 text-5xl font-medium leading-none border-solid font-popins">
                        <sup>$</sup>{duration}
                    </p>
                    <p className="box-border m-0 border-solid text-lg font-popins font-medium">
                        / month
                    </p>
                </div>
                <h6 className="text-sm text-center font-popins font-medium text-[#8896AB]">Billed annually</h6>
                <ul className="mt-8 space-y-3 font-medium mx-auto">

                    <li className="flex items-start lg:col-span-1">
                        <div className="flex-shrink-0">
                            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clipRule="evenodd"></path>
                            </svg>
                        </div>
                        <p className="ml-3 leading-5 text-xs font-medium font-popins text-[#556987] ">
                            Complete documentation
                        </p>
                    </li>
                    <li className="flex items-start lg:col-span-1">
                        <div className="flex-shrink-0">
                            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clipRule="evenodd"></path>
                            </svg>
                        </div>
                        <p className="ml-3 leading-5 text-xs font-medium font-popins text-[#556987] ">
                            Working materials in Figma
                        </p>
                    </li>
                    <li className="flex items-start lg:col-span-1">
                        <div className="flex-shrink-0">
                            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clipRule="evenodd"></path>
                            </svg>
                        </div>
                        <p className="ml-3 leading-5 text-xs font-medium font-popins text-[#556987] ">
                            100GB cloud storage
                        </p>
                    </li>
                    <li className="flex items-start lg:col-span-1">
                        <div className="flex-shrink-0">
                            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clipRule="evenodd"></path>
                            </svg>
                        </div>
                        <p className="ml-3 leading-5 text-xs font-medium font-popins text-[#556987] ">
                            500 team members
                        </p>
                    </li>
                </ul>
                <button
                    className="inline-flex justify-center w-full px-4 py-2 mt-8 font-sans text-sm leading-none text-center text-white no-underline rounded-md cursor-pointer bg-green-500 hover:bg-green-600 duration-100 sm:text-base md:text-lg">
                    Start Now
                </button>
            </div>
        </div>
    );
};

export default PriceCard;