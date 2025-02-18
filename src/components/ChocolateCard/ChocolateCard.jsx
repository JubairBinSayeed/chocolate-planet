import { Link } from "react-router-dom";
import { saveaddToCart } from "../../utils";


const ChocolateCard = ({chocolate}) => {
    const {id,image,chocolate_name,status,description} = chocolate
    let {price} = chocolate
    const handleAddToCart = () => {
      saveaddToCart(parseInt(id))
    }
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
        status === "Available" ? 
        <div>
          <div aria-label="success" className="status animate-bounce status-success"></div> <div className="badge badge-success font-bold">{status}</div>
        </div> : <div>
        <div aria-label="success" className="status animate-bounce status-error"></div>  <div className="badge badge-error font-bold">{status}</div>
        </div>
    }
    <div className="flex gap-5  justify-end" >
    <Link to={`/shop/${id}`}  className="btn btn-primary">Details</Link>
    <button onClick={handleAddToCart}  className="btn btn-primary" disabled={status === "Sold"}>Add To cart</button>
    </div>
  </div>
</div>


    );
};

export default ChocolateCard;