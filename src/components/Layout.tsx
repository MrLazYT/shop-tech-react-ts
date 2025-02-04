import { Link, Outlet } from "react-router-dom"
import { AuthService } from "../services/auth.service";

const Layout=()=>{
    const logoutHandler=async ()=>{
        await AuthService.logout();
    }
    return(
        <>
        <header>
            <Link to={"/"}>Home</Link>
            <Link to={"/products"}>Products</Link>
            <Link to={"/login"}>Login</Link>
            <Link onClick={logoutHandler} to={"/"}>Logout</Link>

        </header>
        <main>
            <Outlet/>
        </main>
        </>
    );
}
export default Layout;