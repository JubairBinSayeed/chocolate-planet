

const ChocolateCard = ({chocolate}) => {
    const {id,image,price,chocolate_name,status,description} = chocolate
    return (
<div className="flex w-96 border-b-2 border-[#8C593C] rounded-xl hover:scale-105 transition  mb-5  bg-base-100 shadow-sm">
  <figure className="mt-10 ml-10">
    <img
      src={image}
      alt="Movie" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{chocolate_name}</h2>
    <p><span className="font-bold">Price</span>: {price}$</p>
    <p>{description}</p>
    {
        status === "available" ? <div className="badge badge-success">{status}</div> : <div className="badge badge-error">{status}</div>
    }
    <div className="flex gap-5  justify-end">
      <button className="btn btn-primary">Add To cart</button>
      <button to={`/shop/${id}`}  className="btn btn-primary">Details</button>
    </div>
  </div>
</div>


    );
};

export default ChocolateCard;