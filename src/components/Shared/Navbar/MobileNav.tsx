'use client'
import Link from "next/link";
import { useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";

const MobileNav = () => {
    const [open, setOpen] = useState<boolean>(false);
    return (
        <div className="">
            {!open && <RiMenu3Fill onClick={() => setOpen(true)} className="text-gray-900 text-2xl md:text-3xl md:hidden ml-3"></RiMenu3Fill>}
            {
                open && <RxCross2 onClick={() => setOpen(false)} className="text-gray-900 text-2xl md:text-3xl md:hidden ml-3" />
            }

            <div className={`md:hidden absolute top-14 md:top-[62px] left-0 w-full bg-slate-50 px-8 pt-5 h-[calc(100vh-56px)] md:h-[calc(100vh-62px)] ${open ? "translate-x-0" : "-translate-x-[900px]"} duration-300 overflow-auto`}>
                <ul className="flex flex-col gap-6 l">
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

                <div className="flex flex-col gap-y-6 mt-6">
                    <a href="#" className="text-gray-800 text-base font-semibold hover:text-green-600 duration-200 mr-4">Sign in</a>
                    <a href="#" className="text-white bg-green-500 text-sm font-semibold border px-4 py-2 rounded-lg duration-200 hover:bg-green-600 hover:border-green-600">Sign up</a>
                </div>

            </div>
        </div>
    );
};

export default MobileNav;