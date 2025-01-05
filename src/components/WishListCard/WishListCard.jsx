import { Link } from "react-router-dom";
import chocolate from "../../assets/chocolate.webp";

const WishListCard = ({ choco }) => {
    const { id, image, chocolate_name, status, price ,  description } = choco;
    const displayPrice = status === "Sold" ? 0 : price;
    return (
        <div className="card  w-96 border-b-2 border-[#8C593C] rounded-xl hover:scale-105 transition mb-5 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img
      src={image || chocolate}
      alt= {`${chocolate_name} image cannot be found`}
      className="rounded-xl w-56" />
  </figure>
  <div className="card-body items-center text-center">
    <h1 className="card-title">{chocolate_name}</h1>
    <p>{description}</p>
    <p className="card-title"><span className="font-bold">Price</span>: {displayPrice}$</p>
    </div>
    {status === "Available" ? (
                    <div className="badge ml-10  badge-success font-bold">{status}</div>
                ) : (
                    <div className="badge ml-10  badge-error font-bold">{status}</div>
                )}
    <div className="flex gap-5 m-3  justify-end">
                    <Link to={`/shop/${id}`} className="btn btn-primary">
                        Details
                    </Link>
                    <button className="btn btn-primary" disabled={status === "Sold"}>
                        Add To Cart
                    </button>
                    <button className="absolute p-2 bottom-[500px] left-[370px] border-2xl bg-white btn btn-circle hover:border-neutral hover:bg-rose-500 btn-outline">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>
</div>
    );
};

export default WishListCard;
