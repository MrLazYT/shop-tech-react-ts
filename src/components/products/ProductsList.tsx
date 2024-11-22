import { useEffect, useState } from "react";
import { IProductDto } from "../../types/product";
import ProductCard from "./ProductCard";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid2";
import { Stack } from "@mui/material";
import Skeleton from "@mui/material/Skeleton";
import { ProductService } from "../../services/products.service";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: "#fff",
    ...theme.typography.body2,
    fontSize: 23,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    ...theme.applyStyles("dark", {
        backgroundColor: "#1A2027",
    }),
}));

const api: string = "https://webapi-shoptech-pv321-hxc4cna7gab9ghhc.westeurope-01.azurewebsites.net/api/products";
const ProductsList: React.FC = () => {
    const [products, setProducts] = useState<IProductDto[] | undefined>();
    let placeholder = [];

    for (let i = 0; i < 4; i++) {
        placeholder.push(
            <Grid key={i} size={{ xs: 12, sm: 6, md: 3 }}>
                <Stack spacing={1}>
                    {/* For variant="text", adjust the height via font-size */}
                    <Skeleton variant="rectangular" width={240} height={140} />

                    {/* For other variants, adjust the size with `width` and `height` */}
                    <Skeleton variant="rectangular" width={240} height={60} />
                    <Skeleton variant="text" width={240} height={40} />
                    <Skeleton variant="rounded" width={240} height={60} />
                </Stack>
            </Grid>
        );
    }

    useEffect(() => {
        const dataFetch = async () => {
            const data = await ProductService.products();
            setProducts(data);
        };
        dataFetch().catch((err) => {
            console.error(err);
        });
    }, []);

    return (
        <>
            <h1>List products</h1>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={4}>
                    {products
                        ? products?.map((product) => (
                              <Grid key={product.id} size={{ xs: 12, sm: 6, md: 3 }}>
                                  <ProductCard {...product} />
                              </Grid>
                          ))
                        : placeholder}
                </Grid>
            </Box>
        </>
    );
};

export default ProductsList;
