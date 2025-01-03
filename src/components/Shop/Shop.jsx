import { useEffect, useState } from "react";
import ChocolateCard from "../ChocolateCard/ChocolateCard";
import PlaceOrder from "../PlaceOrder/PlaceOrder";


const Shop = () => {
    const [chocolates,setChocolates] = useState([])
    useEffect(()=>{
        fetch('/chocolate.json')
        .then(res => res.json())
        .then(data => setChocolates(data.chocolates))
        console.log(chocolates);
    },[])
    return (
        <div>
            <h1 className="text-center font-bold text-2xl underline">This is Shop: {chocolates.length}</h1>    
            <div className="flex items-center justify-center w-full ">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                {
                    chocolates.map(chocolate => <ChocolateCard 
                        key={chocolate.id} 
                        chocolate={chocolate}
                    />)
                }
            </div>
            <div>
                <PlaceOrder/>
            </div>        
            </div>
        </div>
    );
};

export default Shop;