import { instance } from "../api/axios.api"
import { getTokenFromLocalStorage } from "../helper/localStorage.helper"
import { IProductDto } from "../types/product"
// let headers={
//     Authorization: 'Bearer '+getTokenFromLocalStorage()||'',
// }
// export const ProductService={
//     async products():Promise<IProductDto[]|undefined>{
//         const result=await instance.get<IProductDto[]>('products',{headers})
//         return result.data;
//     }

// }

export const ProductService={
    async products():Promise<IProductDto[]|undefined>{
        const result=await instance.get<IProductDto[]>('products')
        return result.data;
    }

}