import { IProductDto } from "../types/product";

// export default function ProductCard({ id, title, description, price, imagePath, categoryId, categoryName }: IProductDto) {
//     return (
//         <div> 
//             <h2>{title}</h2>
//             <p>{price}</p>
//         </div>

//     )
// }

const ProductCard:React.FC<IProductDto>=({ id, title, description, price, imagePath, categoryId, categoryName })=> {
    return (
        <div> 
            <h2>{title}</h2>
            <p>{price} грн.</p>
        </div>

    )
}
export default ProductCard;