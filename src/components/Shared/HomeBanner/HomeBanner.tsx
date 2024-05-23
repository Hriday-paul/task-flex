import Image from "next/image";
import wave from '@/images/BG Wave.svg'
import { FcGoogle } from "react-icons/fc";
import { FaApple, FaFacebookSquare } from "react-icons/fa";
import Link from "next/link";
import logo from '@/images/Logo-white.png'


const HomeBanner = () => {
    return (
        <div className="home-banner">
            <div className="bg-[#F7F8F9]">
                <div className="grid grid-cols-1 lg:grid-cols-2 max-w-6xl mx-auto items-center gap-y-10 lg:gap-x-5 lg:gap-y-0 mt-16 px-5 pt-10">
                    <div className="md:p-10 lg:p-8 xl:p-3" data-aos="fade-up" data-aos-duration='1500'>
                        <h2 className="text-4xl md:text-5xl xl:text-6xl text-gray-800 font-semibold font-popins">A small business is only as good as its tools.</h2>
                        <p className="text-gray-700 text-lg font-popins my-5">Lorem ipsum dolor sit amet, consectetur adipisng.</p>

                        <ul className="mt-8 space-y-3 font-medium">

                            <li className="flex items-start lg:col-span-1">
                                <div className="flex-shrink-0">
                                    <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clipRule="evenodd"></path>
                                    </svg>
                                </div>
                                <p className="ml-3 leading-5 text-base font-popins text-[#556987] ">
                                    Mauris pellentesque congue libero nec
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
                                <p className="ml-3 leading-5 text-base font-popins text-[#556987] ">
                                    Suspendisse mollis tincidunt
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
                                <p className="ml-3 leading-5 text-base font-popins text-[#556987] ">
                                    Praesent varius justo vel justo pulvinar
                                </p>
                            </li>
                        </ul>

                    </div>

                    <div data-aos="zoom-in-left" data-aos-duration='1500'>
                        <div className="bg-white p-10 rounded-lg md:mr-auto mt-10 md:mt-0 relative z-10 w-full md:w-4/5 mx-auto">
                            <h2 className="text-gray-900 font-popins text-center text-2xl mb-1 font-bold title-font">Join our community</h2>
                            <p className="leading-relaxed text-base font-medium font-popins text-center mb-5 text-gray-600 mt-3">Start your free trail</p>
                            <form className="flex flex-col justify-center w-4/5 mx-auto">
                                <label htmlFor="email" className="text-base text-gray-800 font-popins font-semibold mb-1">Email</label>
                                <input className="bg-white rounded border border-gray-400 focus:outline-none focus:border-green-500-500 text-base px-4 py-2 mb-4" placeholder="Enter your email address" type="email" />

                                <button className="text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-grenn-600 rounded text-lg">Button</button>
                            </form>
                            <div className='flex justify-center items-center my-1'>
                                <div className="flex flex-row flex-nowrap justify-center mx-auto items-center">
                                    <span className="flex-grow block border-t border-gray-300 w-14"></span>
                                    <h2 className="flex-none block mx-2 px-2 py-2.5 text-sm leading-none uppercase text-gray-500 font-medium">
                                        Or
                                    </h2>
                                    <span className="flex-grow block border-t border-gray-300 w-14" aria-hidden="true" role="presentation"></span>
                                </div>
                            </div>
                            <div className="w-4/5 mx-auto space-y-3">
                                <button
                                    className="inline-flex h-10 w-full items-center justify-center gap-2 rounded border border-slate-300 bg-white p-2 text-sm font-medium text-black outline-none disabled:cursor-not-allowed disabled:opacity-60">
                                    <FcGoogle className="text-xl" />
                                    Sign in with Google
                                </button>
                                <button
                                    className="inline-flex h-10 w-full items-center justify-center gap-2 rounded border border-slate-300 bg-white p-2 text-sm font-medium text-black outline-none  disabled:cursor-not-allowed disabled:opacity-60">
                                    <FaFacebookSquare className="text-xl text-blue-500" />
                                    Sign in with Facebook
                                </button>
                                <button
                                    className="inline-flex h-10 w-full items-center justify-center gap-2 rounded border border-slate-300 bg-white p-2 text-sm font-medium text-black outline-none disabled:cursor-not-allowed disabled:opacity-60">
                                    <FaApple className="text-xl" />
                                    Sign in with Apple
                                </button>
                            </div>
                            <p className="text-sm text-gray-500 mt-3 text-center font-popins">Already have an account? <Link href='/' className="text-green-500 font-medium">Sign In</Link></p>
                            {/* <div className="absolute top-0 left-1/2 mx-auto bg-green-500 rounded-lg p-2 -mt-5">
                                <Image src={logo} className="w-8 h-auto bg-cover" height={50} width={50} alt="wave svg"></Image>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
            <Image src={wave} className="w-full h-auto bg-cover" height={200} width={200} alt="wave svg"></Image>
        </div>
    );
};

export default HomeBanner;