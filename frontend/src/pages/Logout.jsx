import { useEffect } from "react";
import { useContext } from "react";
import ShopContext from "../context/ShopContext";

function Logout() {
    const { token, setToken, navigate, setCartData, setOrders } = useContext(ShopContext); 
    useEffect(() => {
        if (token) {
            setToken("");
            setCartData({});
            setOrders([])
            localStorage.removeItem('token');   
            navigate("/");
            window.location.reload();
        } else {
            navigate('/login')
        }
    }, [])
    return (
        <>
        </>
    )
}

export default Logout;