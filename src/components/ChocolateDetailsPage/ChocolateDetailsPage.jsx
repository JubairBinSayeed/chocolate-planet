
import {  useLoaderData, useParams } from "react-router-dom";
import { saveWishListCard } from "./utils";

const ChocolateDetailsPage = () => {
  const chocolates = useLoaderData();
  const addToWishList = () =>{
        saveWishListCard(id)
  }
  const { id } = useParams();
  const paramInt = parseInt(id, 10);

  const chocolate = chocolates.find(choco => choco.id === paramInt);

  return (
    <div className="hero bg-base-200 min-h-screen">
      {chocolate ? (
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={chocolate.image}
            alt={chocolate.chocolate_name}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">{chocolate.chocolate_name}</h1>
            <p className="py-6">{chocolate.description || "No description available."}</p>
            <p className="text-2xl font-bold">Price: ${chocolate.price.toFixed(2)}</p>
            {
        chocolate.status === "Available" ? <div className="badge badge-success font-bold">{chocolate.status}</div> : <div className="badge badge-error font-bold">{chocolate.status}</div>
    }<br/>
            <div className="flex gap-5">
            {
                chocolate.status === "Available" ? 
                   <div>
                <button className="btn btn-primary mt-4">Order Now</button><br />
                <button className="btn btn-primary mt-4">Add To Cart</button><br />
                <button onClick={addToWishList}  className="btn btn-primary mt-4">Add To WishList</button>
                </div> : <button onClick={addToWishList} className="btn btn-primary mt-4">Add To WishList</button>
              }
            </div>
          </div>
        </div>
      ) : (
        <p className="text-center text-red-500">Chocolate not found!</p>
      )}
    </div>
  );
};

export default ChocolateDetailsPage;
