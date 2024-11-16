import { instance } from "../api/axios.api"
import { IProductDto } from "../types/product"

export const ProductService={
    async products():Promise<IProductDto[]|undefined>{
        const result=await instance.get<IProductDto[]>('products')
        return result.data
    }
}