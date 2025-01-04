import toast from "react-hot-toast"

const getWishListCard = () => {
    const wishlistCard = localStorage.getItem('wishlist')
    if(wishlistCard){
        return JSON.parse(wishlistCard)
    }
    return []
}
const saveWishListCard = id => {
    const wishListCard = getWishListCard()
    const exist = wishListCard.find( chocoId => chocoId === id)
    if (!exist) {
        toast.success("Chocolate added successfully")
        wishListCard.push(id);
        localStorage.setItem('wishlist' , JSON.stringify(wishListCard))
    } else {
        toast.error("Cannot add more than one chcolate or you will have diabetis")
    }
}

export { getWishListCard, saveWishListCard }