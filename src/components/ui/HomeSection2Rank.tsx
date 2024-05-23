

const HomeSection2Rank = ({head, child} : {head : string, child : string}) => {
    return (
        <div className="mx-auto text-center w-full md:w-1/2 lg:w-1/4">
            <h2 className="text-4xl md:text-4xl lg:ext-5xl text-center text-[#2A3342] font-extrabold font-popins">{head}</h2>
            <p className="text-sm text-slate-700 text-center font-popins font-medium">{child}</p>
        </div>
    );
};

export default HomeSection2Rank;