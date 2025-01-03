import { Link, NavLink } from "react-router-dom";


const Nav = () => {
    return (
        <div>
            <nav className="navbar rounded-xl  flex justify-between items-center">
                <div className="text-2xl text-[#8C593C] font-bold">Chocolate Planet</div>
                <ul className="flex space-x-4 text-[#8C593C] font-bold items-center">
                    <NavLink to='/' className={(({isActive}) => isActive ? "underline underline-offset-4 font-extrabold  rounded-lg" : "font-bold")}>Home</NavLink>
                    <NavLink to='/shop'>Shop</NavLink>
                    <NavLink to='/wantToBuy'>Want To Buy</NavLink>
                    <NavLink to='/addToCart'>Add To Cart</NavLink>
                    <NavLink to='/wishlist'>WishList</NavLink>
                </ul>
                <Link to='/register' className="btn">Register</Link>
            </nav>       
            </div>
    );
};

export default Nav;