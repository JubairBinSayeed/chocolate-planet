import toast from "react-hot-toast";


const getWishListCard = () => {
  const wishlistCard = localStorage.getItem("wishlist");
  return wishlistCard ? JSON.parse(wishlistCard) : [];
};


const saveWishListCard = (id) => {
  const wishListCard = getWishListCard();
  if (!wishListCard.includes(id)) {
    toast.success("Chocolate added successfully!");
    wishListCard.push(id);
    localStorage.setItem("wishlist", JSON.stringify(wishListCard));
  } else {
    toast.error("Chocolate already in wishlist!");
  }
};


const deleteWishListCard = (id) => {
  const chocolates = getWishListCard();
  const updatedChocolates = chocolates.filter((chocoId) => chocoId !== id);
  localStorage.setItem("addToCart", JSON.stringify(updatedChocolates));
  toast.success("Chocolate removed from addToCart!");
};


const getAddToCart = () => {
  const wishlistCard = localStorage.getItem("addToCart");
  return wishlistCard ? JSON.parse(wishlistCard) : [];
};


const saveaddToCart = (id) => {
  const wishListCard = getWishListCard();
  if (!wishListCard.includes(id)) {
    toast.success("Chocolate added to cart");
    wishListCard.push(id);
    localStorage.setItem("addToCart", JSON.stringify(wishListCard)); 
  } else {
    toast.error("Chocolate already in cart!");
  }
};


export { getWishListCard, saveWishListCard, deleteWishListCard , getAddToCart , saveaddToCart };
