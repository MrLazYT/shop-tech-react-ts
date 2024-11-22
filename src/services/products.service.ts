import { instance } from "../api/axios.api";
import { ICreateProductDto, IEditProductDto, IProductDto } from "../types/product";

export const ProductService = {
    async products(): Promise<IProductDto[] | undefined> {
        const result = await instance.get<IProductDto[]>("products");

        return result.data;
    },

    async getProductById(id: number): Promise<IProductDto | undefined> {
        const result = await instance.get<IProductDto>(`products/${id}`);

        return result.data;
    },

    async create(product: ICreateProductDto): Promise<void> {
        const result = await instance.post("products/create", product);
    },

    async edit(product: IEditProductDto): Promise<void> {
        const result = await instance.put("products/edit", product);
    },

    async delete(id: number): Promise<void> {
        const result = await instance.delete(`products/${id}`);
    },
};
