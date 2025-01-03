import { Link } from "react-router-dom";


const WantToBuy = () => {
    return (
        <div>
            <h1 className="text-center font-bold text-2xl underline ">This is Want To Buy</h1>            
            <div className="flex justify-center">
            <div  className="relative  inline-flex items-center justify-center px-10 py-4 overflow-hidden font-mono font-medium tracking-tighter text-white bg-gray-900  rounded-lg group">
                <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#8C593C] rounded-full group-hover:w-56 group-hover:h-56"></span>
                <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
                <Link className="relative ">Let's shop!</Link>
            </div>
            </div>
        </div>
    );
};

export default WantToBuy;