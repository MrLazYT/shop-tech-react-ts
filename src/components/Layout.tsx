import { Link, Outlet } from "react-router-dom"

const Layout=()=>{
    return(
        <>
        <header>
            <Link to={"/"}>Home</Link>
            <Link to={"/products"}>Products</Link>
        </header>
        <main>
            <Outlet/>
        </main>
        </>
    );
}
export default Layout;