import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { deleteWishListCard, getWishListCard } from "../../utils/index";
import WishListCard from "../WishListCard/WishListCard";

const Wishlist = () => {
  const chocolates = useLoaderData();
  const [chocolateCard, setChocolateCard] = useState([]);

 
  useEffect(() => {
    const storedChocolateIds = getWishListCard();
    const matchedChocolates = chocolates.filter((choco) =>
      storedChocolateIds.includes(choco.id)
    );
    setChocolateCard(matchedChocolates);
  }, [chocolates]);

  
  const handleDelete = (id) => {
    deleteWishListCard(id);
    setChocolateCard((prev) => prev.filter((choco) => choco.id !== id));
  };

  return (
    <div>
      {
        chocolateCard.length > 0 ? <h1 className="text-center font-bold text-2xl underline">
        This is Wishlist
      </h1> : <div className="text-center  min-h-screen mx-auto mt-96">
      <h1 className="font-bold bg-white text-3xl ">
      No Chocolates found , add chocolates here
    </h1> 
     <Link to='/shop'  className="relative btn  inline-flex items-center justify-center px-10 py-4 overflow-hidden font-mono font-medium tracking-tighter text-white bg-gray-900  rounded-lg group">
     <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#8C593C] rounded-full group-hover:w-56 group-hover:h-56"></span>
     <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
     <btn className="relative " >Chocolates</btn>
 </Link>
      </div>
      }

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {chocolateCard.map((choco) => (
          <WishListCard
            key={choco.id}
            choco={choco}
            handleDelete={handleDelete}
            deletable={true}
          />
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
