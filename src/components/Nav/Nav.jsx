// import { NavLink } from "react-router-dom";

import { NavLink } from "react-router-dom";
import Banner from "../Banner/Banner";


const Nav = () => {
    return (
        <div>
            <nav className="border-b-2 border-b-[#8C593C] m-10 p-5 rounded-xl shadow-2xl   flex justify-between items-center">
                <div className="text-2xl text-[#8C593C] font-bold">Chocolate Planet</div>
                <ul className="flex space-x-4 text-[#8C593C] font-bold items-center">
                    <NavLink to='/' className={(({isActive}) => isActive ? "border-b-2  rounded-lg" : "font-bold")}>Home</NavLink>
                    <NavLink to='/shop'>Shop</NavLink>
                    <NavLink to='/wantToBuy'>Want To Buy</NavLink>
                </ul>
                <button className="btn">Button</button>
            </nav>   
            <div className="mt-56">
                <Banner/>
            </div>       
        </div>
    );
};

export default Nav;