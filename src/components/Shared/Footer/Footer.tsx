import Image from "next/image";
import Link from "next/link";
import logo from '@/images/Logo.png'


const Footer = () => {
    return (
        <footer>
            <div className=" bg-[#F7F8F9] py-10 lg:py-32 relative">
                {/* footer content*/}
                <div className="w-full lg:absolute top-0 left-0 z-20 lg:pt-20">
                    <div className="max-w-6xl mx-auto px-5">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10 lg:gap-y-0">
                            <div className="lg:p-5">
                                <Link href='/'>
                                    <div className="flex items-center gap-x-2">
                                        <Image className="h-8 md:h-8 lg:h-10 w-10 md:w-10 lg:w-14" src={logo} height={50} width={50} alt="logo" />
                                        <h1 className="uppercase text-xl md:text-xl lg:text-2xl font-bold text-[#2A3342] font-unbounded">Flex</h1>
                                    </div>
                                </Link>
                                <p className="text-[#556987] text-sm font-popins font-medium mt-3">Launch your own Software As A Service Application with Flex Solutions.</p>
                                <div className="mt-5 hidden md:block lg:hidden">
                                    <div className="flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
                                        <input id="email" type="text" className="px-3 py-1.5 text-[#2A3342] bg-white border rounded-md focus:border-green-400 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-green-300 w-full md:w-2/3" placeholder="Email Address" />

                                        <button className="px-4 py-2 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto md:mx-1 focus:outline-none bg-green-500 rounded-lg hover:bg-green-600 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                                            Subscribe
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-row gap-x-28">
                                <div>
                                    <p className="font-semibold text-base font-popins text-[#2A3342]">Services</p>

                                    <ul className="mt-6 space-y-4 text-sm">
                                        <li>
                                            <Link href="/" className="text-[#556987] transition text-sm font-popins hover:opacity-75">Features</Link>
                                        </li>

                                        <li>
                                            <Link href="/" className="text-[#556987] transition text-sm font-popins hover:opacity-75">Solutions</Link>
                                        </li>

                                        <li>
                                            <Link href="/" className="text-[#556987] transition text-sm font-popins hover:opacity-75">Pricing</Link>
                                        </li>

                                        <li>
                                            <Link href="/" className="text-[#556987] transition text-sm font-popins hover:opacity-75">Tutorials</Link>
                                        </li>

                                        <li>
                                            <Link href="/" className="text-[#556987] transition text-sm font-popins hover:opacity-75">Updates</Link>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <p className="font-semibold text-base font-popins text-[#2A3342]">Remaining</p>

                                    <ul className="mt-6 space-y-4 text-sm">
                                        <li>
                                            <Link href="/" className="text-[#556987] transition text-sm font-popins hover:opacity-75">Blog</Link>
                                        </li>

                                        <li>
                                            <Link href="/" className="text-[#556987] transition text-sm font-popins hover:opacity-75">Newsletter</Link>
                                        </li>

                                        <li>
                                            <Link href="/" className="text-[#556987] transition text-sm font-popins hover:opacity-75">Help Centre</Link>
                                        </li>

                                        <li>
                                            <Link href="/" className="text-[#556987] transition text-sm font-popins hover:opacity-75">Careers</Link>
                                        </li>

                                        <li>
                                            <Link href="/" className="text-[#556987] transition text-sm font-popins hover:opacity-75">Support</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="md:hidden lg:block">
                                <div className="ml-auto">
                                    <p className="font-semibold text-base font-popins text-[#2A3342]">Newsletter</p>
                                    <div className="flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
                                        <input id="email" type="text" className="px-3 py-1.5 text-[#2A3342] bg-white border rounded-md focus:border-green-400 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-green-300 w-4/5" placeholder="Email Address" />

                                        <button className="w-full px-4 py-2 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto md:mx-1 focus:outline-none bg-green-500 rounded-lg hover:bg-green-600 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                                            Subscribe
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                {/* bg pattern */}
                <div className=" hidden lg:block">
                    <div className="!bg-[linear-gradient(#f2f2f2_1px,_transparent_1px),_linear-gradient(to_right,_#efefef_1px,_#F7F8F9_1px)] [background-size:22px_22px] z-10 opacity-gradient-image-footer h-10 rounded-full mx-auto">
                    </div>
                </div>


            </div>
            <div className="border-t border-gray-100 p-5 lg:p-8 bg-[#F7F8F9]">
                <h6 className="text-[#8896AB] font-popins text-xs font-medium text-center">© 2021 Flex. All rights reserved.</h6>
            </div>
        </footer>
    );
};

export default Footer;