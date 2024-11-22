import { IProductDto } from "../../types/product";
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import noImage from "../../../src/assets/images/no-image.jpg";
import { useNavigate } from "react-router-dom";
import { ProductService } from "../../services/products.service";

const ProductCard: React.FC<IProductDto> = ({ id, title, description, price, imagePath, categoryId, categoryName }) => {
    const navigate = useNavigate();

    const onEdit = () => {
        navigate(`edit-product/${id}`);
    };

    const onDelete = () => {
        ProductService.delete(id);
        window.location.reload();
    };

    return (
        <Card sx={{ height: "100%", maxWidth: 240 }}>
            <CardMedia sx={{ height: 160, backgroundSize: "contain" }} image={imagePath || noImage} title={title} />
            <CardContent>
                <Typography gutterBottom fontSize={20} component="div">
                    {title}
                </Typography>
                <Typography gutterBottom fontSize={18} variant="h6" component="div">
                    {price} грн.
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {description}
                </Typography>
                <Typography variant="body2" sx={{ color: "primary.main" }}>
                    {categoryName}
                </Typography>
            </CardContent>
            <CardActions>
                <Button onClick={onEdit} size="small">
                    Edit
                </Button>
                <Button onClick={onDelete} size="small">
                    Delete
                </Button>
            </CardActions>
        </Card>
    );
};
export default ProductCard;
