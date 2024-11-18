import { Box, Button, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { ICreateProductDto } from "../../types/product";
import { ProductService } from "../../services/products.service";
import { useNavigate } from "react-router-dom";

export default function CreateProduct()
{
    const navigate = useNavigate();

    const {
        register, // to attrack changes of form inputs
        handleSubmit, //onSubmit event handler
        formState: { errors }
    } = useForm<ICreateProductDto>();

    const onSubmit = async (product: ICreateProductDto) => {
        await ProductService.create(product);
        navigate("/products");
    }

    return (
        <div className="Login">
            <Box>
                <Typography variant="h4">Creating New Product</Typography>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <TextField
                        required
                        {...register("title")}
                        id="title"
                        label="title"
                        type="title"
                        variant="filled"/>
                    <TextField
                        {...register("description")}
                        id="description"
                        label="description"
                        type="description"
                        variant="filled"/>
                    <TextField
                        required
                        {...register("price")}
                        id="price"
                        label="price"
                        type="price"
                        variant="filled"/>
                    <TextField
                        {...register("imagePath")}
                        id="imagePath"
                        label="imagePath"
                        type="imagePath"
                        variant="filled"/>
                    <TextField
                        required
                        {...register("categoryId")}
                        id="categoryId"
                        label="categoryId"
                        variant="filled"/>

                    <Button variant="contained" type="submit">Create</Button>
                </form>
            </Box>
        </div>
    )
}