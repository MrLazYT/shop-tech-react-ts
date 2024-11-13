import { useEffect, useState } from "react";
import { IProductDto } from "../types/product";
import ProductCard from "./ProductCard";

const api: string = "https://webapi-shoptech-pv321-hxc4cna7gab9ghhc.westeurope-01.azurewebsites.net/api/products";
const ProductsList:React.FC = () => {
    const [products, setProducts] = useState<IProductDto[] | undefined>();
    useEffect(()=>{
        fetch(api)
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                setProducts(data);
                // console.log(products);
            }).catch(err=>console.error(err));

    },[]);

    return (
        <div>
            <h1>List products</h1>
            <ul>
                {
                    products ? (
                        products?.map((product)=>
                        <li key={product.id}> <ProductCard {...product}/>  </li>
                    )):
                        <p>Downloading....</p>
                }
            </ul>

        </div>
    );
}

export default ProductsList;