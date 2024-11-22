import { Box, Button, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { IEditProductDto } from "../../types/product";
import { ProductService } from "../../services/products.service";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

export default function EditProduct() {
    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        const fetchProduct = async () => {
            if (id) {
                const fetchedProduct = await ProductService.getProductById(Number(id));

                if (fetchedProduct) {
                    setValue("title", fetchedProduct.title);
                    setValue("description", fetchedProduct.description);
                    setValue("price", fetchedProduct.price);
                    setValue("imagePath", fetchedProduct.imagePath);
                    setValue("categoryId", fetchedProduct.categoryId);
                }
            }
        };
        fetchProduct();
    }, [id]);

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm<IEditProductDto>();

    const onSubmit = async (product: IEditProductDto) => {
        await ProductService.edit(product);
        navigate("/products");
    };

    return (
        <div className="Login">
            <Box>
                <Typography variant="h4">Creating New Product</Typography>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <TextField required {...register("title")} id="title" label="title" type="title" variant="filled" />
                    <TextField
                        {...register("description")}
                        id="description"
                        label="description"
                        type="description"
                        variant="filled"
                    />
                    <TextField required {...register("price")} id="price" label="price" type="price" variant="filled" />
                    <TextField
                        {...register("imagePath")}
                        id="imagePath"
                        label="imagePath"
                        type="imagePath"
                        variant="filled"
                    />
                    <TextField
                        required
                        {...register("categoryId")}
                        id="categoryId"
                        label="categoryId"
                        variant="filled"
                    />

                    <Button variant="contained" type="submit">
                        Create
                    </Button>
                </form>
            </Box>
        </div>
    );
}
