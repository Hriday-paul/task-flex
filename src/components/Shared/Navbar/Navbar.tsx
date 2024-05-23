import Image from "next/image";
import Link from "next/link"
import logo from '@/images/Logo.png'
import MobileNav from "./MobileNav";




const Navbar = () => {
    return (
        <div className={`z-30 fixed top-0 left-0 w-full bg-white`}>
            <div className="container mx-auto px-4">

                <div className="flex items-center justify-between py-3">
                    <Link href='/' className="flex items-center gap-x-2">
                        <Image className="h-8 md:h-8 lg:h-10 w-10 md:w-10 lg:w-14" src={logo} height={50} width={50} alt="logo" />
                        <h1 className="uppercase text-xl md:text-xl lg:text-2xl font-bold text-[#2A3342] font-unbounded">Flex</h1>
                    </Link>
                    <div className="hidden md:block">
                        <ul className="flex gap-x-6 xl:gap-x-9">
                            <li className='text-base text-gray-700 font-medium font-unbounded relative group'>
                                <Link href='/'>Products</Link>
                                <span className='absolute left-0 -bottom-1 h-0.5 w-0 group-hover:w-full bg-[#00C4CC] duration-200'></span>
                            </li>
                            <li className='text-base text-gray-700 font-medium font-unbounded relative group'>
                                <Link href='/'>Features</Link>
                                <span className='absolute left-0 -bottom-1 h-0.5 w-0 group-hover:w-full bg-[#00C4CC] duration-200'></span>
                            </li>
                            <li className='text-base text-gray-700 font-medium  relative group'>
                                <Link href='/'>Pricing</Link>
                                <span className='absolute left-0 -bottom-1 h-0.5 w-0 group-hover:w-full bg-[#00C4CC] duration-200'></span>
                            </li>
                            <li className='text-base text-gray-700 font-medium font-unbounded relative group'>
                                <Link href='/'>Resources</Link>
                                <span className='absolute left-0 -bottom-1 h-0.5 w-0 group-hover:w-full bg-[#00C4CC] duration-200'></span>
                            </li>

                        </ul>
                    </div>

                    <div className="flex flex-row items-center">
                        <div className="hidden sm:flex sm:items-center">
                            <a href="#" className="text-gray-800 text-sm font-semibold hover:text-green-600 duration-200 mr-4">Sign in</a>
                            <a href="#" className="text-white bg-green-500 text-sm font-semibold border px-4 py-2 rounded-lg duration-200 hover:bg-green-600 hover:border-green-600">Sign up</a>
                        </div>
                        <MobileNav />
                    </div>

                    
                </div>
            </div>

        </div>

    );
};

export default Navbar;