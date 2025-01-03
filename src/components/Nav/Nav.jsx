import { Link, NavLink } from "react-router-dom";


const Nav = () => {
    return (
        <div>
            <nav className="navbar rounded-xl  flex justify-between items-center">
                <div className="text-2xl text-[#8C593C] font-bold">Chocolate Planet</div>
                <ul className="flex space-x-4 text-[#8C593C] font-bold items-center">
                    <NavLink to='/' className={(({isActive}) => isActive ? "underline underline-offset-4 font-extrabold  rounded-lg" : "font-bold")}>Home</NavLink>
                    <NavLink to='/shop' className={(({isActive}) => isActive ? "underline underline-offset-4 font-extrabold  rounded-lg" : "font-bold")}>Shop</NavLink>
                    <NavLink to='/wantToBuy' className={(({isActive}) => isActive ? "underline underline-offset-4 font-extrabold  rounded-lg" : "font-bold")}>Want To Buy</NavLink>
                    <NavLink to='/addToCart' className={(({isActive}) => isActive ? "underline underline-offset-4 font-extrabold  rounded-lg" : "font-bold")}>Add To Cart</NavLink>
                    <NavLink to='/wishlist' className={(({isActive}) => isActive ? "underline underline-offset-4 font-extrabold  rounded-lg" : "font-bold")}>WishList</NavLink>
                </ul>
                <Link to='/register' className="btn">Register</Link>
            </nav>       
            </div>
    );
};

export default Nav;