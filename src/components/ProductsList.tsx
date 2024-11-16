import { useEffect, useState } from "react";
import { IProductDto } from "../types/product";
import ProductCard from "./ProductCard";
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    fontSize: 23,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    ...theme.applyStyles('dark', {
        backgroundColor: '#1A2027',
    }),
}));




const api: string = "https://webapi-shoptech-pv321-hxc4cna7gab9ghhc.westeurope-01.azurewebsites.net/api/products";
const ProductsList: React.FC = () => {

    const [products, setProducts] = useState<IProductDto[] | undefined>();
    useEffect(() => {
        fetch(api)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setProducts(data);
                // console.log(products);
            }).catch(err => console.error(err));

    }, []);

    return (
        <>
            <h1>List products</h1>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={4}>
                        {
                            products ? (
                                products?.map((product) =>
                                <Grid key={product.id} size={{ xs: 12, sm:6, md: 3 }}>
                                     <ProductCard {...product} /> 
                                </Grid>
                                )) :
                                <p>Downloading....</p>
                        }
                </Grid>
            </Box>
        </>
    );
}

export default ProductsList;