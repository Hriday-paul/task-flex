import { ReactNode } from "react";


const Feature3section = ({ children, head, child }: { children: ReactNode, head: string, child: string }) => {
    return (
        <div className="w-full md:w-1/3 p-5 md:p-3 lg:p-10">
            {children}
            <h3 className="text-center text-base font-popins font-bold my-3 text-[#2A3342]">{head}</h3>
            <p className="text-sm text-center font-popins font-medium text-[#556987]">{child}</p>
        </div>
    );
};

export default Feature3section;