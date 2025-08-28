import { useEffect, useState } from "react";
import ShopContext from "./ShopContext";
import { products } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

export default function ShopProvider({ children }) {
    const delivery_fee = 10;
    const currency = "$";
    const [ showSearch , setShowSearch ] = useState(false);
    const [ isSearch, setIsSearch ] = useState("");
    const [cartData, setCartData] = useState({});
    const [totalPrice, setTotalPrice] = useState(0);
    const [subTotal, setSubtotal] = useState(0);
    const [orders, setOrders] = useState([]);
    const [list, setList] = useState([])
    const [token, setToken] = useState(localStorage.getItem('token') ? localStorage.getItem('token') : ""); 
    const navigate = useNavigate();
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const [loading, setLoading] = useState(false)
    
    function addOrder() {
        let newOrders = [];
        cartData.forEach((item) => {
            let newOrder;
            if (item.size && item && item.quantity > 0) {
                newOrder = {
                    _id: item._id,
                    size: item.size,
                    quantity: item.quantity,
                };
                newOrders.push(newOrder);
            }
        });
        setOrders(newOrders);
    }

    const fetchAllProducts = async () => {
        setLoading(true);
        try {
            const response = await axios.get(backendUrl + "api/products/list");
            if (response.data.success) {
                setList(response.data.message);
            }
        } catch (e) {
            console.log(e.message);
            toast.error(e.message);
        } finally {
            setLoading(false);
        }
    };
    
    const fetchCart = async () => {
        try {
            const response = await axios.get(backendUrl + "api/cart/list", {headers: {token}});

            if (response.data.success) {
                setCartData(response.data.cartData)
            }

        } catch (e) {
            console.log(e.message, "From clientSide ")
            toast.error(e.message)
        }
    }

    const fetchOrders = async () => {
        try {
            const response = await axios.get(backendUrl + "api/order/userorders", {headers: {token}});

            if (response.data.success) {
                setOrders(response.data.orders)
            } else {
                toast.error(response.data.message)
            }
        } catch (e) {
            console.log(e.message);
            toast.error(e.message)
        }
    }

    useEffect(() => {
        fetchAllProducts();
        fetchCart();
        fetchOrders();
    }, [location.pathname]);

    const value = {
        products,
        delivery_fee,
        currency,
        isSearch,
        setIsSearch,
        showSearch,
        setShowSearch,
        cartData,
        setCartData,
        totalPrice,
        setTotalPrice,
        subTotal,
        setSubtotal,
        addOrder,
        navigate,
        orders,
        backendUrl,
        token,
        setToken,
        list,
        loading,
        setOrders,
    };

    return (
        <ShopContext.Provider value={value}>
            {children}
        </ShopContext.Provider>
    );

}

