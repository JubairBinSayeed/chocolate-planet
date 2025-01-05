import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getWishListCard } from "../../utils/index";
// import chocolate from "../../assets/Chocolate.webp";
import WishListCard from "../WishListCard/WishListCard";

const Wishlist = () => {
    const chocolates = useLoaderData();
    const [chocolateCard, setChocolateCard] = useState([]);

    useEffect(() => {
        const storedChocolateIds = getWishListCard();
        const chocolateCards = [];
        if (chocolates.length > 0) {
            for (const id of storedChocolateIds) {
                const chocolate = chocolates.find(choco => choco.id === id);
                if (chocolate) {
                    chocolateCards.push(chocolate);
                }
            }
        }
        setChocolateCard(chocolateCards); 
    }, []);

    return (
        <div>
            <h1 className="text-center font-bold text-2xl underline">This is Wishlist</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
            {chocolateCard.map(choco => <WishListCard 
            key={choco.id}
            choco={choco}
                />
            )}
            </div>
        </div>
    );
};

export default Wishlist;
