import "./App.css";
import ProductsList from "./components/products/ProductsList";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Login from "./components/accounts/Login";
import CreateProduct from "./components/products/CreateProduct";
import { Register } from "./components/accounts/Register";
import EditProduct from "./components/products/EditProduct";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="products" element={<ProductsList />} />
                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<Register />} />
                    <Route path="create-product" element={<CreateProduct />} />
                    <Route path="products/edit-product/:id" element={<EditProduct />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
