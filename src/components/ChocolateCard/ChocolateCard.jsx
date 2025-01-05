import { Link } from "react-router-dom";


const ChocolateCard = ({chocolate}) => {
    const {id,image,chocolate_name,status,description} = chocolate
    let {price} = chocolate
    return (
<div className="flex border-b-2 border-[#8C593C] rounded-xl hover:scale-105 transition  mb-5  bg-base-100 shadow-sm">
  <figure className="mt-10 ml-10">
    <img
      src={image}
      alt={`${chocolate_name} image cannot be found`} 
      className="w-56"
      />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{chocolate_name}</h2>
    <p><span className="font-bold">Price</span>: {
      status === "Sold" ? price = 0 : price
    }$</p>
    <p>{description}</p>
    {
        status === "Available" ? <div className="badge badge-success font-bold">{status}</div> : <div className="badge badge-error font-bold">{status}</div>
    }
    <div className="flex gap-5  justify-end" >
    <Link to={`/shop/${id}`}  className="btn btn-primary">Details</Link>
    <button className="btn btn-primary" disabled={status === "Sold"}>Add To cart</button>
    </div>
  </div>
</div>


    );
};

export default ChocolateCard;